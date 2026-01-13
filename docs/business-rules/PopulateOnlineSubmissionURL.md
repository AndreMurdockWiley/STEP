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

Populate Online Submission URL

### Functional logic

- If "JournalEditorialSubmissionSystem" == "Research Exchange Submission", apply the corresponding branch logic.
- If "JournalEditorialSubmissionSystem" == "Research Exchange Submission", apply the corresponding branch logic.
- Reads/writes attributes including: JournalREXSiteName, JournalEditorialSubmissionSystem, JournalSubmissionUrlValue, PrevSubmissionSys_PIM, JournalGroupCode.

### Errors

- **Configured error**: Submission URL has been created using Journal Group Code because REX Site Name was Null. To update Submission URL please add a REX Site Name

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 142
