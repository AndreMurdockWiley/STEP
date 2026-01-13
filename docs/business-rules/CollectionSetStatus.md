## CollectionSetStatus

- **Rule type**: Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: Collection Management
- **Data model object valid to**: Product
- **Product type(s) valid to**: All
- **Attribute ID(s)**: CollectionType, CollectionStatus
- **Attribute name(s)**: Collection Type, Collection Status
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionSetStatus.js`

### Functional description

Sets CollectionStatus to 'Active' for 'Other Database' collection types. It primarily works with attribute(s): CollectionType, CollectionStatus.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "CollectionType" == "Other Database", apply the corresponding branch logic.
- Reads/writes attributes including: CollectionType, CollectionStatus.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionUpsertGroup/CollectionSetStatus.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 113, 118
