## CollectionUpgradeProcess

- **Rule type**: Business Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: CollectionCode, CollectionYear
- **Attribute name(s)**: Collection Code, Collection Type, Message Status, Journals Trigger Attribute
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionUpgradeProcess.js`

### Functional description

Collection Upgrade Process

### Functional logic

- Calls: collectionLibrary.createCollectionSubType, collectionLibrary.createCollection.
- Reads/writes attributes including: CollectionYear, CollectionCode.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: CollectionFunctions (collectionLibrary)
- **Key functions**: getReferences(), getChildren(), createCollectionSubType(), createCollection(), createReference(), approve()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 91
