## Automatic Pub Year Creation (OLD)

- **Rule type**: Business Action
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalFinanceProductType, JournalMediaCode, ProductPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/Automatic Pub Year Creation (OLD).js`

### Functional description

Automatic Pub Year Creation (OLD). It primarily works with attribute(s): JournalFinanceProductType, JournalMediaCode, ProductPublicationYear.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalFinanceProductType" == "Rolling", apply the corresponding branch logic.
- If "JournalFinanceProductType" == "Calendar", apply the corresponding branch logic.
- Reads/writes attributes including: ProductPublicationYear, JournalMediaCode, JournalFinanceProductType.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearUpsertGroup/Automatic Pub Year Creation (OLD).js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 380
