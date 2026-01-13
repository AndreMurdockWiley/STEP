## NewEnrichWorkflow_Gate_Media

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/NewEnrichWorkflow_Gate_Media.js`

### Functional description

NewEnrichWorkflow_Gate_Media

### Functional logic

- Plugin: BulkUpdateTriggerStateFlowEvent.
- Parameter "currentStateID": State-2
- Parameter "eventID": Media_To_Complete
- Parameter "stateFlowID": JournalCreationWFV3Backup

### Errors

—

### Usage / trigger

- **Configuration**: JournalCreationWFV3Backup
  - **Task/Event**: State-2, Event: Media_To_Complete

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: BulkUpdateTriggerStateFlowEvent

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 44
