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

Populate the Journal Submission URL when the editorial submission system is set to "Research Exchange Submission". The rule builds the URL using the base `https://submission.wiley.com/journal/`, preferring the Journal REX Site Name when present and falling back to the Journal Group Code when it is not. If the fallback is used and the previous submission system was not Research Exchange, the user is warned to supply a REX Site Name. The rule also updates the Previous Submission System PIM attribute to the current editorial submission system each time it runs.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read Journal Editorial Submission System, Journal REX Site Name, Journal Group Code, and Previous Submission System PIM.
- If Journal Editorial Submission System equals "Research Exchange Submission":
  - If Journal REX Site Name is present, set Journal Submission URL Value to `https://submission.wiley.com/journal/` + REX Site Name.
  - Otherwise set Journal Submission URL Value to `https://submission.wiley.com/journal/` + Journal Group Code.
  - When the fallback is used and Previous Submission System PIM is not "Research Exchange Submission", show the configured warning.
- Set Previous Submission System PIM to the current Journal Editorial Submission System.

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
