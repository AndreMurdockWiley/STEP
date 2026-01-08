import fs from "node:fs/promises";
import path from "node:path";

const ROOT = "/workspace";
const OUTPUT_DIR = path.join(ROOT, "BusinessRuleDocs");
const RULES_DIR = path.join(OUTPUT_DIR, "rules");

const EXCLUDED_DIR_NAMES = new Set([
  ".git",
  "BusinessRuleDocs",
  "node_modules",
  ".cursor",
  ".vscode",
]);

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function safePathSegment(s) {
  return (s || "unknown")
    .replaceAll(/[<>:"/\\|?*\u0000-\u001F]/g, "_")
    .replaceAll(/\s+/g, " ")
    .trim()
    .replaceAll(" ", "_");
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function walkForJsFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDED_DIR_NAMES.has(entry.name)) continue;
      files.push(...(await walkForJsFiles(full)));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".js")) {
      files.push(full);
    }
  }

  return files;
}

function extractJsonBlock(content, marker, startFrom = 0) {
  const markerIdx = content.indexOf(marker, startFrom);
  if (markerIdx === -1) return null;

  const jsonStart = content.indexOf("{", markerIdx);
  if (jsonStart === -1) return null;

  const endComment = content.indexOf("*/", jsonStart);
  if (endComment === -1) return null;

  const jsonText = content.slice(jsonStart, endComment).trim();
  return { jsonText, nextIndex: endComment + 2 };
}

function extractAllJsonBlocks(content, marker) {
  const blocks = [];
  let idx = 0;
  while (idx < content.length) {
    const block = extractJsonBlock(content, marker, idx);
    if (!block) break;
    blocks.push(block.jsonText);
    idx = block.nextIndex;
  }
  return blocks;
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function extractExports(content) {
  const out = [];
  const re = /exports\.(\w+)\s*=/g;
  for (let m = re.exec(content); m; m = re.exec(content)) {
    out.push(m[1]);
  }
  return [...new Set(out)];
}

function extractGetValueAttributeIds(content) {
  const ids = new Set();
  const re1 = /getValue\("([^"]+)"\)/g;
  const re2 = /getValue\('([^']+)'\)/g;
  for (let m = re1.exec(content); m; m = re1.exec(content)) ids.add(m[1]);
  for (let m = re2.exec(content); m; m = re2.exec(content)) ids.add(m[1]);
  return [...ids].sort((a, b) => a.localeCompare(b));
}

function extractObjectKeys(content) {
  const keys = new Set();
  const re1 = /getObjectByKey\("([^"]+)"\s*,/g;
  const re2 = /getObjectByKey\('([^']+)'\s*,/g;
  for (let m = re1.exec(content); m; m = re1.exec(content)) keys.add(m[1]);
  for (let m = re2.exec(content); m; m = re2.exec(content)) keys.add(m[1]);
  return [...keys].sort((a, b) => a.localeCompare(b));
}

function extractLovIdsUsed(content) {
  const ids = new Set();
  const re = /getListOfValuesValueByID\(\s*["']([^"']+)["']\s*\)/g;
  for (let m = re.exec(content); m; m = re.exec(content)) ids.add(m[1]);
  return [...ids].sort((a, b) => a.localeCompare(b));
}

function guessHierarchy(content) {
  // Heuristic: capture simple "var x = y.getParent();" assignments
  const edges = [];
  const re = /(var|let|const)\s+(\w+)\s*=\s*(\w+)\.getParent\(\s*\)\s*;/g;
  for (let m = re.exec(content); m; m = re.exec(content)) {
    edges.push({ child: m[3], parentVar: m[2] });
  }

  // If there's a NODE or node variable in the chain, try to build a readable chain.
  const starts = ["NODE", "node", "Node", "currentNode"];
  for (const start of starts) {
    const chain = [start];
    let cur = start;
    const visited = new Set([cur]);
    while (true) {
      const edge = edges.find((e) => e.child === cur);
      if (!edge) break;
      cur = edge.parentVar;
      if (visited.has(cur)) break;
      visited.add(cur);
      chain.push(cur);
      if (chain.length > 10) break;
    }
    if (chain.length >= 2) return chain;
  }

  return [];
}

function extractBindInputsFromPlugins(plugins) {
  const inputs = [];
  for (const plugin of plugins) {
    const binds = Array.isArray(plugin?.binds) ? plugin.binds : [];
    for (const bind of binds) {
      const alias = bind?.alias ?? "";
      const contract = bind?.contract ?? "";
      const value = bind?.value ?? null;

      // Pull "Attribute" from the STIBO XML wrapper, when present.
      let attributeId = null;
      if (typeof value === "string" && value.includes("<AttributeValidatedContextParameter>")) {
        const m = value.match(/<Parameter ID="Attribute"[^>]*>([^<]+)<\/Parameter>/);
        if (m) attributeId = m[1];
      }

      inputs.push({
        pluginType: plugin?.pluginType ?? "",
        alias,
        contract,
        attributeId,
        value: typeof value === "string" ? null : value, // keep output readable
      });
    }
  }
  return inputs;
}

