import ExcelJS from 'exceljs';

const workbookPath = process.argv[2] ?? 'Stibo STEP Global Business Rules v1.3.xlsx';
const ruleId = 'JournalHistoryAutoCreation';

const updates = {
  'Business Rule Description':
    'Automatically creates or updates a Journal History record and reference for a Journal (Print/Digital), keeping key identifiers and access type in sync.',
  'Business Rule Detail Description': [
    'This rule ensures each journal has an associated Journal History product (JournalHistoryProducts) connected via the reference type "Journal_History_Reference".',
    'If a history object already exists, the rule updates the existing record (access type and ISSN depending on subscription subtype and media code).',
    'If no history object exists, the rule creates a new Journal History product under "JournalHistory_InitialImport", populates core metadata from the parent journal, executes auto-classification, and approves both the history object and the parent journal.',
  ].join(' '),
  'Business Rule Definition (logic)': [
    'IF a "Journal_History_Reference" already exists on the parent journal THEN:',
    '- Determine Journal History access type from parent "ProductRenewalSubscriptionType":',
    '  - Calendar Year / Rolling Renewal / Controlled Circulation -> set JournalHistoryAccessType = "Paid" on all referenced history targets',
    '  - Open Access / Free / Free to read -> set JournalHistoryAccessType = "Free" on all referenced history targets',
    '- Update the first referenced history target ISSN based on current media:',
    '  - IF current "JournalMediaCode" == "Print" -> set JournalHistoryISSNPrint = current media ProductIssn',
    '  - ELSE -> set JournalHistoryISSNOnline = current media ProductIssn',
    '- Approve the updated Journal History target',
    '',
    'ELSE (no existing reference):',
    '- Create a new Journal History product (type JournalHistoryProducts) under product "JournalHistory_InitialImport"',
    '- Populate Journal History metadata from the parent journal (title/short title/DOI/URL/copyright/sort title/etc.)',
    '- Set HistoryOrigin = "Regular Workflow", JournalHistorySequenceNumber = "1", SoftDelete = "No", and set JournalGroupCode/JournalCode/WOL code from parent JournalGroupCode',
    '- Set ISSN field based on current "JournalMediaCode" (Print -> JournalHistoryISSNPrint; otherwise -> JournalHistoryISSNOnline) using current media ProductIssn',
    '- Create reference: parent journal -> new Journal History using "Journal_History_Reference"',
    '- Execute AutoClassificationJournalHistory on the new Journal History object',
    '- Approve the new Journal History object and approve the parent journal',
  ].join('\n'),
  // This is only formally required for Business Conditions; keep explicit note for reviewers.
  'Error Message to Display in STEP for Business Conditions':
    'N/A (Business Action). No user-facing error is thrown; the rule only writes informational log messages during create/update.',
};

const usage = [
  {
    cfg: 'Workflow: Journal Media workflow (completion)',
    taskEvent: 'Invoked by Business Action "JournalMediaComplete" (which references JournalHistoryAutoCreation).',
  },
  {
    cfg: 'Workflow: Journal workflow (completion)',
    taskEvent: 'Invoked by Business Action "Journals_Completed_Transition" (which references JournalHistoryAutoCreation).',
  },
];

async function updateSheet(ws) {
  if (!ws) return { updated: 0, reason: 'sheet missing' };

  const headerRow = ws.getRow(2);
  const headers = [];
  for (let c = 1; c <= ws.columnCount; c++) headers.push(String(headerRow.getCell(c).value ?? '').trim());

  const col = (name) => headers.findIndex((h) => h === name) + 1;
  const idCol = col('STEP Business Rule ID');
  if (!idCol) return { updated: 0, reason: 'id col missing' };

  const wfConfigCols = [];
  const wfTaskCols = [];
  headers.forEach((h, i) => {
    if (h === 'Workflow / Configuration Applicable to') wfConfigCols.push(i + 1);
    if (h === 'Workflow Task(s) & Events applicable to') wfTaskCols.push(i + 1);
  });

  let updated = 0;
  for (let r = 3; r <= ws.rowCount; r++) {
    const row = ws.getRow(r);
    const v = String(row.getCell(idCol).value ?? '').trim();
    if (v !== ruleId) continue;

    // Main text fields
    for (const [header, value] of Object.entries(updates)) {
      const c = col(header);
      if (!c) continue;
      row.getCell(c).value = value;
    }

    // Usage fields (up to 5)
    for (let i = 0; i < Math.min(usage.length, wfConfigCols.length, wfTaskCols.length); i++) {
      row.getCell(wfConfigCols[i]).value = usage[i].cfg;
      row.getCell(wfTaskCols[i]).value = usage[i].taskEvent;
    }

    row.commit?.();
    updated++;
  }

  return { updated };
}

const wb = new ExcelJS.Workbook();
await wb.xlsx.readFile(workbookPath);

const template = wb.getWorksheet('Global Business Rules Template ');
const manual = wb.getWorksheet('Manual');

const res1 = await updateSheet(template);
const res2 = await updateSheet(manual);

await wb.xlsx.writeFile(workbookPath);

console.log(
  JSON.stringify(
    {
      workbookPath,
      ruleId,
      updated: {
        'Global Business Rules Template ': res1,
        Manual: res2,
      },
    },
    null,
    2
  )
);
