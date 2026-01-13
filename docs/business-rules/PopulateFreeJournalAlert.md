## PopulateFreeJournalAlert

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalFreeJournal
- **Attribute name(s)**: Journal Free Journal
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/PopulateFreeJournalAlert.js`

### Functional description

PopulateFreeJournalAlert

### Functional logic

- If "JournalFreeJournal" == "y", apply the corresponding branch logic.
- If "JournalFreeJournal" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalFreeJournal.

### Errors

- **Configured error**: WARNING: Free Journal should be either 'Y' or 'N' or 'Blank'

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 187
