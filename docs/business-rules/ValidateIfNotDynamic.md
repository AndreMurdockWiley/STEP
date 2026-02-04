## ValidateIfNotDynamic

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfNotDynamic.js`

### Functional description

Ensures the current object is **not** marked as a *Dynamic* other product collection. This business condition evaluates the `OtherProductCollectionType` attribute and returns **true (passes)** for any value other than `"Dynamic"` (including blank), and **false (fails)** only when the value is exactly `"Dynamic"`. It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `OtherProductCollectionType` from the current object.
- If `OtherProductCollectionType` is not equal to `"Dynamic"`, the condition **passes** (returns `true`).
- If `OtherProductCollectionType` is equal to `"Dynamic"`, the condition **fails** (returns `false`).

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
- **Row(s) (0-based in data block)**: 264
