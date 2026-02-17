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

`NewEnrichWorkflow_Gate_Media` is a workflow transition action used to move journal media records forward in the media lifecycle.  
When a `JournalPrintMedia` or `JournalDigitalMedia` item reaches `State-2` in the `JournalCreationWFV3Backup` workflow, this rule triggers the `Media_To_Complete` event to progress the item to the next workflow step.  
The rule is designed as an execution/gating action (Business Action), not as a validation rule, and therefore does not perform field-level checks or raise a dedicated validation error message.

### Functional logic

This rule is implemented with the `BulkUpdateTriggerStateFlowEvent` operation plugin and is configured to execute the following workflow action:

1. Target the `JournalCreationWFV3Backup` state flow.
2. Apply only when the current workflow state is `State-2`.
3. Trigger the workflow event `Media_To_Complete`.
4. Submit an empty process note (`processNote = ""`) as part of the event trigger.

In business terms, the logic acts as a controlled gate that programmatically advances media objects from the media processing state toward completion in a consistent, repeatable way.

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
