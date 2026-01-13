## IssueMergeCreation

- **Rule type**: Business Action
- **Business area**: IssuesUpsertGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: IssueFromIssueNumber, IssueStatus, IssueType, StartingPubSequenceMedia
- **Source file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueMergeCreation.js`

### Functional description

Issue Merge Creation

### Functional logic

- Calls: volumeLibrary.validateIssuesRunDate, issueLibrary.mergeIssues.
- Reads/writes attributes including: IssueFromIssueNumber, StartingPubSequenceMedia, IssueType, IssueStatus.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 320
