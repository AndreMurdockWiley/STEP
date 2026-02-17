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

This business action acts as a workflow gate for Journal records in **JournalCreationWFV3Backup**.  
When a Journal is in **State-2**, the rule programmatically fires the **Update_1** event to move the record through the next enrichment step.  
It is an orchestration action (not a validation rule), so no business validation message is expected from this rule itself.

### Functional logic

The rule uses the **BulkUpdateTriggerStateFlowEvent** operation to transition workflow state in STEP.

- Targets workflow: **JournalCreationWFV3Backup** (`stateFlowID`)
- Applies when current task state is: **State-2** (`currentStateID`)
- Triggers workflow event: **Update_1** (`eventID`)
- `processNote` is configured as blank, so no additional transition note is added by this action.

In practical terms, once invoked in State-2, this action pushes the Journal forward by raising the configured event in the same workflow.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: JournalCreationWFV3Backup
  - **Task/Event**: State-2, Event: Update_1

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: BulkUpdateTriggerStateFlowEvent

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 37
