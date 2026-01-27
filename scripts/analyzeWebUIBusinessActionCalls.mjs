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
const calls = [];

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

function handleParameter(attrs) {
  const id = attrs.id ?? '';
  const value = attrs.value ?? '';

  // Attach parameters to the nearest component/screen for later context.
  const comp = nearestComponent();
  const scr = nearestScreen();
  if (comp) {
    comp.params[id] = value;
  } else if (scr) {
    scr.params[id] = value;
  }

  if (id === 'BusinessAction') {
    calls.push({
      businessAction: value,
      component: comp,
      screen: scr,
    });
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
  };
  stack.push(elem);

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

const jsonOut = path.join(outDir, 'webui-business-action-calls.json');
fs.writeFileSync(jsonOut, JSON.stringify({ xmlPath: path.relative(process.cwd(), xmlPath), count: records.length, records }, null, 2));

function sortKeyScreen(k) {
  const [id] = k.split('||');
  return id.toLowerCase();
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

const md = [];
md.push('## Web UI \u2192 Business Action call map');
md.push('');
md.push(`Source: \`${mdEscapeInline(path.relative(process.cwd(), xmlPath))}\``);
md.push('');
md.push(`- **Total BusinessAction call-sites found**: ${records.length}`);
md.push(`- **Unique BusinessActions**: ${byAction.size}`);
md.push(`- **Screens containing BusinessActions**: ${byScreen.size}`);
md.push('');
md.push('### Calls grouped by screen');
md.push('');

const screenKeys = [...byScreen.keys()].sort((a, b) => sortKeyScreen(a).localeCompare(sortKeyScreen(b)));
for (const sk of screenKeys) {
  const [screenId, screenType] = sk.split('||');
  const list = byScreen.get(sk) ?? [];
  const screenTitle = `${screenId}${screenType ? ` (${screenType})` : ''}`;
  md.push(`#### \`${mdEscapeInline(screenTitle)}\``);
  md.push('');

  const uniqCalls = uniqBy(list, (r) => `${r.businessAction}||${r.componentType}||${r.componentId}||${r.label}`);
  uniqCalls.sort((a, b) => a.businessAction.localeCompare(b.businessAction));

  for (const r of uniqCalls) {
    const impl = r.implementationFiles.length ? ` — ${r.implementationFiles.map((p) => `\`${mdEscapeInline(p)}\``).join(', ')}` : '';
    const label = r.label ? ` — ${mdEscapeInline(r.label)}` : '';
    const comp = r.componentType ? ` (${mdEscapeInline(r.componentType)})` : '';
    md.push(`- **\`${mdEscapeInline(r.businessAction)}\`**${comp}${label}${impl}`);
  }
  md.push('');
}

md.push('### Calls grouped by BusinessAction');
md.push('');

const actionKeys = [...byAction.keys()].sort((a, b) => a.localeCompare(b));
for (const ak of actionKeys) {
  const list = byAction.get(ak) ?? [];
  const impl = (ruleFiles.get(ak) ?? []).map((p) => path.relative(sourceRoot, p)).sort();
  md.push(`#### \`${mdEscapeInline(ak)}\``);
  md.push('');
  md.push(`- **Implementation file(s)**: ${impl.length ? impl.map((p) => `\`${mdEscapeInline(p)}\``).join(', ') : '— (no matching .js/.mjs file found in repo)'}`);
  md.push('');

  const uniqPlaces = uniqBy(list, (r) => `${r.screenId}||${r.screenType}||${r.componentType}||${r.componentId}||${r.label}`);
  uniqPlaces.sort((a, b) => (a.screenId || '').localeCompare(b.screenId || ''));

  for (const r of uniqPlaces) {
    const screen = `${r.screenId || '(no-screen)'}${r.screenType ? ` (${r.screenType})` : ''}`;
    const label = r.label ? ` — ${mdEscapeInline(r.label)}` : '';
    const comp = r.componentType ? ` (${mdEscapeInline(r.componentType)})` : '';
    md.push(`- **Screen**: \`${mdEscapeInline(screen)}\`${comp}${label}`);
  }
  md.push('');
}

const mdOut = path.join(outDir, 'webui-business-action-calls.md');
fs.writeFileSync(mdOut, md.join('\n'), 'utf8');

console.log(`Wrote:\n- ${path.relative(process.cwd(), mdOut)}\n- ${path.relative(process.cwd(), jsonOut)}`);
