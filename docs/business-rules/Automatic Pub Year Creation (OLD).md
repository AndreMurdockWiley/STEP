## Automatic Pub Year Creation (OLD)

- **Rule type**: Business Action
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalFinanceProductType, JournalMediaCode, ProductPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/Automatic Pub Year Creation (OLD).js`

### Functional description

Automatic Pub Year Creation (OLD)

### Functional logic

- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalFinanceProductType" == "Rolling", apply the corresponding branch logic.
- If "JournalFinanceProductType" == "Calendar", apply the corresponding branch logic.
- Reads/writes attributes including: ProductPublicationYear, JournalMediaCode, JournalFinanceProductType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 380
