## IssueCreationFinishButton

- **Rule type**: Business Action
- **Setup group**: IssuesNavegationGroup
- **Business area**: IssuesNavegationGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ContinuousNumbering, CopyToOnline, CreateIssueTypeIDL, JournalGroupCode, NumberOfIssues, StartingIssueNumber, StartingIssueNumberVolume, StartingPubSequenceMedia, StartingSupplementNoVolume, StartingSupplementNoYear
- **Attribute name(s)**: Continuous Numbering, Copy To Online, Number Of Issues, Create Issue Type IDL, Starting Pub Sequence Media, Starting Issue Number, Starting Issue Number Volume, Starting Supplement No Year, Starting Supplement No Volume, Journal Group Code
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesNavegationGroup/IssueCreationFinishButton.js`

### Functional description

Issue Creation/Finish Button. It primarily works with attribute(s): ContinuousNumbering, CopyToOnline, CreateIssueTypeIDL, JournalGroupCode, NumberOfIssues, StartingIssueNumber, StartingIssueNumberVolume, StartingPubSequenceMedia, StartingSupplementNoVolume, StartingSupplementNoYear. It is triggered from: JournalCreationWFV3Backup (State-7, Event: Finalize). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Locate workflow instance "JournalCreationWFV3Backup".
- Trigger workflow event "Finalize".
- Reads/writes attributes including: ContinuousNumbering, CopyToOnline, JournalGroupCode, NumberOfIssues, CreateIssueTypeIDL, StartingPubSequenceMedia, StartingIssueNumber, StartingIssueNumberVolume, StartingSupplementNoYear, StartingSupplementNoVolume.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: ERROR IN TRIGGER FOR WORKFLOW:

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: JournalCreationWFV3Backup
  - **Task/Event**: State-7, Event: Finalize
- **Configuration**: Workflow: "JournalCreationWFV3Backup"
  - **Task/Event**: Workflow Event: "Finalize"

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions), IssueFunctions (issueLibrary)
- **Key functions**: createIssue(), issueCopyToOnline(), workflow triggers

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 38
