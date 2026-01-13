## PopulateTakeOnAlert

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalTakeOn
- **Source file(s)**: `JournalWorkflowGroup/PopulateTakeOnAlert.js`

### Functional description

PopulateTakeOnAlert. It primarily works with attribute(s): JournalTakeOn.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalTakeOn" == "y", apply the corresponding branch logic.
- If "JournalTakeOn" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalTakeOn.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/PopulateTakeOnAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 349
