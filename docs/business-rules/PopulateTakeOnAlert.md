## PopulateTakeOnAlert

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalTakeOn
- **Source file(s)**: `JournalWorkflowGroup/PopulateTakeOnAlert.js`

### Functional description

Normalizes the JournalTakeOn value on a Journal record by enforcing uppercase Y/N entries. If a value is provided that is not Y or N, the rule warns the user while leaving the value unchanged; blank values are allowed without warning.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads JournalTakeOn from the current Journal.
- If the value is Y/y, overwrites it with uppercase "Y".
- If the value is N/n, overwrites it with uppercase "N".
- If the value is present but not Y or N, shows a warning alert that the value must be Y, N, or blank.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/PopulateTakeOnAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 349
