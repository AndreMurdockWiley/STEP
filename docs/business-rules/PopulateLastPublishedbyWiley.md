## PopulateLastPublishedbyWiley

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalLastPubYear, LastPublishedbyWiley, ProductStatus
- **Attribute name(s)**: Product Status, Journal Last Pub Year, Last Published by Wiley
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateLastPublishedbyWiley.js`

### Functional description

Populate Last Published by Wiley

### Functional logic

- Reads/writes attributes including: ProductStatus, JournalLastPubYear, LastPublishedbyWiley.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: updateLastPubYearByWileyForChild, getParent, getChildren, getValue, setSimpleValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 191
