## IssueFunctions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalPrintIssues, JournalDigitalIssues
- **Attribute ID(s)**: IssueEmlo, IssueFromIssueNumber, IssueFurtherDescription, IssueId, IssueJpcmsId, IssuePubSequence, IssuePublicationType, IssueReportingYear, IssueSAPMaterialNumber, IssueStatus, IssueSupplementNo, IssueTitle, IssueToIssueNumber, IssueType, IssueVolumeNumber, JournalMediaCode, ProductOriginalPublicationDate, ProductPublicationYear, ProductSAPMaterialNumber, StartingPubSequenceMedia
- **Attribute name(s)**: Issue Type, Issue Publication Sequence, Issue Status, Issue Number
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Libraries/IssueFunctions.js`

### Functional description

Issue Functions. It primarily works with attribute(s): IssueEmlo, IssueFromIssueNumber, IssueFurtherDescription, IssueId, IssueJpcmsId, IssuePubSequence, IssuePublicationType, IssueReportingYear, IssueSAPMaterialNumber, IssueStatus, IssueSupplementNo, IssueTitle, IssueToIssueNumber, IssueType, IssueVolumeNumber, JournalMediaCode, ProductOriginalPublicationDate, ProductPublicationYear, ProductSAPMaterialNumber, StartingPubSequenceMedia. It is triggered from: VolumeIssueCreationWF (On creation, state transitions). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Electronic", continue; otherwise error.
- If "JournalMediaCode" == "Electronic", continue; otherwise error.
- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- If "IssueEmlo" == "Yes", apply the corresponding branch logic.
- Trigger workflow event "MoveToNonJPCMS".
- Reads/writes attributes including: JournalMediaCode, IssueFromIssueNumber, ProductSAPMaterialNumber, IssueVolumeNumber, IssueStatus, IssueType, IssueReportingYear, ProductPublicationYear, IssuePubSequence, IssueEmlo.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: On creation, state transitions
- **Configuration**: Workflow: —
  - **Task/Event**: Workflow Event: "MoveToNonJPCMS"

### Dependencies / key functions

- **Dependencies**: GenericFunctions
- **Key functions**: createIssue(), mergeIssues(), issueCopyToOnline(), issueDeleteCheck()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 14
