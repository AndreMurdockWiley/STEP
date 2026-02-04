## ValidateIfNotOtherOrDatabase

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType
- **Source file(s)**: `Conditions/ValidateIfNotOtherOrDatabase.js`

### Functional description

Validate If NOT Other or Database. This business condition is used to determine whether the current object’s `CollectionType` is an allowed value for the configured STEP validation. In other words, it evaluates **true** when `CollectionType` is **not** one of the excluded collection types (Other Database, Database Model Collections, Backfile Collection). It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `CollectionType` from the current object.
- If `CollectionType` is **any** of the following values, the condition **fails** (returns `false`): "Other Database", "Database Model Collections", "Backfile Collection".
- Otherwise (including when `CollectionType` is blank/unset), the condition **passes** (returns `true`).
- Reads attributes including: CollectionType.

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
- **Row(s) (0-based in data block)**: 265
