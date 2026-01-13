## OPSAPFinanceAttributesGenerator

- **Rule type**: Business Action
- **Setup group**: OtherProductsUpsertGroup
- **Business area**: OtherProductsUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: MultiMedia
- **Attribute ID(s)**: ProductBundleCodeID, ProductBundleGroupID, ProductContentCategory, ProductFinanceDivision, ProductOneSourceTaxCode, ProductSAPMaterialNumber, SAPExternalMaterialGroup
- **Attribute name(s)**: SAP Material Number, Content Category, Finance Division, SAP External Material Group, OneSource Tax Code
- **Status**: Active
- **Source file(s)**: `OtherProducts/OtherProductsUpsertGroup/OPSAPFinanceAttributesGenerator.js`

### Functional description

OP SAP Finance Attributes Generator

### Functional logic

- Calls: otherProductsLibrary.sequentialMatNoIncrement.
- Reads/writes attributes including: ProductBundleGroupID, ProductBundleCodeID, ProductSAPMaterialNumber, ProductContentCategory, ProductFinanceDivision, SAPExternalMaterialGroup, ProductOneSourceTaxCode.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions), OtherProductsFunctions (otherProductsLibrary)
- **Key functions**: getDataContainerObjects(), sequentialMatNoIncrement()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 50
