## ValidateIfDatabase

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType
- **Source file(s)**: `Conditions/ValidateIfDatabase.js`

### Functional description

Ensures the current object is treated as a **Database Model Collection** by verifying its `CollectionType` value. This rule is used as a **business condition** in STEP to gate validations/steps so they only apply when the object’s collection type is explicitly set to *Database Model Collections*.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `CollectionType` from the current object.
- If `CollectionType` is exactly `"Database Model Collections"`, the condition evaluates to **true**.
- Otherwise, the condition evaluates to **false** (the associated STEP validation/configuration determines the user-facing outcome/message).

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
- **Row(s) (0-based in data block)**: 258
