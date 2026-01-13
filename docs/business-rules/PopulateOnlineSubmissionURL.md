## PopulateOnlineSubmissionURL

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalEditorialSubmissionSystem, JournalGroupCode, JournalREXSiteName, JournalSubmissionUrlValue, PrevSubmissionSys_PIM
- **Attribute name(s)**: Journal REX Site Name, Journal Editorial Submission System, Journal Submission URL Value, Previous Submission System PIM, Journal Group Code
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOnlineSubmissionURL.js`

### Functional description

Populate Online Submission URL. It primarily works with attribute(s): JournalEditorialSubmissionSystem, JournalGroupCode, JournalREXSiteName, JournalSubmissionUrlValue, PrevSubmissionSys_PIM. If validation fails, the user sees an error message such as: "Submission URL has been created using Journal Group Code because REX Site Name was Null. To update Submission URL please add a REX Site Name".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalEditorialSubmissionSystem" == "Research Exchange Submission", apply the corresponding branch logic.
- If "JournalEditorialSubmissionSystem" == "Research Exchange Submission", apply the corresponding branch logic.
- Reads/writes attributes including: JournalREXSiteName, JournalEditorialSubmissionSystem, JournalSubmissionUrlValue, PrevSubmissionSys_PIM, JournalGroupCode.

### Errors

- **Configured error**: Submission URL has been created using Journal Group Code because REX Site Name was Null. To update Submission URL please add a REX Site Name

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulateOnlineSubmissionURL.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 142
