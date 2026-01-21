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

Test Trigger Rule Create. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

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
