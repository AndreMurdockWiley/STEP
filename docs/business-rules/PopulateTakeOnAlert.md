## PopulateTakeOnAlert

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalTakeOn
- **Source file(s)**: `JournalWorkflowGroup/PopulateTakeOnAlert.js`

### Functional description

PopulateTakeOnAlert

### Functional logic

- If "JournalTakeOn" == "y", apply the corresponding branch logic.
- If "JournalTakeOn" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalTakeOn.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 349
