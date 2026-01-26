import fs from 'node:fs';
import path from 'node:path';
import ExcelJS from 'exceljs';

const workbookPath = process.argv[2] ?? 'Stibo STEP Global Business Rules v1.3.xlsx';
const abs = path.resolve(process.cwd(), workbookPath);

if (!fs.existsSync(abs)) {
  console.error(`Workbook not found: ${abs}`);
  process.exit(1);
}

const wb = new ExcelJS.Workbook();
await wb.xlsx.readFile(abs);

console.log(`Workbook: ${workbookPath}`);
console.log(`Sheets (${wb.worksheets.length}): ${wb.worksheets.map((w) => w.name).join(', ')}`);

for (const ws of wb.worksheets.slice(0, 5)) {
  const maxCols = ws.columnCount;
  const rowToArray = (rowNum) => {
    const row = ws.getRow(rowNum);
    const arr = [];
    for (let c = 1; c <= maxCols; c++) arr.push(row.getCell(c).value ?? null);
    return arr;
  };
  console.log(`\n== ${ws.name} ==`);
  console.log(`rows: ${ws.rowCount}`);
  console.log('header:', rowToArray(1));
  console.log('row1  :', rowToArray(2));
  console.log('row2  :', rowToArray(3));
}
