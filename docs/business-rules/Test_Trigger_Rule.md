## Test_Trigger_Rule

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Integrations/Test_Trigger_Rule.js`

### Functional description

Business action used by STEP integration endpoints to initiate a test create flow. When triggered, it delegates to the shared Approve_And_Send_Object library to approve the current object and trigger the outbound integration, then logs the result. The implementation is explicitly marked as a first-time create (not an update) call.

### Functional logic

- Accepts the current object, logger, and manager binds.
- Calls `myFunc.approveAndTriggerObj(node, manager, log, "true")` to run the create-path approval/trigger logic in the dependency library.
- Logs an info message prefixed with `TEST RUN TRIGGER:` followed by the returned status/result from the library call.

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
- **Row(s) (0-based in data block)**: 24
