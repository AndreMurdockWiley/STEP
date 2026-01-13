## BackfilesSAPFinanceAttributesGenerator

- **Rule type**: Business Action
- **Business area**: BackfilesUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalGroupCode, ProductContentCategory, ProductFinanceDivision, ProductFinanceEntitlementPlatform, ProductFinancePublicationType, ProductMediumCode, ProductOneSourceTaxCode, ProductSAPMaterialNumber, SAPExternalMaterialGroup
- **Source file(s)**: `BackfilesUpsertGroup/BackfilesSAPFinanceAttributesGenerator.js`

### Functional description

Backfiles SAP Finance Attributes Generator

### Functional logic

- Calls: otherProductsLibrary.sequentialMatNoIncrement.
- Reads/writes attributes including: JournalGroupCode, ProductSAPMaterialNumber, ProductFinancePublicationType, ProductContentCategory, ProductFinanceDivision, ProductFinanceEntitlementPlatform, SAPExternalMaterialGroup, ProductOneSourceTaxCode, ProductMediumCode.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 221
