## AutoClassificationOtherProducts

- **Rule type**: Business Action
- **Setup group**: AutoClassifyRules
- **Business area**: AutoClassifyRules
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ProductBundleCode, ProductBundleCodeID, ProductBundleGroupID
- **Attribute name(s)**: Product Bundle Code ID, Product Bundle Group ID
- **Status**: Active
- **Source file(s)**: `AutoClassifyRules/AutoClassificationOtherProducts.js`

### Functional description

Auto Classification Other Products

### Functional logic

- Reads/writes attributes including: ProductBundleCodeID, ProductBundleCode, ProductBundleGroupID.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getDataContainerObjects(), charCodeAt(), setParent()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 83
