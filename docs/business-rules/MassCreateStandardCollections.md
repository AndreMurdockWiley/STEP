## MassCreateStandardCollections

- **Rule type**: Business Action
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionSubType, CollectionType, CollectionYear
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`

### Functional description

Mass Create Standard Collections. It primarily works with attribute(s): CollectionSubType, CollectionType, CollectionYear.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Calls: collectionLibrary.createCollectionYear, collectionLibrary.createCollectionSubType, collectionLibrary.createCollection.
- Reads/writes attributes including: CollectionYear, CollectionSubType, CollectionType.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 223
