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

Issue WF Issue Enrichment

### Functional logic

- Plugin: ReferenceOtherBABusinessAction.
- Parameter "ReferencedBA": IssueAttributesOnSaveGeneration

### Errors

—

### Usage / trigger

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: On creation and state transitions

### Dependencies / key functions

- **Dependencies**: IssueAttributesOnSaveGeneration
- **Key functions**: Workflow transition action

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 22
