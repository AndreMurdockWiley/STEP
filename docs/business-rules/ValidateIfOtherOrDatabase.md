## ValidateIfOtherOrDatabase

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType
- **Source file(s)**: `Conditions/ValidateIfOtherOrDatabase.js`

### Functional description

Validates that the object's **CollectionType** is one of the supported “database” collection types. This business condition is intended to be used in STEP validations/conditions: it **returns true** when the value is allowed and **returns false** when it is not, so the configured validation can block the user or display an error message.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read **CollectionType** (simple value) from the current object.
- **Pass (true)** if **CollectionType** is either:
  - `Other Database`, or
  - `Database Model Collections`
- **Fail (false)** for any other value (including blank/unset), so downstream STEP configuration can treat it as a validation failure.
- Reads attributes: **CollectionType**. Does not write/update any attributes.

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
