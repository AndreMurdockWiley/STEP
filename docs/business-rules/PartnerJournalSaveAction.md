## PartnerJournalSaveAction

- **Rule type**: Business Action
- **Setup group**: PartnerJournalsGroup
- **Business area**: PartnerJournalsGroup
- **Data model object valid to**: PartnerJournal
- **Product type(s) valid to**: PartnerJournal
- **Attribute ID(s)**: JournalStatus, JournalUrlAuthorGuidelinesLink, ProductActivated, ProductEISSN, ProductPISSN, ProductRevenueModel, ProductUrl
- **Attribute name(s)**: Product eISSN, Product pISSN, Product Revenue Model, Journal Status, Product URL, Journal URL Author Guidelines Link, Product Activated
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `PartnerJournalsGroup/PartnerJournalSaveAction.js`

### Functional description

This business action is triggered, when save button is clicked on web ui for partner products

### Functional logic

- Reads/writes attributes including: ProductEISSN, ProductPISSN, ProductRevenueModel, JournalStatus, ProductUrl, JournalUrlAuthorGuidelinesLink, ProductActivated.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Key functions**: getName(), getSimpleValue(), setSimpleValue(), setValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 132
