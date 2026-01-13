## AutoClassificationCollections

- **Rule type**: Business Action
- **Business area**: AutoClassifyRules
- **Data model object valid to**: JournalCollectionsOffering
- **Attribute ID(s)**: CollectionStatus, CollectionSubType, CollectionType, CollectionYear, ProductTitle
- **Source file(s)**: `AutoClassifyRules/AutoClassificationCollections.js`

### Functional description

Auto Classification Collections. It primarily works with attribute(s): CollectionStatus, CollectionSubType, CollectionType, CollectionYear, ProductTitle.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

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

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): AutoClassifyRules/AutoClassificationCollections.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 218
