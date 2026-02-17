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

This business action advances journal media records in the `JournalCreationWFV3Backup` workflow when users trigger the `Media_To_Complete` event from `State-2`. It is used as a workflow transition step for both print and digital media so qualifying items can move from media enrichment toward completion.  
As an action rule (not a validation rule), it does not define a user-facing validation error message.

### Functional logic

When executed, the rule calls the `BulkUpdateTriggerStateFlowEvent` operation to fire a workflow event on media objects in bulk.

- `stateFlowID = JournalCreationWFV3Backup`: limits execution to this workflow.
- `currentStateID = State-2`: only objects currently in `State-2` are eligible.
- `eventID = Media_To_Complete`: triggers the transition event that moves eligible objects to the next configured workflow step.
- `processNote` is blank: no process note is written during the transition.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: JournalCreationWFV3Backup
  - **Task/Event**: State-2, Event: Media_To_Complete

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: BulkUpdateTriggerStateFlowEvent

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 44
