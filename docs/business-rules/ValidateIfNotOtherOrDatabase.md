## ValidateIfNotOtherOrDatabase

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType
- **Source file(s)**: `Conditions/ValidateIfNotOtherOrDatabase.js`

### Functional description

Ensures the selected **Collection Type** is not one of the disallowed “database/backfile” options. This rule is used as a **business condition** in STEP validations to prevent workflows/configurations that require a non-database collection from continuing when the object is classified as *Other Database*, *Database Model Collections*, or *Backfile Collection*.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `CollectionType` from the current object.
- If `CollectionType` is **any** of the following values, the condition **fails** (returns `false`), so the configured STEP validation should block/raise an error:
  - `Other Database`
  - `Database Model Collections`
  - `Backfile Collection`
- Otherwise, the condition **passes** (returns `true`).
- Reads attributes including: `CollectionType` (no attributes are written).

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
