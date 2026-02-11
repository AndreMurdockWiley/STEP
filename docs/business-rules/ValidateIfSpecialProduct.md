## ValidateIfSpecialProduct

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfSpecialProduct.js`

### Functional description

`ValidateIfSpecialProduct` determines whether the current record should be treated as a **Special Product** by evaluating `OtherProductCollectionType`.  
The condition is used as a reusable gate in STEP configurations (including outbound event filtering and Web UI conditions) so that Special Product-specific behavior only runs for qualifying records.

### Functional logic

The rule evaluates a single attribute on the current node and returns a boolean result:

- Read `OtherProductCollectionType` from the current object.
- If the value is exactly `Dynamic`, return `true` (condition passes).
- For any other value (including blank/null), return `false` (condition does not pass).
- Attribute access: reads `OtherProductCollectionType`; does not write any attributes.

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
