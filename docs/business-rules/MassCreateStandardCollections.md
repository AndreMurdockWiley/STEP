## MassCreateStandardCollections

- **Rule type**: Business Action
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionSubType, CollectionType, CollectionYear
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`

### Functional description

Mass Create Standard Collections

### Functional logic

- Calls: collectionLibrary.createCollectionYear, collectionLibrary.createCollectionSubType, collectionLibrary.createCollection.
- Reads/writes attributes including: CollectionYear, CollectionSubType, CollectionType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 223
