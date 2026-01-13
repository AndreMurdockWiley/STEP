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

Create Journal Media Objects

### Functional logic

- If "ProductMediaType" == "Print", apply the corresponding branch logic.
- If "ProductMediaType" == "Online", apply the corresponding branch logic.
- If "JournalTrueStatus" == "Yes", apply the corresponding branch logic.
- If "JournalTrueStatus" == "Yes", apply the corresponding branch logic.
- Reads/writes attributes including: ProductTitle, ProductMediaType, IDLPrintJournalCode, IDLDigitalJournalCode, IDLDigitalJournalISSN, IDLDigitalJournalStatus, IDLJournalFinanceEntitlementPlatform, IDLPrintJournalISSN, IDLPrintJournalStatus, IDLJournalHomeWarehouse.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: createProduct(), setName(), getValue(), setValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 86
