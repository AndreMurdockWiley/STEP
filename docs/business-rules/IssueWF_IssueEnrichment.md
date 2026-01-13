## IssueWF_IssueEnrichment

- **Rule type**: Business Action
- **Setup group**: IssuesWorkFlowGroup
- **Business area**: IssuesWorkFlowGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: JournalPrintIssues, JournalDigitalIssues
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesWorkFlowGroup/IssueWF_IssueEnrichment.js`

### Functional description

Issue WF Issue Enrichment. It is triggered from: VolumeIssueCreationWF (On creation and state transitions).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: ReferenceOtherBABusinessAction.
- Parameter "ReferencedBA": IssueAttributesOnSaveGeneration

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: On creation and state transitions

### Dependencies / key functions

- **Dependencies**: IssueAttributesOnSaveGeneration
- **Key functions**: Workflow transition action

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 22
