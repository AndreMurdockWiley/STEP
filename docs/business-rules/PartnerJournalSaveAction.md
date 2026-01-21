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

This business action is triggered, when save button is clicked on web ui for partner products. It primarily works with attribute(s): JournalStatus, JournalUrlAuthorGuidelinesLink, ProductActivated, ProductEISSN, ProductPISSN, ProductRevenueModel, ProductUrl. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductEISSN, ProductPISSN, ProductRevenueModel, JournalStatus, ProductUrl, JournalUrlAuthorGuidelinesLink, ProductActivated.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PartnerJournalsGroup/PartnerJournalSaveAction.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: getName(), getSimpleValue(), setSimpleValue(), setValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 132
