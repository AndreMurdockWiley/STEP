## ValidateIfNOTCochraneLibraryComponents

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfNOTCochraneLibraryComponents.js`

### Functional description

Determines whether the current object should be treated as **NOT** a “Cochrane Library - components” collection, based on the values of `OtherProductCollectionSubType` and `OtherProductCollectionType`. This rule is used as a boolean business condition in STEP to gate/qualify downstream validations or workflow behavior.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `OtherProductCollectionSubType` and `OtherProductCollectionType` from the current object.
- If `OtherProductCollectionSubType` is **"Evidence Medicine"** **OR** `OtherProductCollectionType` is **"Dynamic"**, the condition evaluates to **false** (i.e., the object is treated as a Cochrane Library component and therefore does **not** meet the “NOT Cochrane Library - components” condition).
- Otherwise, the condition evaluates to **true** (i.e., `OtherProductCollectionSubType` is **not** "Evidence Medicine" **AND** `OtherProductCollectionType` is **not** "Dynamic").
- **Reads attributes**: `OtherProductCollectionSubType`, `OtherProductCollectionType` (no attribute writes).

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
- **Row(s) (0-based in data block)**: 263
