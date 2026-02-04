## ValidateIfOtherOrDatabase

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType
- **Source file(s)**: `Conditions/ValidateIfOtherOrDatabase.js`

### Functional description

Validates that the current object represents a collection that is classified as either an **Other Database** collection or a **Database Model Collections** collection. This condition is typically used in STEP as a business condition to gate validations/actions so they only run for those two collection types.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `CollectionType` from the current object.
- Return **true** when `CollectionType` is **either** `"Other Database"` **or** `"Database Model Collections"`.
- Return **false** for any other value (the business condition fails).
- Reads attributes: `CollectionType` (no attributes are written/updated).

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
- **Row(s) (0-based in data block)**: 268
