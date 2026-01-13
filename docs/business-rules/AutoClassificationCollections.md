## AutoClassificationCollections

- **Rule type**: Business Action
- **Business area**: AutoClassifyRules
- **Data model object valid to**: JournalCollectionsOffering
- **Attribute ID(s)**: CollectionStatus, CollectionSubType, CollectionType, CollectionYear, ProductTitle
- **Source file(s)**: `AutoClassifyRules/AutoClassificationCollections.js`

### Functional description

Auto Classification Collections

### Functional logic

- If "CollectionType" == "Other Database", apply the corresponding branch logic.
- If "CollectionType" == "Database Model Collections", apply the corresponding branch logic.
- If "CollectionType" == "Specific", apply the corresponding branch logic.
- If "CollectionStatus" == "Inactive", apply the corresponding branch logic.
- If "CollectionStatus" == "Active", apply the corresponding branch logic.
- Calls: collectionLibrary.collectionTypeConverter, collectionLibrary.createCollectionYear, collectionLibrary.createCollectionSubType.
- Reads/writes attributes including: CollectionType, CollectionStatus, CollectionYear, CollectionSubType, ProductTitle.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 218
