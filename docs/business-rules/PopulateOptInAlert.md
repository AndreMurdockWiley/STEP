## PopulateOptInAlert

- **Rule type**: Business Action
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalOptIn
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOptInAlert.js`

### Functional description

PopulateOptInAlert. It primarily works with attribute(s): JournalOptIn.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalOptIn" == "y", apply the corresponding branch logic.
- If "JournalOptIn" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalOptIn.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOptInAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 333
