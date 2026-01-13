## IssueMergeCreationWithCopyToOnline

- **Rule type**: Business Action
- **Setup group**: IssuesUpsertGroup
- **Business area**: IssuesUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: IssueFromIssueNumber, IssueStatus, IssueType, StartingPubSequenceMedia
- **Attribute name(s)**: Copy To Online, Issue From Issue Number, Issue Status, Issue Type
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueMergeCreationWithCopyToOnline.js`

### Functional description

Issue Merge Creation With Copy To Online

### Functional logic

- Calls: volumeLibrary.validateIssuesRunDate, issueLibrary.findDigitalIssue, issueLibrary.mergeIssues.
- Reads/writes attributes including: IssueFromIssueNumber, StartingPubSequenceMedia, IssueType, IssueStatus.

### Errors

- **Configured error**: Unable to merge! There are issues with Issue Run Date populated.

### Usage / trigger

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: Initiate workflow

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions), IssueFunctions (issueLibrary), VolumeFunctions (volumeLibrary)
- **Key functions**: validateIssuesRunDate(), mergeIssues(), findDigitalIssue(), removeFromWorkflow(), startWorkflowByID()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 68
