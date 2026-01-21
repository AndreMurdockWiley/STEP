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

NewEnrichWorkflow_Gate_Media. It is triggered from: JournalCreationWFV3Backup (State-2, Event: Media_To_Complete). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: BulkUpdateTriggerStateFlowEvent.
- Parameter "currentStateID": State-2
- Parameter "eventID": Media_To_Complete
- Parameter "stateFlowID": JournalCreationWFV3Backup

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
