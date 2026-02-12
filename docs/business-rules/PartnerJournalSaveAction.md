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

This business action runs when a Partner Journal record is saved in the STEP UI. Its purpose is to maintain the journal activation state (`ProductActivated`) based on whether key onboarding/completeness fields are populated.

On save, the rule checks that the journal has a title, at least one ISSN (either eISSN or pISSN), a revenue model, a journal status, a homepage URL, and an author-guidelines URL. When all required information is present, the journal is marked as **Activated**. If any required information is missing, the journal remains **In Progress**.

The action updates status only; it does not raise a blocking validation error.

### Functional logic

- On save, read current values for:
  - record title (`node.getName()`)
  - `ProductEISSN`
  - `ProductPISSN`
  - `ProductRevenueModel`
  - `JournalStatus`
  - `ProductUrl`
  - `JournalUrlAuthorGuidelinesLink`
- Evaluate completeness criteria:
  - title is not empty
  - at least one ISSN is present (`ProductEISSN` **or** `ProductPISSN`)
  - revenue model is not empty
  - journal status is not empty
  - homepage URL is not empty
  - author-guidelines URL is not empty
- If all criteria are met, set `ProductActivated` to `Activated`.
- Otherwise, set `ProductActivated` to `In Progress`.

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
