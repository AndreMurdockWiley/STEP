import fs from 'node:fs';
import path from 'node:path';

function parseAttrs(tagText) {
  const attrs = {};
  const re = /([\w:-]+)\s*=\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(tagText))) {
    attrs[m[1]] = m[2];
  }
  return attrs;
}

function parseTagName(tagText) {
  const m = tagText.match(/^<\/?\s*([^\s>\/]+)/);
  return m ? m[1] : '';
}

function mdEscapeInline(s) {
  return String(s ?? '').replaceAll('\\', '\\\\').replaceAll('`', '\\`');
}

function safeFileName(name) {
  return String(name).replace(/[\/\\:*?"<>|]/g, '_');
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function ensureCleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function walkFiles(rootDir) {
  const out = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.isFile()) out.push(p);
    }
  }
  walk(rootDir);
  return out;
}

function buildRuleFileIndex(sourceRoot) {
  const files = walkFiles(sourceRoot).filter((p) => p.endsWith('.js') || p.endsWith('.mjs'));
  const byBase = new Map(); // "RuleId" -> [abs paths]
  for (const f of files) {
    const base = path.basename(f).replace(/\.(mjs|js)$/i, '');
    const list = byBase.get(base) ?? [];
    list.push(f);
    byBase.set(base, list);
  }
  return byBase;
}

function coalesce(...vals) {
  for (const v of vals) {
    if (v === null || v === undefined) continue;
    const s = String(v).trim();
    if (s) return s;
  }
  return '';
}

function uniqBy(arr, keyFn) {
  const seen = new Set();
  const out = [];
  for (const x of arr) {
    const k = keyFn(x);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(x);
  }
  return out;
}

function splitWorkflowDetails(raw) {
  const parts = String(raw ?? '').split('#PARAMETER_SEPARATOR#');
  const workflowId = (parts[0] ?? '').trim();
  const stateOrTask = (parts[1] ?? '').trim();
  return {
    workflowId,
    stateOrTask,
    raw,
  };
}

function inferBusinessPerspectiveFromName(workflowId) {
  const id = String(workflowId ?? '');
  const tokens = id
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const has = (t) => tokens.includes(t);
  const hints = [];

  if (has('soft') && has('delete')) hints.push('soft-delete review/approval flow');
  if (has('revive') || has('revival')) hints.push('revival (undo soft-delete) review/approval flow');
  if (has('creation') || has('create')) hints.push('creation/initiation flow');
  if (has('error') && (has('review') || has('rework'))) hints.push('error review/rework flow');
  if (has('package')) hints.push('package lifecycle flow');
  if (has('collection')) hints.push('collection lifecycle flow');
  if (has('journal')) hints.push('journal lifecycle flow');
  if (has('issue') || has('issues')) hints.push('issue lifecycle flow');
  if (has('pub') || has('publication')) hints.push('publication-year/volume/issue preparation flow');
  if (has('workflow')) hints.push('general workflow orchestration');

  if (!hints.length) return '';
  return `From naming alone, this appears to be a ${hints.join(', ')}.`;
}

const xmlPath = path.resolve(process.argv[2] ?? path.join(process.cwd(), 'WebUI.xml'));
const sourceRoot = path.resolve(process.argv[3] ?? process.cwd());
const outDir = path.resolve(process.argv[4] ?? path.join(process.cwd(), 'docs', 'webui-analysis'));

if (!fs.existsSync(xmlPath)) {
  console.error(`Web UI XML not found: ${xmlPath}`);
  process.exit(1);
}

const xml = fs.readFileSync(xmlPath, 'utf8');
const tagRe = /<[^>]+>/g;

// We keep lightweight element objects on a stack to capture context.
// For components and screens, we retain a "params" bag, so we can reference
// labels/titles associated with a BusinessAction even if the Label appears later.
const stack = [];
const allScreens = [];
const allScreensById = new Map();
const calls = [];
const workflowRefs = [];
const workflowMappings = [];

function nearestElement(name) {
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i].name === name) return stack[i];
  }
  return null;
}

function nearestComponent() {
  return nearestElement('component');
}

function nearestScreen() {
  return nearestElement('screen');
}

