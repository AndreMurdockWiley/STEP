## CollectionUpgradeProcessState

- **Rule type**: Business Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionUpgradeProcessState.js`

### Functional description

Collection Upgrade Process State. It is triggered from: CollectionCreationWF (State-7: MoveToEnd event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: BulkUpdateTriggerStateFlowEvent.
- Parameter "currentStateID": State-7
- Parameter "eventID": MoveToEnd
- Parameter "stateFlowID": CollectionCreationWF

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: CollectionCreationWF
  - **Task/Event**: State-7: MoveToEnd event

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: RepublishEventQueueOperation, BulkUpdateTriggerStateFlowEvent

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 75
