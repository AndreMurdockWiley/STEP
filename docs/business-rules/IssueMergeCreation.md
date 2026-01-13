## IssueMergeCreation

- **Rule type**: Business Action
- **Business area**: IssuesUpsertGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: IssueFromIssueNumber, IssueStatus, IssueType, StartingPubSequenceMedia
- **Source file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueMergeCreation.js`

### Functional description

Issue Merge Creation. It primarily works with attribute(s): IssueFromIssueNumber, IssueStatus, IssueType, StartingPubSequenceMedia.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Calls: volumeLibrary.validateIssuesRunDate, issueLibrary.mergeIssues.
- Reads/writes attributes including: IssueFromIssueNumber, StartingPubSequenceMedia, IssueType, IssueStatus.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/IssuesUpsertGroup/IssueMergeCreation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 320
