## CollectionGenerateName

- **Rule type**: Business Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: CollectionType, CollectionYear
- **Attribute name(s)**: Collection Type, Collection Year
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionGenerateName.js`

### Functional description

Collection Generate Name. It primarily works with attribute(s): CollectionType, CollectionYear.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "CollectionType" == "NURS", apply the corresponding branch logic.
- Calls: collectionLibrary.collectionTypeConverter, collectionLibrary.createCollectionYear, collectionLibrary.generateStandardCollectionAttributes, collectionLibrary.generateCommonCollectionAttributes, collectionLibrary.generateSpecificCollectionAttributes.
- Reads/writes attributes including: CollectionType, CollectionYear.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionUpsertGroup/CollectionGenerateName.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: CollectionFunctions (collectionLibrary)
- **Key functions**: collectionTypeConverter(), createCollectionYear(), generateStandardCollectionAttributes(), generateCommonCollectionAttributes(), generateSpecificCollectionAttributes()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 96