function nearestComponentByType(type) {
  for (let i = stack.length - 1; i >= 0; i--) {
    const el = stack[i];
    if (el.name !== 'component') continue;
    if ((el.attrs?.type ?? '') === type) return el;
  }
  return null;
}

function nearestParamList() {
  return nearestElement('parameter-list');
}

function handleParameter(attrs) {
  const id = attrs.id ?? '';
  const value = attrs.value ?? '';

  // Attach parameters to the nearest component/screen for later context.
  const comp = nearestComponent();
  const scr = nearestScreen();
  if (id) {
    if (comp) {
      comp.params[id] = value;
    } else if (scr) {
      scr.params[id] = value;
    }
  } else if (value) {
    // Handle list-style parameters (no id, value only) like <parameter value="State-13"/>
    const pl = nearestParamList();
    const listId = pl?.attrs?.id ?? '';
    if (listId) {
      pl.values.push(value);
      const target = comp ?? scr;
      if (target) {
        target.listValues[listId] = target.listValues[listId] ?? [];
        target.listValues[listId].push(value);
      }
    }
  }

  if (id === 'BusinessAction') {
    calls.push({
      businessAction: value,
      component: comp,
      screen: scr,
    });
  }

  if (id === 'Workflow') {
    workflowRefs.push({
      workflowId: value,
      component: comp,
      screen: scr,
    });
  }

  if (id === 'WorkflowDetails') {
    // ScreenMapping -> WorkflowCondition carries WorkflowDetails such as:
    // WorkflowID#PARAMETER_SEPARATOR#State-13#PARAMETER_SEPARATOR#
    const mappingComp = nearestComponentByType('ScreenMapping');
    if (mappingComp) {
      mappingComp.workflowDetails = mappingComp.workflowDetails ?? [];
      mappingComp.workflowDetails.push(value);
      const screenId = mappingComp.params?.Screen ?? '';
      const parsed = splitWorkflowDetails(value);
      if (parsed.workflowId) {
        workflowMappings.push({
          screenId,
          workflowId: parsed.workflowId,
          stateOrTask: parsed.stateOrTask,
          raw: parsed.raw,
        });
      }
    }
  }
}

let match;
while ((match = tagRe.exec(xml))) {
  const rawTag = match[0];

  // Skip comments/processing instructions/doctype-ish nodes.
  if (rawTag.startsWith('<!--') || rawTag.startsWith('<?') || rawTag.startsWith('<!')) continue;

  const isEnd = rawTag.startsWith('</');
  const selfClosing = rawTag.endsWith('/>');
  const name = parseTagName(rawTag);

  if (!name) continue;

  if (isEnd) {
    // Pop exactly one (XML is well-formed; we intentionally don't push <parameter/>).
    if (stack.length) stack.pop();
    continue;
  }

  const attrs = parseAttrs(rawTag);

  if (name === 'parameter') {
    handleParameter(attrs);
    continue;
  }

  const elem = {
    name,
    attrs,
    params: name === 'component' || name === 'screen' ? {} : null,
    listValues: name === 'component' || name === 'screen' ? {} : null,
    values: name === 'parameter-list' ? [] : null,
  };
  stack.push(elem);

  if (name === 'screen') {
    const sid = attrs.id ?? '';
    allScreens.push(elem);
    if (sid) allScreensById.set(sid, elem);
  }

  if (selfClosing) {
    stack.pop();
  }
}

// Convert calls to a stable plain format.
const ruleFiles = buildRuleFileIndex(sourceRoot);

function formatCall(c) {
  const comp = c.component;
  const scr = c.screen;

  const screenId = scr?.attrs?.id ?? '';
  const screenType = scr?.attrs?.type ?? '';
  const componentType = comp?.attrs?.type ?? '';
  const componentId = comp?.attrs?.id ?? '';

  const label = coalesce(comp?.params?.Label, comp?.params?.Title, comp?.params?.ComponentTitle, comp?.params?.PopupLabel);
  const restrict = comp?.attrs?.restrict ?? '';

  const implPaths = (ruleFiles.get(c.businessAction) ?? []).map((p) => path.relative(sourceRoot, p));

  return {
    businessAction: c.businessAction,
    screenId,
    screenType,
    componentType,
    componentId,
    label,
    restrict,
    implementationFiles: implPaths.sort(),
  };
}

