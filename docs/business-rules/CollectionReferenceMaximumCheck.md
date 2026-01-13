## CollectionReferenceMaximumCheck

- **Rule type**: Business Action
- **Setup group**: OtherProductCollectionRules
- **Business area**: OtherProductCollectionRules
- **Data model object valid to**: OtherProductCollectionOffering, JournalCollectionsOffering
- **Product type(s) valid to**: OtherProductCollectionOffering, JournalCollectionsOffering
- **MDD reference ID**: OtherProdCollectionToOtherProdReference, StaticAccColl_To_Journal_OtherProd_Ref, COLLECTIONS_TO_JOURNALS
- **Attribute ID(s)**: CollectionCategory
- **Attribute name(s)**: Collection Category
- **Status**: Active
- **Source file(s)**: `OtherProductCollectionRules/CollectionReferenceMaximumCheck.js`

### Functional description

CollectionReferenceMaximumCheck

### Functional logic

- Reads/writes attributes including: CollectionCategory.

### Errors

- **Configured error**: ERROR: The file is too large and cannot be processed. To proceed, please reach out to the Stibo MDM Team for assistance | SUCCESS: This collection successfully pushed to downstream systems
- **In-script message**: The file is too large and cannot be processed. To proceed, please reach out to the Stibo MDM Team for assistance

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferences(), forEach(), showAlert()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 170
