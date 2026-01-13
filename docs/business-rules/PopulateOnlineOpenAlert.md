## PopulateOnlineOpenAlert

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalOnlineOpen
- **Attribute name(s)**: Journal Online Open
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOnlineOpenAlert.js`

### Functional description

PopulateOnlineOpenAlert

### Functional logic

- If "JournalOnlineOpen" == "y", apply the corresponding branch logic.
- If "JournalOnlineOpen" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalOnlineOpen.

### Errors

- **Configured error**: WARNING: Online Open should be either 'Y' or 'N' or 'Blank'

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 192
