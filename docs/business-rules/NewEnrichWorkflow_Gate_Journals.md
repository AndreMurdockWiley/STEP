## NewEnrichWorkflow_Gate_Journals

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/NewEnrichWorkflow_Gate_Journals.js`

### Functional description

NewEnrichWorkflow_Gate_Journals

### Functional logic

- Plugin: BulkUpdateTriggerStateFlowEvent.
- Parameter "currentStateID": State-2
- Parameter "eventID": Update_1
- Parameter "stateFlowID": JournalCreationWFV3Backup

### Errors

—

### Usage / trigger

- **Configuration**: JournalCreationWFV3Backup
  - **Task/Event**: State-2, Event: Update_1

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: BulkUpdateTriggerStateFlowEvent

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 37
