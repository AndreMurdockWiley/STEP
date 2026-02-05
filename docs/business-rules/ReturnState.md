## ReturnState

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Source file(s)**: `Conditions/ReturnState.js`

### Functional description

Determines whether the current object is in an activated state by checking the "ProductActivated" attribute for the value "Activated". It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read "ProductActivated" from the current object.
- Return true when "ProductActivated" = "Activated"; otherwise return false.
- Reads attributes including: ProductActivated.

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
