## Auto_Populate_Bundle_Code

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: BundleGroup_BundleCode_DataContainer, ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType
- **Attribute name(s)**: Product Bundle Code, Product Bundle Group, Product Bundle Subscription Type
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/Auto_Populate_Bundle_Code.js`

### Functional description

Auto Populate Bundle Code

### Functional logic

- Reads/writes attributes including: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerByTypeID(), addDataContainer(), createDataContainerObject(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 71
