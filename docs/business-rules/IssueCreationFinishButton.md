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

Issue Creation/Finish Button

### Functional logic

- Locate workflow instance "JournalCreationWFV3Backup".
- If "ContinuousNumbering" == "Yes", apply the corresponding branch logic.
- If "ContinuousNumbering" == "Yes", apply the corresponding branch logic.
- If "CopyToOnline" == "Yes", apply the corresponding branch logic.
- Trigger workflow event "Finalize".
- Calls: issueLibrary.createIssue, issueLibrary.issueCopyToOnline.
- Reads/writes attributes including: ContinuousNumbering, CopyToOnline, JournalGroupCode, NumberOfIssues, CreateIssueTypeIDL, StartingPubSequenceMedia, StartingIssueNumber, StartingIssueNumberVolume, StartingSupplementNoYear, StartingSupplementNoVolume.

### Errors

- **In-script message**: ERROR IN TRIGGER FOR WORKFLOW:

### Usage / trigger

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
