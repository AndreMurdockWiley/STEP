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

PopulateOnlineOpenAlert. It primarily works with attribute(s): JournalOnlineOpen. If validation fails, the user sees an error message such as: "WARNING: Online Open should be either 'Y' or 'N' or 'Blank'".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalOnlineOpen.

### Errors

- **Configured error**: WARNING: Online Open should be either 'Y' or 'N' or 'Blank'

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOnlineOpenAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 192
