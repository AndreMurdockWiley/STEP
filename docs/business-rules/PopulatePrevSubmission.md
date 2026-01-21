## PopulatePrevSubmission

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalEditorialSubmissionSystem, PrevSubmissionSys_PIM
- **Attribute name(s)**: Journal Editorial Submission System, Prev Submission Sys PIM
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulatePrevSubmission.js`

### Functional description

Populate Prev Submission System. It primarily works with attribute(s): JournalEditorialSubmissionSystem, PrevSubmissionSys_PIM. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalEditorialSubmissionSystem, PrevSubmissionSys_PIM.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulatePrevSubmission.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 82
