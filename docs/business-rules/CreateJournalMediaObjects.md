## CreateJournalMediaObjects

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: DigitalJournalCode, IDLDigitalJournalCode, IDLDigitalJournalISSN, IDLDigitalJournalStatus, IDLJournalAvailableInEarlyView, IDLJournalFinanceContentCategory, IDLJournalFinanceDivision, IDLJournalFinanceEntitlementPlatform, IDLJournalFinancePublicationType, IDLJournalHomeWarehouse, IDLJournalOnlineOpen, IDLJournalOpenAccess, IDLPrintJournalCode, IDLPrintJournalISSN, IDLPrintJournalStatus, JournalAvailableInEarlyView, JournalHomeWarehouse, JournalMediaCode, JournalOnlineOpen, JournalOpenAccess, PrintJournalCode, ProductContentCategory, ProductFinanceDivision, ProductFinanceEntitlementPlatform, ProductFinancePublicationType, ProductFullTitle, ProductIssn, ProductMediaType, ProductStatus, ProductTitle
- **Attribute name(s)**: Product Title, Product Media Type, Print Journal Code, Digital Journal Code, Digital Journal ISSN
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/CreateJournalMediaObjects.js`

### Functional description

Create Journal Media Objects. It primarily works with attribute(s): DigitalJournalCode, IDLDigitalJournalCode, IDLDigitalJournalISSN, IDLDigitalJournalStatus, IDLJournalAvailableInEarlyView, IDLJournalFinanceContentCategory, IDLJournalFinanceDivision, IDLJournalFinanceEntitlementPlatform, IDLJournalFinancePublicationType, IDLJournalHomeWarehouse, IDLJournalOnlineOpen, IDLJournalOpenAccess, IDLPrintJournalCode, IDLPrintJournalISSN, IDLPrintJournalStatus, JournalAvailableInEarlyView, JournalHomeWarehouse, JournalMediaCode, JournalOnlineOpen, JournalOpenAccess, PrintJournalCode, ProductContentCategory, ProductFinanceDivision, ProductFinanceEntitlementPlatform, ProductFinancePublicationType, ProductFullTitle, ProductIssn, ProductMediaType, ProductStatus, ProductTitle. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductTitle, ProductMediaType, IDLPrintJournalCode, IDLDigitalJournalCode, IDLDigitalJournalISSN, IDLDigitalJournalStatus, IDLJournalFinanceEntitlementPlatform, IDLPrintJournalISSN, IDLPrintJournalStatus, IDLJournalHomeWarehouse.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaUpsertGroup/CreateJournalMediaObjects.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: createProduct(), setName(), getValue(), setValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 86
