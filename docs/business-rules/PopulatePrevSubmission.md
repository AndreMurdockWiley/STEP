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

When this business action runs, it snapshots the current **Journal Editorial Submission System** value into **Prev Submission Sys PIM** on the same Journal record. This provides a stored "previous" submission system value for reference or downstream processing. The action performs no validation or conditional checks and will overwrite any existing Prev Submission Sys PIM value with whatever is currently in Journal Editorial Submission System (including blank).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads **JournalEditorialSubmissionSystem** into a local variable.
- Reads **PrevSubmissionSys_PIM** (value is not used further).
- Writes **PrevSubmissionSys_PIM** to the current **JournalEditorialSubmissionSystem** value, overwriting any prior value.

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
