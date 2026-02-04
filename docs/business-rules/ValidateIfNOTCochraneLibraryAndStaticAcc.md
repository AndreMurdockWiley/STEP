## ValidateIfNOTCochraneLibraryAndStaticAcc

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionCategory, OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfNOTCochraneLibraryAndStaticAcc.js`

### Functional description

Determines whether the current collection should be treated as **neither** a Cochrane Library collection **nor** a Static Access collection. This business condition evaluates `OtherProductCollectionSubType`, `OtherProductCollectionType`, and `CollectionCategory`, and returns a boolean result that can be used in STEP configuration (for example, to include/exclude UI tab pages or reference types).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- The condition returns **false** (i.e., it is *excluded* from “NOT Cochrane Library and NOT Static Access”) when either of the following is true:
  - `OtherProductCollectionSubType` is **Evidence Medicine** (treated as Cochrane Library), **OR**
  - `OtherProductCollectionType` is **Dynamic** (treated as Cochrane Library).
- The condition also returns **false** when the collection is a Static Access collection:
  - `OtherProductCollectionType` is **Static** **AND** `CollectionCategory` is **Access**.
- If none of the above cases match, the condition returns **true** (the collection is neither Cochrane Library nor Static Access).
- Reads attributes: `OtherProductCollectionSubType`, `OtherProductCollectionType`, `CollectionCategory` (no attribute updates).

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
- **Row(s) (0-based in data block)**: 262
