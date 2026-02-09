## PopulateOptInAlert

- **Rule type**: Business Action
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalOptIn
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOptInAlert.js`

### Functional description

Normalizes and validates the JournalOptIn attribute for journal media objects. When a value is supplied, it standardizes the value to uppercase "Y" or "N"; if a non-blank value is anything else, the rule warns the user. Blank is allowed and does not trigger a warning.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads JournalOptIn on the current JournalPrintMedia or JournalDigitalMedia node.
- If the value is "y" or "Y", sets JournalOptIn to "Y".
- If the value is "n" or "N", sets JournalOptIn to "N".
- If the value is non-blank and not Y/N, shows a warning alert: "Opt-In should be either 'Y' or 'N' or 'Blank'".

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOptInAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 333
