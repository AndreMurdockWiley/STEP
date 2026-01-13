## CollectionFunctions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalCollectionsOffering, OtherProductCollectionOffering
- **Attribute ID(s)**: CollectionCode, CollectionStatus, CollectionSubType, CollectionType, CollectionYear, DatabaseCollectionDates, ProductActivated, ProductTitle
- **Attribute name(s)**: Collection Type, Collection Status, Collection Code, Collection Year
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Libraries/CollectionFunctions.js`

### Functional description

Collection Functions

### Functional logic

- Plugin: JavaScriptBusinessLibrary.
- If "CollectionStatus" == "Inactive", continue; otherwise error.
- If "CollectionStatus" == "Inactive", continue; otherwise error.
- Reads/writes attributes including: CollectionType, CollectionStatus, ProductTitle, CollectionYear, CollectionSubType, CollectionCode, ProductActivated, DatabaseCollectionDates.

### Errors

—

### Usage / trigger

- **Configuration**: CollectionCreationWF
  - **Task/Event**: On creation

### Dependencies / key functions

- **Dependencies**: GenericFunctions
- **Key functions**: createCollectionYear(), createCollectionSubType(), createCollection()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 15
