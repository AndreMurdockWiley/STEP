## PopulateOptInAlert

- **Rule type**: Business Action
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalOptIn
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOptInAlert.js`

### Functional description

PopulateOptInAlert

### Functional logic

- If "JournalOptIn" == "y", apply the corresponding branch logic.
- If "JournalOptIn" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalOptIn.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 333
