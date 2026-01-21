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

Issue Merge Creation With Copy To Online. It primarily works with attribute(s): IssueFromIssueNumber, IssueStatus, IssueType, StartingPubSequenceMedia. It is triggered from: VolumeIssueCreationWF (Initiate workflow). If validation fails, the user sees an error message such as: "Unable to merge! There are issues with Issue Run Date populated.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: IssueFromIssueNumber, StartingPubSequenceMedia, IssueType, IssueStatus.

### Errors

- **Configured error**: Unable to merge! There are issues with Issue Run Date populated.

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: Initiate workflow

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions), IssueFunctions (issueLibrary), VolumeFunctions (volumeLibrary)
- **Key functions**: validateIssuesRunDate(), mergeIssues(), findDigitalIssue(), removeFromWorkflow(), startWorkflowByID()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 68
