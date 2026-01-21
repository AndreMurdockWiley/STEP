import fs from 'node:fs';
import path from 'node:path';
import ExcelJS from 'exceljs';

function normalizeCell(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  return s.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

function ensureSentence(s) {
  const t = normalizeCell(s);
  if (!t) return '';
  if (/[.!?]$/.test(t)) return t;
  return `${t}.`;
}

function normalizeNameLike(str) {
  const s = normalizeCell(str).toLowerCase();
  if (!s) return '';
  return s
    .replace(/[_\-]+/g, ' ')
    .replace(/\b(ba|bc|br|acn)\b\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeRuleIdLike(ruleId) {
  const withoutPrefix = ruleId.replace(/^(BA|BC|BR|ACN)[_-]/i, '');
  const spaced = withoutPrefix.replace(/_/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return normalizeNameLike(spaced);
}

function titleFromRuleId(ruleId) {
  return ruleId.replace(/_/g, ' ').trim();
}

function looksLikeJustAName(desc, ruleId) {
  const d = normalizeCell(desc);
  if (!d) return true;
  const dl = normalizeNameLike(d);
  const rid = normalizeRuleIdLike(ruleId);
  if (dl === normalizeNameLike(ruleId)) return true;
  if (dl === normalizeNameLike(titleFromRuleId(ruleId))) return true;
  if (rid && dl === rid) return true;
  if (d.length < 18) return true;
  return false;
}

function extractStepExportJson(jsText) {
  const blocks = {};
  const re = /\/\*=====\s*([^=]+?)\s*=====\s*\n([\s\S]*?)\n\*\//g;
  let m;
  while ((m = re.exec(jsText))) {
    const title = m[1].trim().toLowerCase();
    const payload = m[2].trim();
    if (!payload.startsWith('{') && !payload.startsWith('[')) continue;
    try {
      blocks[title] = JSON.parse(payload);
    } catch {
      // ignore
    }
  }
  return {
    ruleDefinition: blocks['business rule definition'] ?? null,
    pluginDefinition: blocks['business rule plugin definition'] ?? null,
  };
}

function extractErrorMessagesFromJs(jsText) {
  const errors = new Set();
  const stringLiterals = [];
  const re = /(['"])(?:(?=(\\?))\2.)*?\1/g;
  let match;
  while ((match = re.exec(jsText))) {
    const lit = match[0];
    const content = lit.slice(1, -1).replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t');
    stringLiterals.push(content);
  }
  for (const s of stringLiterals) {
    if (/(^error\b|please\b|must\b|cannot\b|can\'t\b|already exists\b|failed\b|invalid\b)/i.test(s)) {
      if (s.length >= 6 && s.length <= 300) errors.add(s.trim());
    }
  }
  return [...errors];
}

function extractStepUsageFromJs(jsText) {
  const usage = [];
  const wfIds = [...jsText.matchAll(/getWorkflowInstanceByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const taskIds = [...jsText.matchAll(/getTaskByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const eventIds = [...jsText.matchAll(/triggerByID\(\s*["']([^"']+)["']\s*,/g)].map((m) => m[1]);
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

function synthesizeFunctionalDescription({ ruleId, jsText, workbookDescription }) {
  if (!looksLikeJustAName(workbookDescription, ruleId)) return normalizeCell(workbookDescription);
  if (!jsText) return normalizeCell(workbookDescription) || `Implements ${ruleId}.`;

  const { ruleDefinition, pluginDefinition } = extractStepExportJson(jsText);
  if (ruleDefinition?.description) return normalizeCell(ruleDefinition.description);

  // Very common pattern: workflow approve/transition helpers.
  const wfIds = [...jsText.matchAll(/getWorkflowInstanceByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const taskIds = [...jsText.matchAll(/getTaskByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const eventIds = [...jsText.matchAll(/triggerByID\(\s*["']([^"']+)["']\s*,/g)].map((m) => m[1]);
  const eqChecks = [...jsText.matchAll(/getValue\(\s*["']([^"']+)["']\s*\)\.getSimpleValue\(\)\s*==\s*["']([^"']+)["']/g)];
  if (wfIds.length && taskIds.length && eventIds.length) {
    const cond = eqChecks.length ? ` when "${eqChecks[0][1]}" == "${eqChecks[0][2]}"` : '';
    const thenNav = /navigate\(\s*["']homepage["']/.test(jsText) ? ' and navigates the user to the Web UI homepage' : '';
    return `In workflow "${wfIds[0]}" at task/state "${taskIds[0]}", triggers event "${eventIds[0]}"${cond}${thenNav}; otherwise shows an error.`;
  }

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

function synthesizeLogicBullets({ definition, jsText }) {
  const def = normalizeCell(definition);
  const looksCodey = /exports\.\w+\s*=|function\s*\(|;|\{/.test(def) || /\b(file|plugin)\s*:/i.test(def) || def.length > 450;
  if (def && !looksCodey) {
    return def
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => l.replace(/^[-*•]\s+/, ''));
  }
  if (!jsText) return def ? [def] : [];

  const bullets = [];
  const wfIds = [...jsText.matchAll(/getWorkflowInstanceByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const taskIds = [...jsText.matchAll(/getTaskByID\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const eventIds = [...jsText.matchAll(/triggerByID\(\s*["']([^"']+)["']\s*,/g)].map((m) => m[1]);
  if (wfIds.length) bullets.push(`Locate workflow instance "${wfIds[0]}".`);
  if (taskIds.length) bullets.push(`Locate task/state "${taskIds[0]}".`);

  const eqChecks = [...jsText.matchAll(/getValue\(\s*["']([^"']+)["']\s*\)\.getSimpleValue\(\)\s*==\s*["']([^"']+)["']/g)];
  for (const m of eqChecks.slice(0, 6)) bullets.push(`If "${m[1]}" == "${m[2]}", continue; otherwise error.`);
  if (eventIds.length) bullets.push(`Trigger workflow event "${eventIds[0]}".`);
  if (/navigate\(\s*["']homepage["']/.test(jsText)) bullets.push('Navigate the user to the Web UI homepage.');

  const attrs = extractAttributesFromJs(jsText);
  if (attrs.length) bullets.push(`Reads/writes attributes including: ${attrs.slice(0, 10).join(', ')}.`);
  return bullets;
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

function buildBusinessDetail({ ruleId, oneLineDesc, attrLine, usageSummary, err }) {
  const sentences = [];
  sentences.push(ensureSentence(oneLineDesc || `This rule documents the STEP business rule "${ruleId}"`));
  if (usageSummary) sentences.push(ensureSentence(`It is typically triggered from: ${usageSummary}`));
  if (attrLine) sentences.push(ensureSentence(`It primarily reads/writes: ${attrLine}`));
  if (err) sentences.push(ensureSentence(`If validation fails, users may see an error such as: "${err}"`));
  // Keep it “business-focused” even when inputs are sparse.
  if (sentences.length < 3) {
    sentences.push(
      ensureSentence(
        'Its purpose is to enforce data integrity and consistent processing so downstream integrations and workflows receive valid, predictable data'
      )
    );
  }
  return sentences.join(' ');
}

function shouldOverwrite(existing, ruleId) {
  const cur = normalizeCell(existing);
  if (!cur) return true;
  if (looksLikeJustAName(cur, ruleId)) return true;
  // Overwrite if it looks like raw code pasted in.
  if (/exports\.\w+\s*=|function\s*\(|;|\{/.test(cur) || cur.length > 600) return true;
  return false;
}

function walkJsFiles(sourceRoot) {
  const jsFiles = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'docs') continue;
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.isFile() && entry.name.endsWith('.js')) jsFiles.push(p);
    }
  }
  walk(sourceRoot);
  return jsFiles;
}

function buildJsIndex(jsFiles) {
  const byBasename = new Map();
  for (const f of jsFiles) {
    const base = path.basename(f);
    const list = byBasename.get(base) ?? [];
    list.push(f);
    byBasename.set(base, list);
  }
  return byBasename;
}

function getSheetName(wb) {
  return wb.worksheets.some((s) => s.name === 'Global Business Rules Template ')
    ? 'Global Business Rules Template '
    : wb.worksheets[0]?.name;
}

function findColumns(ws) {
  const headerRow = ws.getRow(2);
  const headers = [];
  for (let c = 1; c <= ws.columnCount; c++) headers.push(String(headerRow.getCell(c).value ?? '').trim());
  const col = (name) => headers.findIndex((h) => h === name) + 1;
  const wfConfigCols = [];
  const wfTaskCols = [];
  headers.forEach((h, i) => {
    if (h === 'Workflow / Configuration Applicable to') wfConfigCols.push(i + 1);
    if (h === 'Workflow Task(s) & Events applicable to') wfTaskCols.push(i + 1);
  });
  return {
    headers,
    col,
    wfConfigCols,
    wfTaskCols,
    idCol: col('STEP Business Rule ID'),
    typeCol: col('STEP Rule Type'),
    descCol: col('Business Rule Description'),
    detailCol: col('Business Rule Detail Description'),
    defCol: col('Business Rule Definition (logic)'),
    errCol: col('Error Message to Display in STEP for Business Conditions'),
    attrIdsCol: col('Attribute ID(s)'),
    statusCol: col('Status'),
  };
}

function buildFallbackUsageFromPath(relPath) {
  if (!relPath) return [];
  if (relPath.startsWith('Integrations/')) return [{ cfg: 'Integration rule (configured in STEP Integration Endpoints)', tasks: '—' }];
  if (relPath.startsWith('OutboundIntegrationRules/'))
    return [{ cfg: 'Outbound integration rule (configured in STEP Outbound Integration)', tasks: '—' }];
  if (relPath.startsWith('Actions/')) return [{ cfg: 'Business action (triggered via Web UI / workflow event)', tasks: '—' }];
  if (relPath.startsWith('Conditions/')) return [{ cfg: 'Business condition (validation configured in STEP)', tasks: '—' }];
  return [];
}

async function updateWorksheet(ws, byBasename, sourceRoot) {
  if (!ws) return { updated: 0, skipped: 0, reason: 'sheet missing' };

  const cols = findColumns(ws);
  if (!cols.idCol) return { updated: 0, skipped: 0, reason: 'id col missing' };

  let updated = 0;
  let skipped = 0;

  for (let r = 3; r <= ws.rowCount; r++) {
    const row = ws.getRow(r);
    const ruleId = normalizeCell(row.getCell(cols.idCol).value);
    if (!ruleId || ruleId.toUpperCase() === 'TBC') continue;

    const jsBasename = `${ruleId}.js`;
    const matches = byBasename.get(jsBasename) ?? [];
    const relPaths = matches.map((p) => path.relative(sourceRoot, p));
    const relPath0 = relPaths[0] ?? '';

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

    const existingDesc = cols.descCol ? row.getCell(cols.descCol).value : '';
    const existingDetail = cols.detailCol ? row.getCell(cols.detailCol).value : '';
    const existingDef = cols.defCol ? row.getCell(cols.defCol).value : '';
    const existingErr = cols.errCol ? row.getCell(cols.errCol).value : '';

    const workbookDescSeed = normalizeCell(existingDesc) || normalizeCell(existingDetail);
    const oneLineDesc = synthesizeFunctionalDescription({ ruleId, jsText, workbookDescription: workbookDescSeed });

    // Attributes: workbook attribute IDs if present, else inferred from js
    const workbookAttrIds = cols.attrIdsCol ? normalizeCell(row.getCell(cols.attrIdsCol).value) : '';
    const attrLine = workbookAttrIds || (inferredAttrs.length ? inferredAttrs.join(', ') : '');

    // Usage: inferred first, else fallback by folder
    const usage = inferredUsage.length ? inferredUsage : buildFallbackUsageFromPath(relPath0);
    const usageSummary = summarizeUsageForParagraph(usage);

    const err = normalizeCell(existingErr) || (extractedErrors.length ? extractedErrors[0] : '');

    // Logic definition: bullets -> newline list
    const logicBullets = synthesizeLogicBullets({ definition: normalizeCell(existingDef), jsText });
    const logicText = logicBullets.length ? logicBullets.map((b) => `- ${b}`).join('\n') : '';

    // Decide overwrite behavior per field.
    let touched = false;
    if (cols.descCol && shouldOverwrite(existingDesc, ruleId)) {
      row.getCell(cols.descCol).value = ensureSentence(oneLineDesc).replace(/\s+/g, ' ').trim();
      touched = true;
    }
    if (cols.detailCol && shouldOverwrite(existingDetail, ruleId)) {
      row.getCell(cols.detailCol).value = buildBusinessDetail({ ruleId, oneLineDesc, attrLine, usageSummary, err }).replace(/\s+/g, ' ').trim();
      touched = true;
    }
    if (cols.defCol && shouldOverwrite(existingDef, ruleId) && logicText) {
      // Keep as multi-line for readability in Excel.
      row.getCell(cols.defCol).value = logicText;
      touched = true;
    }

    // Error message column: only for conditions, but keep a useful note if empty and rule is clearly an action.
    const ruleType = cols.typeCol ? normalizeCell(row.getCell(cols.typeCol).value) : '';
    const isCondition = /condition/i.test(ruleType);
    if (cols.errCol && shouldOverwrite(existingErr, ruleId)) {
      if (isCondition) {
        if (err) row.getCell(cols.errCol).value = err;
      } else {
        row.getCell(cols.errCol).value = 'N/A (Business Action).';
      }
      touched = true;
    }

    // Usage columns (first pair only): overwrite only if both cells blank.
    if (usage.length && cols.wfConfigCols.length && cols.wfTaskCols.length) {
      const c1 = cols.wfConfigCols[0];
      const t1 = cols.wfTaskCols[0];
      const curCfg = normalizeCell(row.getCell(c1).value);
      const curTasks = normalizeCell(row.getCell(t1).value);
      if (!curCfg && !curTasks) {
        row.getCell(c1).value = usage[0].cfg;
        row.getCell(t1).value = usage[0].tasks;
        touched = true;
      }
    }

    if (touched) updated++;
    else skipped++;
  }

  return { updated, skipped };
}

const workbookPath = process.argv[2] ?? 'Stibo STEP Global Business Rules v1.3.xlsx';
const sourceRoot = process.argv[3] ?? process.cwd();

if (!fs.existsSync(workbookPath)) {
  console.error(`Workbook not found: ${workbookPath}`);
  process.exit(1);
}

const jsFiles = walkJsFiles(sourceRoot);
const byBasename = buildJsIndex(jsFiles);

const wb = new ExcelJS.Workbook();
await wb.xlsx.readFile(workbookPath);

const templateName = 'Global Business Rules Template ';
const template = wb.getWorksheet(templateName);
const manual = wb.getWorksheet('Manual');
const fallback = wb.getWorksheet(getSheetName(wb));

const res1 = await updateWorksheet(template ?? fallback, byBasename, sourceRoot);
const res2 = manual ? await updateWorksheet(manual, byBasename, sourceRoot) : { updated: 0, skipped: 0, reason: 'manual sheet missing' };

await wb.xlsx.writeFile(workbookPath);

console.log(
  JSON.stringify(
    {
      workbookPath,
      updated: {
        [template?.name ?? fallback?.name ?? 'Unknown']: res1,
        Manual: res2,
      },
    },
    null,
    2
  )
);

