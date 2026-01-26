import fs from 'node:fs';
import path from 'node:path';
import ExcelJS from 'exceljs';

function normalizeCell(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  // keep user-visible newlines but normalize CRLF
  return s.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

function mdEscapeInline(s) {
  return s.replaceAll('\\', '\\\\').replaceAll('`', '\\`');
}

function ensureSentence(s) {
  const t = normalizeCell(s);
  if (!t) return '';
  if (/[.!?]$/.test(t)) return t;
  return `${t}.`;
}

function summarizeUsageForParagraph(usage) {
  if (!usage?.length) return '';
  const u = usage[0];
  const cfg = normalizeCell(u.cfg);
  const tasks = normalizeCell(u.tasks);
  if (cfg && tasks && tasks !== '—') return `${cfg} (${tasks})`;
  if (cfg) return cfg;
  return '';
}

function buildFunctionalDescriptionParagraph({ ruleId, functionalDescription, attrLine, mergedUsage, errorMessage, extractedErrors }) {
  const desc = normalizeCell(functionalDescription);
  const usageSummary = summarizeUsageForParagraph(mergedUsage);

  const sentences = [];
  if (desc) {
    sentences.push(ensureSentence(desc));
  } else {
    sentences.push(ensureSentence(`This document describes the STEP business rule "${ruleId}"`));
  }

  if (attrLine) {
    sentences.push(ensureSentence(`It primarily works with attribute(s): ${attrLine}`));
  }

  if (usageSummary) {
    sentences.push(ensureSentence(`It is triggered from: ${usageSummary}`));
  }

  const err = normalizeCell(errorMessage) || (extractedErrors?.length ? extractedErrors[0] : '');
  if (err) {
    sentences.push(ensureSentence(`If validation fails, the user sees an error message such as: "${err}"`));
  }

  // Ensure we always have a “paragraph of details” (>= 2 sentences where possible).
  if (sentences.length === 1) {
    sentences.push(ensureSentence('See the Functional Logic and Usage sections below for the specific configuration and trigger context'));
  }

  return sentences.join(' ');
}

function buildFunctionalLogicParagraph({ logicBullets, hasWorkbookDefinition, inferredFromJs }) {
  const sentences = [];
  sentences.push(
    ensureSentence(
      hasWorkbookDefinition
        ? 'This section summarizes the configured functional logic captured in the rules inventory'
        : 'This section summarizes the functional logic based on the exported STEP rule configuration and/or script inspection'
    )
  );
  if (logicBullets?.length) {
    sentences.push(
      ensureSentence(
        inferredFromJs
          ? 'The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script)'
          : 'The bullet points below are a concise, human-readable summary of the rule logic'
      )
    );
  } else {
    sentences.push(
      ensureSentence(
        'No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization'
      )
    );
  }
  return sentences.join(' ');
}

function buildUsageParagraph({ mergedUsage, relPaths }) {
  const sentences = [];
  if (mergedUsage?.length) {
    sentences.push(ensureSentence('This section documents where the rule is used or triggered in STEP'));
    sentences.push(ensureSentence('The items listed below describe the workflow/configuration location(s) where this rule runs'));
  } else if (relPaths?.length) {
    sentences.push(ensureSentence('Usage information was not provided in the inventory workbook for this rule'));
    sentences.push(ensureSentence(`A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ${relPaths.join(', ')}`));
  } else {
    sentences.push(ensureSentence('Usage information was not provided in the inventory workbook for this rule'));
    sentences.push(ensureSentence('A trigger location could not be inferred automatically; review STEP configuration to determine where it is called'));
  }
  return sentences.join(' ');
}

function toBullets(text) {
  const cleaned = normalizeCell(text);
  if (!cleaned) return [];

  // split on newlines, preserve existing bullets but normalize
  const lines = cleaned
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const bullets = [];
  for (const line of lines) {
    const m = line.match(/^[-*•]\s+(.*)$/);
    bullets.push(m ? m[1].trim() : line);
  }
  return bullets;
}

function extractErrorMessagesFromJs(jsText) {
  const errors = new Set();

  // Common STEP patterns we’ve seen:
  // - return "Error message" (for conditions)
  // - throw "Error message"
  // - UI.showAlert("...", "ERROR")
  // - logger.error("...")
  const stringLiterals = [];

  // naive string literal capture (single or double); avoids backticks for safety
  const re = /(['"])(?:(?=(\\?))\2.)*?\1/g;
  let match;
  while ((match = re.exec(jsText))) {
    const lit = match[0];
    // strip quotes, unescape basic
    const content = lit.slice(1, -1).replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t');
    stringLiterals.push(content);
  }

  for (const s of stringLiterals) {
    // heuristics: errors tend to contain these
    if (/(^error\b|please\b|must\b|cannot\b|can\'t\b|already exists\b|failed\b|invalid\b)/i.test(s)) {
      if (s.length >= 6 && s.length <= 300) errors.add(s.trim());
    }
  }

  return [...errors];
}

function safeFilename(ruleId) {
  return ruleId.replace(/[\/\\:*?"<>|]/g, '_');
}

function titleFromRuleId(ruleId) {
  return ruleId.replace(/_/g, ' ').trim();
}

function normalizeNameLike(str) {
  const s = normalizeCell(str).toLowerCase();
  if (!s) return '';
  return s
    .replace(/[_\-]+/g, ' ')
    .replace(/\b(ba|bc|br|acn)\b\s*/g, '') // common STEP rule prefixes
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeRuleIdLike(ruleId) {
  // BA_ApproveSoftDeleteButton -> "approve soft delete button"
  const withoutPrefix = ruleId.replace(/^(BA|BC|BR|ACN)[_-]/i, '');
  const spaced = withoutPrefix
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return normalizeNameLike(spaced);
}

function looksLikeJustAName(desc, ruleId) {
  const d = normalizeCell(desc);
  if (!d) return true;
  const dl = normalizeNameLike(d);
  const rid = normalizeRuleIdLike(ruleId);
  if (dl === normalizeNameLike(ruleId)) return true;
  if (dl === normalizeNameLike(titleFromRuleId(ruleId))) return true;
  if (rid && dl === rid) return true;
  // extremely short "descriptions" don’t help
  if (d.length < 18) return true;
  return false;
}

function extractStepUsageFromJs(jsText) {
  const usage = [];
  const wfIds = [...jsText.matchAll(/getWorkflowInstanceByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const taskIds = [...jsText.matchAll(/getTaskByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const eventIds = [...jsText.matchAll(/triggerByID\(\s*["']([^"']+)["']\s*,/g)].map((m) => m[1]);

  // Build a single canonical entry if we have workflow info.
  if (wfIds.length || taskIds.length || eventIds.length) {
    const wf = wfIds[0] ?? '';
    const task = taskIds[0] ?? '';
    const event = eventIds[0] ?? '';
    const cfg = wf ? `Workflow: "${wf}"` : 'Workflow: —';
    const bits = [];
    if (task) bits.push(`Workflow State/Task: "${task}"`);
    if (event) bits.push(`Workflow Event: "${event}"`);
    usage.push({ cfg, tasks: bits.join(', ') || '—' });
  }

  return usage;
}

function extractAttributesFromJs(jsText) {
  const attrs = new Set();
  for (const m of jsText.matchAll(/getValue\(\s*["']([^"']+)["']\s*\)/g)) {
    const a = m[1]?.trim();
    if (a) attrs.add(a);
  }
  return [...attrs];
}

function extractStepExportJson(jsText) {
  // STEP exports often embed JSON payloads inside comment blocks.
  // Example:
  // /*===== business rule plugin definition =====
  // { ... }
  // */
  const blocks = {};
  const re = /\/\*=====\s*([^=]+?)\s*=====\s*\n([\s\S]*?)\n\*\//g;
  let m;
  while ((m = re.exec(jsText))) {
    const title = m[1].trim().toLowerCase();
    const payload = m[2].trim();
    // Only parse JSON-like blocks; ignore others.
    if (!payload.startsWith('{') && !payload.startsWith('[')) continue;
    try {
      blocks[title] = JSON.parse(payload);
    } catch {
      // ignore parse failures; some exports may not be strict JSON
    }
  }
  return {
    ruleDefinition: blocks['business rule definition'] ?? null,
    pluginDefinition: blocks['business rule plugin definition'] ?? null,
    exportMetadata: blocks['export metadata'] ?? null,
  };
}

function synthesizeFunctionalDescription({ ruleId, jsText, workbookDescription }) {
  if (!looksLikeJustAName(workbookDescription, ruleId)) return normalizeCell(workbookDescription);
  if (!jsText) return normalizeCell(workbookDescription) || `Implements ${ruleId}.`;

  const { ruleDefinition, pluginDefinition } = extractStepExportJson(jsText);
  if (ruleDefinition?.description) return normalizeCell(ruleDefinition.description);

  const wfIds = [...jsText.matchAll(/getWorkflowInstanceByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const taskIds = [...jsText.matchAll(/getTaskByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const eventIds = [...jsText.matchAll(/triggerByID\(\s*["']([^"']+)["']\s*,/g)].map((m) => m[1]);
  const eqChecks = [...jsText.matchAll(/getValue\(\s*["']([^"']+)["']\s*\)\.getSimpleValue\(\)\s*==\s*["']([^"']+)["']/g)];

  // Special-case: workflow approve/reject buttons (very common).
  if (wfIds.length && taskIds.length && eventIds.length) {
    const cond = eqChecks.length ? ` when "${eqChecks[0][1]}" == "${eqChecks[0][2]}"` : '';
    const thenNav = /navigate\(\s*["']homepage["']/.test(jsText) ? ' and navigates the user to the Web UI homepage' : '';
    return `In workflow "${wfIds[0]}" at task/state "${taskIds[0]}", triggers event "${eventIds[0]}"${cond}${thenNav}; otherwise shows an error.`;
  }

  // Common non-JS condition style: AttributeComparatorCondition etc.
  if (pluginDefinition?.pluginId === 'AttributeComparatorCondition') {
    const params = pluginDefinition.parameters ?? [];
    const attr1 = params.find((p) => p.id === 'Attribute1')?.value;
    const constant = params.find((p) => p.id === 'Constant')?.value;
    const op = params.find((p) => p.id === 'Operator')?.value;
    if (attr1 && op && constant !== undefined) {
      return `Validates that "${attr1}" ${op} "${constant}".`;
    }
  }

  if (wfIds.length) return `Executes logic within workflow "${wfIds[0]}" context.`;
  return normalizeCell(workbookDescription) || `Implements ${ruleId}.`;
}

function synthesizeFunctionalLogic({ definition, jsText }) {
  const def = normalizeCell(definition);
  // If definition already reads like prose/logic (not raw code), use it.
  const looksCodey =
    /exports\.\w+\s*=|function\s*\(|;|\{/.test(def) ||
    /\b(file|plugin)\s*:/i.test(def) ||
    def.length > 450;

  if (def && !looksCodey) {
    return toBullets(def);
  }

  if (!jsText) return def ? toBullets(def) : [];

  const { pluginDefinition } = extractStepExportJson(jsText);

  const bullets = [];
  const wfIds = [...jsText.matchAll(/getWorkflowInstanceByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const taskIds = [...jsText.matchAll(/getTaskByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const eventIds = [...jsText.matchAll(/triggerByID\(\s*["']([^"']+)["']\s*,/g)].map((m) => m[1]);

  if (wfIds.length) bullets.push(`Locate workflow instance "${wfIds[0]}".`);
  if (taskIds.length) bullets.push(`Locate task/state "${taskIds[0]}".`);

  // Attempt to pick up simple yes/no validations.
  const eqChecks = [...jsText.matchAll(/getValue\(\s*["']([^"']+)["']\s*\)\.getSimpleValue\(\)\s*==\s*["']([^"']+)["']/g)];
  for (const m of eqChecks.slice(0, 5)) {
    bullets.push(`If "${m[1]}" == "${m[2]}", continue; otherwise error.`);
  }

  // Variable-based attribute checks:
  // var productStatus = node.getValue("ProductStatus").getSimpleValue();
  // if (productStatus == "Current publication") { ... }
  const varToAttr = new Map();
  for (const m of jsText.matchAll(/var\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*[^;]*getValue\(\s*["']([^"']+)["']\s*\)[^;]*getSimpleValue\(\)/g)) {
    varToAttr.set(m[1], m[2]);
  }
  const varComparisons = [...jsText.matchAll(/if\s*\(\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*==\s*["']([^"']+)["']/g)];
  for (const m of varComparisons.slice(0, 8)) {
    const attr = varToAttr.get(m[1]);
    if (attr) bullets.push(`If "${attr}" == "${m[2]}", apply the corresponding branch logic.`);
  }

  if (eventIds.length) bullets.push(`Trigger workflow event "${eventIds[0]}".`);
  if (/navigate\(\s*["']homepage["']/.test(jsText)) bullets.push('Navigate the user to the Web UI homepage.');

  // Key library calls (helps explain what the rule actually does without dumping code).
  const libCalls = new Set();
  for (const m of jsText.matchAll(/\b([A-Za-z_$][A-Za-z0-9_$]*Library)\.([A-Za-z_$][A-Za-z0-9_$]*)\s*\(/g)) {
    libCalls.add(`${m[1]}.${m[2]}`);
  }
  if (libCalls.size) bullets.push(`Calls: ${[...libCalls].slice(0, 6).join(', ')}.`);

  // Attributes touched (high-signal context).
  const attrs = new Set(extractAttributesFromJs(jsText));
  if (pluginDefinition?.parameters?.length) {
    for (const p of pluginDefinition.parameters) {
      if (p?.type?.includes('Attribute') && p?.value) attrs.add(p.value);
    }
  }
  const attrList = [...attrs];
  if (attrList.length) bullets.push(`Reads/writes attributes including: ${attrList.slice(0, 10).join(', ')}.`);

  // If we have a non-JS plugin definition, add a concise parameter summary.
  if (pluginDefinition?.pluginId) {
    const pid = pluginDefinition.pluginId;
    if (pid === 'AttributeComparatorCondition') {
      const params = pluginDefinition.parameters ?? [];
      const attr1 = params.find((p) => p.id === 'Attribute1')?.value;
      const constant = params.find((p) => p.id === 'Constant')?.value;
      const op = params.find((p) => p.id === 'Operator')?.value;
      if (attr1 && op && constant !== undefined) {
        bullets.unshift(`Validate: "${attr1}" ${op} "${constant}".`);
      }
    } else if (!/JavaScriptBusinessActionWithBinds|JavaScriptBusinessConditionWithBinds/.test(pid)) {
      bullets.unshift(`Plugin: ${pid}.`);
      const params = (pluginDefinition.parameters ?? [])
        .map((p) => ({ id: p?.id, value: p?.value }))
        .filter((p) => p.id && p.value !== null && p.value !== undefined && String(p.value).trim() !== '');
      for (const p of params.slice(0, 6)) {
        bullets.push(`Parameter "${p.id}": ${String(p.value)}`);
      }
    }
  }

  return bullets;
}

const workbookPath = process.argv[2] ?? 'Stibo STEP Global Business Rules v1.3.xlsx';
const sourceRoot = process.argv[3] ?? process.cwd();
const outDir = process.argv[4] ?? path.join(process.cwd(), 'docs', 'business-rules');

const absWorkbook = path.resolve(process.cwd(), workbookPath);
if (!fs.existsSync(absWorkbook)) {
  console.error(`Workbook not found: ${absWorkbook}`);
  process.exit(1);
}

const wb = new ExcelJS.Workbook();
await wb.xlsx.readFile(absWorkbook);

const sheetName = wb.worksheets.some((s) => s.name === 'Global Business Rules Template ')
  ? 'Global Business Rules Template '
  : wb.worksheets[0]?.name;

const ws = wb.getWorksheet(sheetName);
if (!ws) {
  console.error(`Worksheet not found: ${sheetName}`);
  process.exit(1);
}

const maxCols = ws.columnCount;
const rows = [];
for (let r = 1; r <= ws.rowCount; r++) {
  const row = ws.getRow(r);
  const arr = [];
  for (let c = 1; c <= maxCols; c++) arr.push(row.getCell(c).value ?? null);
  // Keep blank rows out for stability (similar to previous blankrows: false)
  if (arr.every((v) => v === null || v === undefined || String(v).trim() === '')) continue;
  rows.push(arr);
}
if (rows.length < 2) {
  console.error(`Unexpected sheet format: ${sheetName}`);
  process.exit(1);
}

const header = rows[1].map((h) => normalizeCell(h));
const dataRows = rows.slice(2);

const colIndex = new Map();
header.forEach((name, idx) => {
  if (!name) return;
  // Keep the first occurrence for single-value columns
  if (!colIndex.has(name)) colIndex.set(name, idx);
});

function idx(name) {
  const i = colIndex.get(name);
  return typeof i === 'number' ? i : -1;
}

// The workflow/config columns repeat; collect them in order by scanning header.
const workflowConfigCols = [];
const workflowTasksCols = [];
header.forEach((name, i) => {
  if (name === 'Workflow / Configuration Applicable to') workflowConfigCols.push(i);
  if (name === 'Workflow Task(s) & Events applicable to') workflowTasksCols.push(i);
});

// Build a file index of JS rules by basename (RuleId.js).
const jsFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.isFile() && entry.name.endsWith('.js')) jsFiles.push(p);
  }
}
walk(sourceRoot);

const byBasename = new Map();
for (const f of jsFiles) {
  const base = path.basename(f);
  const list = byBasename.get(base) ?? [];
  list.push(f);
  byBasename.set(base, list);
}

// Treat output as generated content.
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

// Consolidate workbook rows by STEP Business Rule ID (the workbook can contain duplicates).
const byRuleId = new Map();

for (let r = 0; r < dataRows.length; r++) {
  const row = dataRows[r];
  const ruleId = normalizeCell(row[idx('STEP Business Rule ID')]);
  if (!ruleId || ruleId.toUpperCase() === 'TBC') continue;

  const usage = [];
  for (let i = 0; i < Math.min(workflowConfigCols.length, workflowTasksCols.length); i++) {
    const cfg = normalizeCell(row[workflowConfigCols[i]]);
    const tasks = normalizeCell(row[workflowTasksCols[i]]);
    if (!cfg && !tasks) continue;
    usage.push({ cfg, tasks });
  }

  const record = {
    ruleId,
    rows: [{ r, row }],
    // Pick the "best" values later; for now keep raw candidates.
    candidates: {
      ruleType: normalizeCell(row[idx('STEP Rule Type')]),
      objectValidTo: normalizeCell(row[idx('Data Model Object Valid to')]),
      productTypes: normalizeCell(row[idx('Product Type(s) Valid to')]),
      businessArea: normalizeCell(row[idx('Business Area')]),
      mddRef: normalizeCell(row[idx('MDD Reference ID')]),
      attributeIds: normalizeCell(row[idx('Attribute ID(s)')]),
      attributeNames: normalizeCell(row[idx('Attribute Name(s)')]),
      description: normalizeCell(row[idx('Business Rule Description')]),
      detailDescription: normalizeCell(row[idx('Business Rule Detail Description')]),
      definition: normalizeCell(row[idx('Business Rule Definition (logic)')]),
      errorMessage: normalizeCell(row[idx('Error Message to Display in STEP for Business Conditions')]),
      setupGroup: normalizeCell(row[idx('Setup Group')]),
      dependencies: normalizeCell(row[idx('Dependencies')]),
      keyFunctions: normalizeCell(row[idx('Key Functions')]),
      status: normalizeCell(row[idx('Status')]),
      version: normalizeCell(row[idx('Version')]),
    },
    usage,
  };

  const existing = byRuleId.get(ruleId);
  if (!existing) {
    byRuleId.set(ruleId, record);
  } else {
    existing.rows.push({ r, row });
    existing.usage.push(...usage);
    // Merge “best” candidates: keep first non-empty, but prefer longer descriptions/definitions.
    for (const k of Object.keys(record.candidates)) {
      const v = record.candidates[k];
      if (!v) continue;
      if (!existing.candidates[k]) existing.candidates[k] = v;
      else if ((k === 'description' || k === 'detailDescription' || k === 'definition') && v.length > existing.candidates[k].length) {
        existing.candidates[k] = v;
      }
    }
  }
}

// Add any JS files not present in workbook as “inventory-only” docs.
for (const f of jsFiles) {
  const base = path.basename(f, '.js');
  if (!byRuleId.has(base)) {
    byRuleId.set(base, {
      ruleId: base,
      rows: [],
      candidates: {
        ruleType: '',
        objectValidTo: '',
        productTypes: '',
        businessArea: '',
        mddRef: '',
        attributeIds: '',
        attributeNames: '',
        description: '',
        detailDescription: '',
        definition: '',
        errorMessage: '',
        setupGroup: '',
        dependencies: '',
        keyFunctions: '',
        status: '',
        version: '',
      },
      usage: [],
    });
  }
}

const docs = [];

for (const record of byRuleId.values()) {
  const ruleId = record.ruleId;
  const {
    ruleType,
    objectValidTo,
    productTypes,
    businessArea,
    mddRef,
    attributeIds,
    attributeNames,
    description,
    detailDescription,
    definition,
    errorMessage,
    setupGroup,
    dependencies,
    keyFunctions,
    status,
    version,
  } = record.candidates;

  const jsBasename = `${ruleId}.js`;
  const matches = byBasename.get(jsBasename) ?? [];
  const relPaths = matches.map((p) => path.relative(sourceRoot, p));

  let jsText = '';
  let extractedErrors = [];
  let inferredUsage = [];
  let inferredAttrs = [];
  if (matches.length > 0) {
    try {
      jsText = fs.readFileSync(matches[0], 'utf8');
      extractedErrors = extractErrorMessagesFromJs(jsText);
      inferredUsage = extractStepUsageFromJs(jsText);
      inferredAttrs = extractAttributesFromJs(jsText);
    } catch {
      // ignore
    }
  }

  // Merge usage (workbook + inferred), de-duped.
  const usageKey = (u) => `${u.cfg}||${u.tasks}`;
  const mergedUsage = [];
  const seenUsage = new Set();
  for (const u of [...record.usage, ...inferredUsage]) {
    const k = usageKey(u);
    if (seenUsage.has(k)) continue;
    seenUsage.add(k);
    mergedUsage.push(u);
  }

  // If the workbook doesn’t specify usage and we can’t infer workflow IDs,
  // add a minimal (but still useful) “where it runs” hint based on naming/path.
  if (mergedUsage.length === 0) {
    const desc = normalizeCell(description || detailDescription);
    const files = relPaths.join(' ');
    if (/_Event$/i.test(ruleId) || /eventprocessor/i.test(desc)) {
      mergedUsage.push({ cfg: `Event Processor: "${ruleId}"`, tasks: '—' });
    } else if (/\/Integrations\//.test(files)) {
      mergedUsage.push({ cfg: 'Integration rule (configured in STEP Integration Endpoints)', tasks: '—' });
    } else if (/\/OutboundIntegrationRules\//.test(files)) {
      mergedUsage.push({ cfg: 'Outbound integration rule (configured in STEP Outbound Integration)', tasks: '—' });
    } else if (/^Actions\//.test(files) || /\/Actions\//.test(files)) {
      mergedUsage.push({ cfg: 'Business action (triggered via Web UI button / workflow event / configured action)', tasks: '—' });
    } else if (/^Conditions\//.test(files) || /\/Conditions\//.test(files)) {
      mergedUsage.push({ cfg: 'Business condition (validation configured in STEP)', tasks: '—' });
    }
  }

  // Merge attributes (workbook + inferred).
  const attrLine = attributeIds || (inferredAttrs.length ? inferredAttrs.join(', ') : '');

  const hasWorkbookDefinition = Boolean(normalizeCell(definition || detailDescription));
  const inferredFromJs = Boolean(jsText);

  const functionalDescription = synthesizeFunctionalDescription({
    ruleId,
    jsText,
    workbookDescription: description || detailDescription,
  });
  const logicBullets = synthesizeFunctionalLogic({ definition: definition || detailDescription, jsText });

  // Disambiguate filename collisions deterministically (rare, but safe).
  const baseName = safeFilename(ruleId);
  let outPath = path.join(outDir, `${baseName}.md`);
  if (fs.existsSync(outPath)) {
    const suffix = Buffer.from(ruleId, 'utf8').toString('hex').slice(0, 8);
    outPath = path.join(outDir, `${baseName}__${suffix}.md`);
  }

  const lines = [];
  lines.push(`## ${mdEscapeInline(ruleId)}`);
  lines.push('');
  lines.push(`- **Rule type**: ${mdEscapeInline(ruleType || 'Unknown')}`);
  if (setupGroup) lines.push(`- **Setup group**: ${mdEscapeInline(setupGroup)}`);
  if (businessArea) lines.push(`- **Business area**: ${mdEscapeInline(businessArea)}`);
  if (objectValidTo) lines.push(`- **Data model object valid to**: ${mdEscapeInline(objectValidTo)}`);
  if (productTypes) lines.push(`- **Product type(s) valid to**: ${mdEscapeInline(productTypes)}`);
  if (mddRef) lines.push(`- **MDD reference ID**: ${mdEscapeInline(mddRef)}`);
  if (attrLine) lines.push(`- **Attribute ID(s)**: ${mdEscapeInline(attrLine)}`);
  if (attributeNames) lines.push(`- **Attribute name(s)**: ${mdEscapeInline(attributeNames)}`);
  if (version) lines.push(`- **Version**: ${mdEscapeInline(version)}`);
  if (status) lines.push(`- **Status**: ${mdEscapeInline(status)}`);
  if (relPaths.length) lines.push(`- **Source file(s)**: ${relPaths.map((p) => `\`${mdEscapeInline(p)}\``).join(', ')}`);
  lines.push('');

  lines.push('### Functional description');
  lines.push('');
  lines.push(
    buildFunctionalDescriptionParagraph({
      ruleId,
      functionalDescription,
      attrLine,
      mergedUsage,
      errorMessage,
      extractedErrors,
    })
  );
  lines.push('');

  lines.push('### Functional logic');
  lines.push('');
  lines.push(
    buildFunctionalLogicParagraph({
      logicBullets,
      hasWorkbookDefinition,
      inferredFromJs,
    })
  );
  lines.push('');
  if (logicBullets.length) {
    for (const b of logicBullets) lines.push(`- ${b}`);
  } else {
    lines.push('- No further functional logic details were extracted.');
  }
  lines.push('');

  lines.push('### Errors');
  lines.push('');
  if (errorMessage) {
    lines.push(`- **Configured error**: ${mdEscapeInline(errorMessage)}`);
  }
  if (extractedErrors.length) {
    for (const e of extractedErrors.slice(0, 10)) {
      if (errorMessage && e.trim() === errorMessage.trim()) continue;
      lines.push(`- **In-script message**: ${mdEscapeInline(e)}`);
    }
  }
  if (!errorMessage && extractedErrors.length === 0) {
    lines.push('—');
  }
  lines.push('');

  lines.push('### Usage / trigger');
  lines.push('');
  lines.push(buildUsageParagraph({ mergedUsage, relPaths }));
  lines.push('');
  if (mergedUsage.length) {
    for (const u of mergedUsage) {
      const cfg = u.cfg ? mdEscapeInline(u.cfg) : '—';
      const tasks = u.tasks ? mdEscapeInline(u.tasks) : '—';
      lines.push(`- **Configuration**: ${cfg}`);
      lines.push(`  - **Task/Event**: ${tasks}`);
    }
  } else {
    lines.push('- No usage/trigger details were extracted.');
  }
  lines.push('');

  lines.push('### Dependencies / key functions');
  lines.push('');
  if (dependencies) lines.push(`- **Dependencies**: ${mdEscapeInline(dependencies)}`);
  if (keyFunctions) lines.push(`- **Key functions**: ${mdEscapeInline(keyFunctions)}`);
  if (!dependencies && !keyFunctions) lines.push('—');
  lines.push('');

  // traceability
  lines.push('### Traceability');
  lines.push('');
  if (record.rows.length) {
    lines.push(`- **Source workbook**: \`${mdEscapeInline(workbookPath)}\``);
    lines.push(`- **Sheet**: \`${mdEscapeInline(sheetName)}\``);
    lines.push(`- **Row(s) (0-based in data block)**: ${record.rows.map((x) => x.r).join(', ')}`);
  } else {
    lines.push('- **Source workbook**: — (not present in workbook)');
  }
  lines.push('');

  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');

  docs.push({
    ruleId,
    outPath: path.relative(process.cwd(), outPath),
    functionalDescription,
    usageCount: mergedUsage.length,
    sourceFiles: relPaths,
  });
}

// Write an index for quick browsing.
docs.sort((a, b) => a.ruleId.localeCompare(b.ruleId));
const indexLines = [];
indexLines.push('## Business rule documentation');
indexLines.push('');
indexLines.push(`Generated from \`${workbookPath}\`.`);
indexLines.push('');
indexLines.push('### Index');
indexLines.push('');
for (const d of docs) {
  const link = path.basename(d.outPath).replaceAll(' ', '%20');
  const desc = normalizeCell(d.functionalDescription);
  indexLines.push(`- [\`${mdEscapeInline(d.ruleId)}\`](${link})${desc ? ` — ${mdEscapeInline(desc)}` : ''}`);
}
indexLines.push('');

fs.writeFileSync(path.join(outDir, 'INDEX.md'), indexLines.join('\n'), 'utf8');

console.log(`Wrote ${docs.length} rule docs to ${outDir}`);
