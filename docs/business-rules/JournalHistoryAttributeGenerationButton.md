## JournalHistoryAttributeGenerationButton

- **Rule type**: Business Action
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalHistoryProducts
- **Attribute ID(s)**: JournalGroupCode, JournalHistoryAccessType, JournalHistoryJournalCode, JournalHistoryWolCode, ProductAbbreviatedTitle, ProductRenewalSubscriptionType, ProductShortTitle, ProductSortTitle, ProductTitle
- **Source file(s)**: `JournalHistoryGroup/JournalHistoryAttributeGenerationButton.js`

### Functional description

Journal History Attribute Generation Button

### Functional logic

- If "ProductRenewalSubscriptionType" == "Calendar Year", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: ProductTitle, ProductShortTitle, ProductAbbreviatedTitle, ProductSortTitle, JournalGroupCode, ProductRenewalSubscriptionType, JournalHistoryJournalCode, JournalHistoryWolCode, JournalHistoryAccessType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 324
