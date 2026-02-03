## ValidateIfSpecialProduct

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfSpecialProduct.js`

### Functional description

Ensures an object is treated as a “Special Product” only when the attribute `OtherProductCollectionType` is set to `Dynamic`. This rule is used as a STEP business condition/validation gate: it returns **pass** when the attribute value matches and **fail** otherwise.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `OtherProductCollectionType` from the current object.
- If the value is exactly `Dynamic`, the condition evaluates to **true** (validation passes).
- Otherwise (including blank or any other value), the condition evaluates to **false** (validation fails).
- This rule **does not update** any attributes; it only reads `OtherProductCollectionType`.

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
