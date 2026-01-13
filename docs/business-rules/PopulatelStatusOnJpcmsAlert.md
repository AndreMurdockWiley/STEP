## PopulatelStatusOnJpcmsAlert

- **Rule type**: Business Action
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalStatusOnJpcms
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulatelStatusOnJpcmsAlert.js`

### Functional description

PopulatelStatusOnJpcmsAlert

### Functional logic

- If "JournalStatusOnJpcms" == "y", apply the corresponding branch logic.
- If "JournalStatusOnJpcms" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalStatusOnJpcms.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 334
