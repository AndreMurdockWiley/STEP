## ValidateIfProductActveStandard

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionSubType, ProductActivated
- **Source file(s)**: `Conditions/ValidateIfProductActveStandard.js`

### Functional description

Ensures the current object is eligible to proceed only when it represents an **activated** product/collection of subtype **Standard**. This rule is used as a STEP **Business Condition** for configured validations: when the condition evaluates to `true`, the validation can pass; when it evaluates to `false`, STEP will block the action and display the validation message configured in STEP.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `ProductActivated` and `CollectionSubType` from the current object.
- Evaluate the condition: `ProductActivated == "Activated"` **AND** `CollectionSubType == "Standard"`.
- If both checks are true, return `true` (condition satisfied).
- Otherwise (including when either attribute is blank/unset or has any other value), return `false` (condition not satisfied).
- Reads attributes: `ProductActivated`, `CollectionSubType` (no attribute writes).

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
- **Row(s) (0-based in data block)**: 271
