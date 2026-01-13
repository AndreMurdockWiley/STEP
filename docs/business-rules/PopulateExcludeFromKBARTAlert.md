## PopulateExcludeFromKBARTAlert

- **Rule type**: Business Action
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalHistoryProducts
- **Attribute ID(s)**: JournalHistoryExcludefromKbart
- **Source file(s)**: `JournalHistoryGroup/PopulateExcludeFromKBARTAlert.js`

### Functional description

Populate Exclude From KBART Alert

### Functional logic

- If "JournalHistoryExcludefromKbart" == "y", apply the corresponding branch logic.
- If "JournalHistoryExcludefromKbart" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalHistoryExcludefromKbart.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 326