const records = calls.map(formatCall);

// Groupings.
const byScreen = new Map();
const byAction = new Map();

for (const r of records) {
  const sKey = `${r.screenId || '(no-screen)'}||${r.screenType || ''}`;
  const aKey = r.businessAction || '(missing)';

  const sList = byScreen.get(sKey) ?? [];
  sList.push(r);
  byScreen.set(sKey, sList);

  const aList = byAction.get(aKey) ?? [];
  aList.push(r);
  byAction.set(aKey, aList);
}

// Write outputs.
ensureDir(outDir);

function sortKeyScreen(k) {
  const [id] = k.split('||');
  return id.toLowerCase();
}

// Build workflow-by-screen index.
const workflowByScreen = new Map(); // screenId -> Set(workflowId)
for (const m of workflowMappings) {
  if (!m.screenId || !m.workflowId) continue;
  const set = workflowByScreen.get(m.screenId) ?? new Set();
  set.add(m.workflowId);
  workflowByScreen.set(m.screenId, set);
}
for (const ref of workflowRefs) {
  const sid = ref.screen?.attrs?.id ?? '';
  if (!sid || !ref.workflowId) continue;
  const set = workflowByScreen.get(sid) ?? new Set();
  set.add(ref.workflowId);
  workflowByScreen.set(sid, set);
}

// Build workflows model.
const workflows = new Map(); // workflowId -> { mappings:[], refs:[], screens:Set }
for (const m of workflowMappings) {
  if (!m.workflowId) continue;
  const rec = workflows.get(m.workflowId) ?? { mappings: [], refs: [], screens: new Set() };
  rec.mappings.push(m);
  if (m.screenId) rec.screens.add(m.screenId);
  workflows.set(m.workflowId, rec);
}
for (const r of workflowRefs) {
  if (!r.workflowId) continue;
  const rec = workflows.get(r.workflowId) ?? { mappings: [], refs: [], screens: new Set() };
  rec.refs.push(r);
  const sid = r.screen?.attrs?.id ?? '';
  if (sid) rec.screens.add(sid);
  workflows.set(r.workflowId, rec);
}

// ---- Single consolidated markdown report ----
const report = [];
report.push('## STEP Web UI analysis (single-file report)');
report.push('');
report.push(`Source: \`${mdEscapeInline(path.relative(process.cwd(), xmlPath))}\``);
report.push('');
report.push('### Summary');
report.push('');
report.push(`- **Total BusinessAction call-sites found**: ${records.length}`);
report.push(`- **Unique BusinessActions**: ${byAction.size}`);
report.push(`- **Screens containing BusinessActions**: ${byScreen.size}`);
report.push(`- **Workflow mappings found (ScreenMapping/WorkflowCondition)**: ${workflowMappings.length}`);
report.push(`- **Workflow references found (components with \`Workflow\` parameter)**: ${workflowRefs.length}`);
report.push('');

report.push('### Table of contents');
report.push('');
report.push('- [Workflows](#workflows)');
report.push('- [Screens](#screens)');
report.push('- [BusinessAction calls by screen](#businessaction-calls-by-screen)');
report.push('- [BusinessAction calls by BusinessAction](#businessaction-calls-by-businessaction)');
report.push('');

