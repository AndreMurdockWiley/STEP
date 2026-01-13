## MultiMediaPackageCreation

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalGroupCode, ProductFinanceBillingModel, ProductSAPMaterialNumber, ProductShortTitle, ProductStatus, ProductTitle
- **Attribute name(s)**: Journal Group Code, Journal MM Package ID, Product Status, Product Short Title, Product Finance Billing Model
- **Status**: Active
- **Source file(s)**: `PackageGroup/MultiMediaPackageCreation.js`

### Functional description

Validates that "ProductMediaType" = "Both".

### Functional logic

- Validate: "ProductMediaType" = "Both".
- Reads/writes attributes including: JournalGroupCode, ProductStatus, ProductShortTitle, ProductFinanceBillingModel, ProductSAPMaterialNumber, ProductTitle, ProductMediaType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: createProduct(), pad(), setSimpleValue(), setName(), execute()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 88
