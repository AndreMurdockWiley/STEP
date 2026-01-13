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

Collection Generate Name

### Functional logic

- If "CollectionType" == "NURS", apply the corresponding branch logic.
- Calls: collectionLibrary.collectionTypeConverter, collectionLibrary.createCollectionYear, collectionLibrary.generateStandardCollectionAttributes, collectionLibrary.generateCommonCollectionAttributes, collectionLibrary.generateSpecificCollectionAttributes.
- Reads/writes attributes including: CollectionType, CollectionYear.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: CollectionFunctions (collectionLibrary)
- **Key functions**: collectionTypeConverter(), createCollectionYear(), generateStandardCollectionAttributes(), generateCommonCollectionAttributes(), generateSpecificCollectionAttributes()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 96