// Workflows section.
report.push('### Workflows');
report.push('');
const workflowIds = [...workflows.keys()].sort((a, b) => a.localeCompare(b));
if (!workflowIds.length) {
  report.push('—');
  report.push('');
} else {
  for (const wfId of workflowIds) {
    const wf = workflows.get(wfId);
    const screenIds = [...wf.screens].sort();

    // Collect BusinessActions across all related screens.
    const actionSet = new Set();
    const screenToActions = new Map();
    for (const sid of screenIds) {
      const matches = [...byScreen.keys()].filter((k) => k.startsWith(`${sid}||`));
      const actions = [];
      for (const k of matches) {
        for (const a of byScreen.get(k) ?? []) {
          actions.push(a);
          actionSet.add(a.businessAction);
        }
      }
      if (actions.length) screenToActions.set(sid, uniqBy(actions, (r) => `${r.businessAction}||${r.componentType}||${r.componentId}||${r.label}`));
    }

    // States/tasks referenced (best-effort).
    const states = new Set();
    for (const m of wf.mappings) {
      if (m.stateOrTask) states.add(m.stateOrTask);
    }
    for (const ref of wf.refs) {
      const st = ref.component?.listValues?.States ?? [];
      for (const s of st) states.add(s);
    }

    report.push(`#### \`${mdEscapeInline(wfId)}\``);
    report.push('');
    report.push(`- **Screens involved (Web UI)**: ${screenIds.length}`);
    report.push(`- **Business actions exposed (Web UI)**: ${actionSet.size}`);
    report.push(`- **Workflow mappings (ScreenMapping/WorkflowCondition)**: ${wf.mappings.length}`);
    report.push(`- **Workflow parameter references (components)**: ${wf.refs.length}`);
    report.push('');

    const namingHint = inferBusinessPerspectiveFromName(wfId);
    if (namingHint) {
      report.push(namingHint);
      report.push('');
    }

    report.push('**States / tasks referenced (best-effort)**');
    report.push('');
    if (states.size) {
      for (const s of [...states].sort()) report.push(`- \`${mdEscapeInline(s)}\``);
    } else {
      report.push('—');
    }
    report.push('');

    report.push('**Web UI screens and actions**');
    report.push('');
    for (const sid of screenIds) {
      const scrObj = allScreensById.get(sid);
      const st = scrObj?.attrs?.type ?? '';
      report.push(`- **Screen**: \`${mdEscapeInline(sid)}\`${st ? ` (${mdEscapeInline(st)})` : ''}`);

      const actions = screenToActions.get(sid) ?? [];
      if (actions.length) {
        actions.sort((a, b) => a.businessAction.localeCompare(b.businessAction));
        for (const a of actions) {
          const impl = a.implementationFiles.length ? ` — ${a.implementationFiles.map((p) => `\`${mdEscapeInline(p)}\``).join(', ')}` : '';
          const label = a.label ? ` — ${mdEscapeInline(a.label)}` : '';
          const comp = a.componentType ? ` (${mdEscapeInline(a.componentType)})` : '';
          report.push(`  - **\`${mdEscapeInline(a.businessAction)}\`**${comp}${label}${impl}`);
        }
      } else {
        report.push('  - No BusinessAction calls were detected on this screen.');
      }
    }
    report.push('');

    report.push('**Functional / business perspective (starter)**');
    report.push('');
    report.push(
      'Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.'
    );
    report.push('');
    report.push('**Notes (fill in)**');
    report.push('');
    report.push('- **Why this workflow was built**:');
    report.push('- **Primary users / roles**:');
    report.push('- **Entry criteria**:');
    report.push('- **Key validations / business rules**:');
    report.push('- **Exit criteria / definition of done**:');
    report.push('- **Downstream integrations / consumers**:');
    report.push('');
  }
}

// Screens section.
report.push('### Screens');
report.push('');
const allScreenIds = uniqBy(
  allScreens.map((s) => ({ id: s.attrs?.id ?? '', type: s.attrs?.type ?? '' })).filter((s) => s.id),
  (s) => s.id
).sort((a, b) => a.id.localeCompare(b.id));

