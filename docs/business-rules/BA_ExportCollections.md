## BA_ExportCollections

- **Rule type**: Action
- **Setup group**: Actions
- **Business area**: Reporting
- **Data model object valid to**: Product
- **Product type(s) valid to**: OtherProductCollectionOffering, JournalCollectionsOffering
- **Attribute ID(s)**: CollectionCode, OtherProductCollectionCode, CollectionType, OtherProductCollectionType, CollectionCategory, DigitalJournalCode, JournalGroupCode, ProductTitle, ProductIsbn13, ProductIsbn, JournalMediaCode
- **Attribute name(s)**: Collection Code, Collection Type, Collection Category, Digital Journal Code, Journal Group Code, Product Title
- **Version**: Actions
- **Status**: Active
- **Source file(s)**: `Actions/BA_ExportCollections.js`

### Functional description

Generates Collection Standard Report for Journal Collections, Database Collections, Static Collections, Static Access Collections, Dynamic Collections. And sends the report to requested user.

### Functional logic

- If "CollectionCategory" == "Regular", apply the corresponding branch logic.
- If "CollectionCategory" == "Regular", apply the corresponding branch logic.
- If "CollectionCategory" == "Access", apply the corresponding branch logic.
- If "CollectionCategory" == "Access", apply the corresponding branch logic.
- Reads/writes attributes including: OtherProductCollectionType, CollectionCategory, CollectionCode, CollectionType, DigitalJournalCode, JournalGroupCode, ProductTitle, ProductFullTitle, OtherProductCollectionCode, ProductIsbn13.

### Errors

- **In-script message**: Dear User, <br><br> Please find the Collection Standard Report attached to this email.<br><br> Collection Codes:
- **In-script message**: <br><br> Thank You.<br><br>This is an automatically generated e-mail. Please do not reply.

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: fsendEmailWithAttachment(), maskCSVValue(), queryReferences(), queryReferencedBy(), createAsset(), upload(), mail().attachment().send()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 104, 115
