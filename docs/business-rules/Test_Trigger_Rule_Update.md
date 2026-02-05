## Test_Trigger_Rule_Update

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Integrations/Test_Trigger_Rule_Update.js`

### Functional description

Runs as an integration-triggered business action to approve the current object and fire the integration update via the shared Approve_And_Send_Object helper. The rule is primarily used to test that the integration endpoint can invoke business actions and to record the outcome in the log.

### Functional logic

1. Invoke `approveAndTriggerObj(node, manager, log)` from the Approve_And_Send_Object library.
2. Log the returned result with the prefix `TEST RUN TRIGGER:`. The helper returns `"true"` when the object is processed as a first-time create, and `"false"` when it is processed as an update.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: Approve_And_Send_Object (myFunc)
- **Key functions**: approveAndTriggerObj()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 39
