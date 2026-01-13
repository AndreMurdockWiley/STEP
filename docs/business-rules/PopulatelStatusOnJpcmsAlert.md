## PopulatelStatusOnJpcmsAlert

- **Rule type**: Business Action
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalStatusOnJpcms
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulatelStatusOnJpcmsAlert.js`

### Functional description

PopulatelStatusOnJpcmsAlert. It primarily works with attribute(s): JournalStatusOnJpcms.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalStatusOnJpcms" == "y", apply the corresponding branch logic.
- If "JournalStatusOnJpcms" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalStatusOnJpcms.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulatelStatusOnJpcmsAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 334
