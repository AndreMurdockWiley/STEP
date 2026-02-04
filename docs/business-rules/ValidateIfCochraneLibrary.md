## ValidateIfCochraneLibrary

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfCochraneLibrary.js`

### Functional description

Determines whether the current object should be treated as a **Cochrane Library** collection for downstream validations/workflow logic. The condition evaluates the collection’s subtype and type to confirm it is an *Evidence Medicine* collection and that it is not classified as a *Dynamic* collection type. It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- **Pass / returns `true`** when:
  - `OtherProductCollectionSubType` equals **"Evidence Medicine"**, and
  - `OtherProductCollectionType` is **not** **"Dynamic"**
- **Fail / returns `false`** in all other cases.
- Reads attributes: `OtherProductCollectionSubType`, `OtherProductCollectionType` (no attribute updates performed).

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
