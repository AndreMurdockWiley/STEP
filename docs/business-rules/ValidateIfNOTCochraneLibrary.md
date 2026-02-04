## ValidateIfNOTCochraneLibrary

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfNOTCochraneLibrary.js`

### Functional description

Determines whether the current object should be treated as **NOT** belonging to the Cochrane Library collection. The condition classifies an object as “Cochrane Library” when either its collection subtype is **Evidence Medicine** or its collection type is **Dynamic**; otherwise it is considered **not** Cochrane Library. It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `OtherProductCollectionSubType` and `OtherProductCollectionType` from the current object.
- If `OtherProductCollectionSubType` = **Evidence Medicine**, the condition evaluates to **false** (i.e., it is not “NOT Cochrane Library”).
- Else if `OtherProductCollectionType` = **Dynamic**, the condition evaluates to **false**.
- Otherwise, the condition evaluates to **true** (the object is treated as NOT Cochrane Library).
- Reads attributes: `OtherProductCollectionSubType`, `OtherProductCollectionType` (no updates).

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
- **Row(s) (0-based in data block)**: 261
