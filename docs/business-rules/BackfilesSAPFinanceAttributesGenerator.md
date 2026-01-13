## BackfilesSAPFinanceAttributesGenerator

- **Rule type**: Business Action
- **Business area**: BackfilesUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalGroupCode, ProductContentCategory, ProductFinanceDivision, ProductFinanceEntitlementPlatform, ProductFinancePublicationType, ProductMediumCode, ProductOneSourceTaxCode, ProductSAPMaterialNumber, SAPExternalMaterialGroup
- **Source file(s)**: `BackfilesUpsertGroup/BackfilesSAPFinanceAttributesGenerator.js`

### Functional description

Backfiles SAP Finance Attributes Generator. It primarily works with attribute(s): JournalGroupCode, ProductContentCategory, ProductFinanceDivision, ProductFinanceEntitlementPlatform, ProductFinancePublicationType, ProductMediumCode, ProductOneSourceTaxCode, ProductSAPMaterialNumber, SAPExternalMaterialGroup.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Calls: otherProductsLibrary.sequentialMatNoIncrement.
- Reads/writes attributes including: JournalGroupCode, ProductSAPMaterialNumber, ProductFinancePublicationType, ProductContentCategory, ProductFinanceDivision, ProductFinanceEntitlementPlatform, SAPExternalMaterialGroup, ProductOneSourceTaxCode, ProductMediumCode.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): BackfilesUpsertGroup/BackfilesSAPFinanceAttributesGenerator.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 221
