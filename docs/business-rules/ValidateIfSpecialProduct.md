## ValidateIfSpecialProduct

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfSpecialProduct.js`

### Functional description

Determines whether an object should be treated as a “Special Product” for downstream validations/workflow gating. In this rule, “Special Product” is defined purely by the object’s **OtherProductCollectionType** being set to **Dynamic**. The condition is evaluated wherever it is configured in STEP as a business condition.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read **OtherProductCollectionType** from the current object.
- **Pass (true)** when **OtherProductCollectionType** is exactly `"Dynamic"` (case-sensitive match).
- **Fail (false)** for any other value, including blank/unset.
- No attributes are updated by this rule (read-only check).

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
- **Row(s) (0-based in data block)**: 274
