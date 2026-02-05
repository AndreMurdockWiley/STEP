## ReturnState

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Source file(s)**: `Conditions/ReturnState.js`

### Functional description

Determines whether the current object is marked as activated by inspecting the ProductActivated attribute. This business condition is used in STEP validations to allow logic to proceed only when the object is in an activated state.

### Functional logic

- Read the current object's **ProductActivated** attribute.
- If the attribute value is exactly **"Activated"**, return **true** (condition passes).
- Otherwise return **false**.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 248