function mdList(items) {
  if (!items?.length) return "_None detected_";
  return items.map((x) => `- \`${x}\``).join("\n");
}

function mdValue(v) {
  if (v === null || v === undefined || v === "") return "_Not specified_";
  if (Array.isArray(v)) return v.length ? v.map((x) => `\`${String(x)}\``).join(", ") : "_Not specified_";
  if (typeof v === "boolean") return v ? "`true`" : "`false`";
  return `\`${String(v)}\``;
}

function buildDoc({
  relSourcePath,
  sourceBaseName,
  ruleDef,
  plugins,
  exportsList,
  attributeIds,
  objectKeys,
  lovIdsUsed,
  hierarchyGuess,
}) {
  const ruleName = ruleDef?.name || sourceBaseName;
  const ruleId = ruleDef?.id || sourceBaseName.replace(/\.js$/i, "");
  const ruleType = ruleDef?.type || "Unknown";
  const setupGroups = ruleDef?.setupGroups || [];
  const pluginSummary = plugins
    .map((p) => `${p.pluginType || "Unknown"} (${p.pluginId || "Unknown"})`)
    .filter(Boolean);

  const inputs = extractBindInputsFromPlugins(plugins);
  const inputLines =
    inputs.length === 0
      ? "_None detected_"
      : inputs
          .map((i) => {
            const core = `- **${i.pluginType || "Plugin"}**: \`${i.alias}\` (${i.contract || "Unknown contract"})`;
            return i.attributeId ? `${core} → Attribute: \`${i.attributeId}\`` : core;
          })
          .join("\n");

  const deps = Array.isArray(ruleDef?.dependencies) ? ruleDef.dependencies : [];
  const depLines =
    deps.length === 0
      ? "_None specified_"
      : deps
          .map((d) => `- \`${d.libraryAlias || "alias"}\`: \`${d.libraryId || "library"}\``)
          .join("\n");

  const hierarchyBlock =
    hierarchyGuess.length > 1
      ? "```\n" + hierarchyGuess.join(" -> ") + "\n```\n"
      : "_Not inferred from code (no simple `getParent()` chain detected)._";

  // Identify preconditions/operations by exports + pluginTypes (heuristic).
  const preconditions = exportsList.filter((x) => x.toLowerCase().includes("precondition"));
  const operations = exportsList.filter((x) => x.toLowerCase().includes("operation"));

  return [
    `# Functional Description: ${ruleName}`,
    ``,
    `## Overview`,
    `This document describes the STIBO STEP business rule implemented in \`${relSourcePath}\`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.`,
    ``,
    `## Business Intent and Rationale`,
    `### Primary Business Problem`,
    `This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.`,
    ``,
    `### Business Objectives`,
    `- **Operational efficiency**: reduce repeated manual actions by automating common steps`,
    `- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible`,
    `- **Consistency**: apply the same rules the same way in every execution context`,
    `- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values`,
    ``,
    `## Context`,
    `- **Rule ID**: ${mdValue(ruleId)}`,
    `- **Rule type**: ${mdValue(ruleType)}`,
    `- **Setup group(s)**: ${setupGroups.length ? setupGroups.map((g) => `\`${g}\``).join(", ") : "_Not specified_"}`,
    `- **Scope**: ${mdValue(ruleDef?.scope)}`,
    `- **Valid object types**: ${mdValue(ruleDef?.validObjectTypes)}`,
    `- **All object types valid**: ${mdValue(ruleDef?.allObjectTypesValid)}`,
    `- **Run privileged**: ${mdValue(ruleDef?.runPrivileged)}`,
    `- **On approve**: ${mdValue(ruleDef?.onApprove)}`,
    ``,
    `## Object Hierarchy`,
    hierarchyBlock,
    ``,
    `## Components`,
    `### Plugin Definitions`,
    pluginSummary.length ? pluginSummary.map((x) => `- ${x}`).join("\n") : "_None detected_",
    ``,
    `### Preconditions`,
    preconditions.length ? mdList(preconditions) : "_None detected_",
    ``,
    `### Operations`,
    operations.length ? mdList(operations) : "_None detected_",
    ``,
    `## Inputs`,
    `### Bound Inputs (Binds)`,
    inputLines,
    ``,
    `### Attributes Referenced (getValue)`,
    mdList(attributeIds),
    ``,
    `### Keys Referenced (getObjectByKey)`,
    mdList(objectKeys),
    ``,
    `### LOV IDs Referenced (getListOfValuesValueByID)`,
    mdList(lovIdsUsed),
    ``,
    `## Outputs and Side Effects (Heuristic)`,
    `- **Creates/updates objects**: look for calls like \`createProduct\`, \`setSimpleValue\`, \`startWorkflowByID\`, \`delete().approve()\` in the implementation.`,
    `- **User feedback**: if present, the rule may call \`UI.showAlert(...)\` / \`ui.showAlert(...)\` or navigate screens.`,
    ``,
    `## Key Dependencies`,
    depLines,
    ``,
    `## Source Implementation`,
    `- **Source file**: \`${relSourcePath}\``,
    `- **Exports detected**: ${exportsList.length ? exportsList.map((e) => `\`${e}\``).join(", ") : "_None detected_"}`,
    ``,
    `## Notes and Considerations`,
    `- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.`,
    `- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.`,
    ``,
  ].join("\n");
}

