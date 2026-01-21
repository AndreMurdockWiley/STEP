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

PopulateFreeJournalAlert. It primarily works with attribute(s): JournalFreeJournal. If validation fails, the user sees an error message such as: "WARNING: Free Journal should be either 'Y' or 'N' or 'Blank'".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalFreeJournal.

### Errors

- **Configured error**: WARNING: Free Journal should be either 'Y' or 'N' or 'Blank'

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/PopulateFreeJournalAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 187
