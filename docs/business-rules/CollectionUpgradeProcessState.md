## CollectionUpgradeProcessState

- **Rule type**: Business Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionUpgradeProcessState.js`

### Functional description

Collection Upgrade Process State

### Functional logic

- Plugin: BulkUpdateTriggerStateFlowEvent.
- Parameter "currentStateID": State-7
- Parameter "eventID": MoveToEnd
- Parameter "stateFlowID": CollectionCreationWF

### Errors

—

### Usage / trigger

- **Configuration**: CollectionCreationWF
  - **Task/Event**: State-7: MoveToEnd event

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: RepublishEventQueueOperation, BulkUpdateTriggerStateFlowEvent

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 75