async function main() {
  await ensureDir(RULES_DIR);

  const jsFiles = await walkForJsFiles(ROOT);
  jsFiles.sort((a, b) => a.localeCompare(b));

  const indexRows = [];
  let generated = 0;
  let skipped = 0;

  for (const absPath of jsFiles) {
    const relSourcePath = toPosix(path.relative(ROOT, absPath));
    const sourceBaseName = path.basename(absPath);

    const content = await fs.readFile(absPath, "utf8");

    const ruleDefBlock = extractJsonBlock(content, "/*===== business rule definition =====");
    const ruleDef = ruleDefBlock ? safeJsonParse(ruleDefBlock.jsonText) : null;

    const pluginBlocks = extractAllJsonBlocks(content, "/*===== business rule plugin definition =====");
    const plugins = pluginBlocks.map(safeJsonParse).filter(Boolean);

    const exportsList = extractExports(content);
    const attributeIds = extractGetValueAttributeIds(content);
    const objectKeys = extractObjectKeys(content);
    const lovIdsUsed = extractLovIdsUsed(content);
    const hierarchyGuess = guessHierarchy(content);

    const topDir = relSourcePath.split("/")[0] || "root";
    const outDir = path.join(RULES_DIR, safePathSegment(topDir));
    await ensureDir(outDir);

    const docBaseName = safePathSegment((ruleDef?.id || sourceBaseName.replace(/\.js$/i, "")) + ".md");
    const outPath = path.join(outDir, docBaseName);
    const relDocPathFromOutputDir = toPosix(path.relative(OUTPUT_DIR, outPath));

    const doc = buildDoc({
      relSourcePath,
      sourceBaseName,
      ruleDef,
      plugins,
      exportsList,
      attributeIds,
      objectKeys,
      lovIdsUsed,
      hierarchyGuess,
    });

    await fs.writeFile(outPath, doc, "utf8");
    generated += 1;

    const rowRuleId = ruleDef?.id || sourceBaseName.replace(/\.js$/i, "");
    const rowName = ruleDef?.name || sourceBaseName;
    const rowType = ruleDef?.type || "Unknown";
    indexRows.push({
      id: rowRuleId,
      name: rowName,
      type: rowType,
      setup: Array.isArray(ruleDef?.setupGroups) ? ruleDef.setupGroups.join(", ") : "",
      source: relSourcePath,
      doc: relDocPathFromOutputDir,
    });
  }

  const readmeLines = [];
  readmeLines.push("# Business Rule Documentation");
  readmeLines.push("");
  readmeLines.push("This folder contains **auto-generated** functional descriptions for every business rule script in this repository.");
  readmeLines.push("");
  readmeLines.push("## Index");
  readmeLines.push("");
  readmeLines.push("| Rule ID | Name | Type | Setup group(s) | Source | Doc |");
  readmeLines.push("|---|---|---|---|---|---|");
  for (const r of indexRows) {
    const sourceLink = `\`${r.source}\``;
    const docLink = `[link](${r.doc.replaceAll(" ", "%20")})`;
    readmeLines.push(
      `| \`${String(r.id).replaceAll("|", "\\|")}\` | ${String(r.name).replaceAll("|", "\\|")} | \`${String(r.type).replaceAll("|", "\\|")}\` | ${String(r.setup).replaceAll("|", "\\|")} | ${sourceLink} | ${docLink} |`,
    );
  }
  readmeLines.push("");
  readmeLines.push("## Regeneration");
  readmeLines.push("");
  readmeLines.push("Run:");
  readmeLines.push("");
  readmeLines.push("```bash");
  readmeLines.push("node scripts/generate-business-rule-docs.mjs");
  readmeLines.push("```");
  readmeLines.push("");

  await fs.writeFile(path.join(OUTPUT_DIR, "README.md"), readmeLines.join("\n"), "utf8");

  const meta = [
    `generatedAt: ${new Date().toISOString()}`,
    `sourceRoot: ${ROOT}`,
    `outputDir: ${toPosix(path.relative(ROOT, OUTPUT_DIR))}`,
    `rulesGenerated: ${generated}`,
    `rulesSkipped: ${skipped}`,
  ].join("\n");
  await fs.writeFile(path.join(OUTPUT_DIR, "_generated.txt"), meta + "\n", "utf8");

  // eslint-disable-next-line no-console
  console.log(`Generated ${generated} documents into ${OUTPUT_DIR}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});

