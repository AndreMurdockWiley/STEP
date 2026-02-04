## ValidateIfCochraneLibrary

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfCochraneLibrary.js`

### Functional description

Validates that an Other Product Collection qualifies to be treated as a Cochrane Library collection for workflow/validation purposes. A collection is considered valid by this condition only when its subtype indicates Cochrane Library content ("Evidence Medicine") and it is not configured as a dynamic collection type.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `OtherProductCollectionSubType` and `OtherProductCollectionType`.
- **Pass (returns `true`)** when `OtherProductCollectionSubType` = `"Evidence Medicine"` **and** `OtherProductCollectionType` ≠ `"Dynamic"`.
- **Fail (returns `false`)** for all other combinations (this is then handled by the configured STEP validation).

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
- **Row(s) (0-based in data block)**: 257