for (const s of allScreenIds) {
  const screenId = s.id;
  const screenType = s.type;
  const callsForScreen = [...byScreen.entries()]
    .filter(([k]) => k.startsWith(`${screenId}||`))
    .flatMap(([, v]) => v ?? []);
  const workflowsForScreen = [...(workflowByScreen.get(screenId) ?? new Set())].sort();

  report.push(`#### \`${mdEscapeInline(screenId)}\``);
  report.push('');
  report.push(`- **Screen type**: ${mdEscapeInline(screenType || '—')}`);
  report.push(`- **Workflows referenced**: ${workflowsForScreen.length ? workflowsForScreen.map((w) => `\`${mdEscapeInline(w)}\``).join(', ') : '—'}`);
  report.push('');

  report.push('**Business actions on this screen**');
  report.push('');
  if (callsForScreen.length) {
    const uniqCalls = uniqBy(callsForScreen, (r) => `${r.businessAction}||${r.componentType}||${r.componentId}||${r.label}`).sort((a, b) =>
      a.businessAction.localeCompare(b.businessAction)
    );
    for (const r of uniqCalls) {
      const impl = r.implementationFiles.length ? ` — ${r.implementationFiles.map((p) => `\`${mdEscapeInline(p)}\``).join(', ')}` : '';
      const label = r.label ? ` — ${mdEscapeInline(r.label)}` : '';
      const comp = r.componentType ? ` (${mdEscapeInline(r.componentType)})` : '';
      report.push(`- **\`${mdEscapeInline(r.businessAction)}\`**${comp}${label}${impl}`);
    }
  } else {
    report.push('—');
  }
  report.push('');

  report.push('**Functional / business perspective (starter)**');
  report.push('');
  report.push(
    'This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.'
  );
  report.push('');
  report.push('**Notes (fill in)**');
  report.push('');
  report.push('- **Why this screen exists**:');
  report.push('- **Who uses it**:');
  report.push('- **Key decisions / validations**:');
  report.push('- **Downstream impacts**:');
  report.push('');
}

// BusinessAction calls by screen section.
report.push('### BusinessAction calls by screen');
report.push('');
const screenKeys = [...byScreen.keys()].sort((a, b) => sortKeyScreen(a).localeCompare(sortKeyScreen(b)));
for (const sk of screenKeys) {
  const [screenId, screenType] = sk.split('||');
  const list = byScreen.get(sk) ?? [];
  const screenTitle = `${screenId}${screenType ? ` (${screenType})` : ''}`;
  report.push(`#### \`${mdEscapeInline(screenTitle)}\``);
  report.push('');

  const uniqCalls = uniqBy(list, (r) => `${r.businessAction}||${r.componentType}||${r.componentId}||${r.label}`);
  uniqCalls.sort((a, b) => a.businessAction.localeCompare(b.businessAction));

  for (const r of uniqCalls) {
    const impl = r.implementationFiles.length ? ` — ${r.implementationFiles.map((p) => `\`${mdEscapeInline(p)}\``).join(', ')}` : '';
    const label = r.label ? ` — ${mdEscapeInline(r.label)}` : '';
    const comp = r.componentType ? ` (${mdEscapeInline(r.componentType)})` : '';
    report.push(`- **\`${mdEscapeInline(r.businessAction)}\`**${comp}${label}${impl}`);
  }
  report.push('');
}

// BusinessAction calls by action section.
report.push('### BusinessAction calls by BusinessAction');
report.push('');
const actionKeys = [...byAction.keys()].sort((a, b) => a.localeCompare(b));
for (const ak of actionKeys) {
  const list = byAction.get(ak) ?? [];
  const impl = (ruleFiles.get(ak) ?? []).map((p) => path.relative(sourceRoot, p)).sort();
  report.push(`#### \`${mdEscapeInline(ak)}\``);
  report.push('');
  report.push(`- **Implementation file(s)**: ${impl.length ? impl.map((p) => `\`${mdEscapeInline(p)}\``).join(', ') : '— (no matching .js/.mjs file found in repo)'}`);

  const uniqPlaces = uniqBy(list, (r) => `${r.screenId}||${r.screenType}||${r.componentType}||${r.componentId}||${r.label}`);
  uniqPlaces.sort((a, b) => (a.screenId || '').localeCompare(b.screenId || ''));

  for (const r of uniqPlaces) {
    const screen = `${r.screenId || '(no-screen)'}${r.screenType ? ` (${r.screenType})` : ''}`;
    const label = r.label ? ` — ${mdEscapeInline(r.label)}` : '';
    const comp = r.componentType ? ` (${mdEscapeInline(r.componentType)})` : '';
    report.push(`- **Screen**: \`${mdEscapeInline(screen)}\`${comp}${label}`);
  }
  report.push('');
}

const mdOut = path.join(outDir, 'webui-analysis.md');
fs.writeFileSync(mdOut, report.join('\n'), 'utf8');

console.log(`Wrote:\n- ${path.relative(process.cwd(), mdOut)}`);
