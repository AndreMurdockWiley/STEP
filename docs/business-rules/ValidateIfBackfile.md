## ValidateIfBackfile

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType
- **Source file(s)**: `Conditions/ValidateIfBackfile.js`

### Functional description

Determines whether the current object should be treated as a **Backfile collection** for validation and workflow gating. The condition evaluates the object's `CollectionType` and only passes when the type is explicitly set to **Backfile Collection**. This rule is typically used in STEP configurations to ensure backfile-only actions/validations are applied to the correct collection type.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `CollectionType` from the current object.
- Return **true** when `CollectionType` equals `"Backfile Collection"`.
- Otherwise return **false** (the surrounding STEP configuration determines the validation message/behavior when the condition fails).
- Reads attributes: `CollectionType` (no attributes are written).

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
- **Row(s) (0-based in data block)**: 253
