## JournalHistoryAttributeGenerationButton

- **Rule type**: Business Action
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalHistoryProducts
- **Attribute ID(s)**: JournalGroupCode, JournalHistoryAccessType, JournalHistoryJournalCode, JournalHistoryWolCode, ProductAbbreviatedTitle, ProductRenewalSubscriptionType, ProductShortTitle, ProductSortTitle, ProductTitle
- **Source file(s)**: `JournalHistoryGroup/JournalHistoryAttributeGenerationButton.js`

### Functional description

Journal History Attribute Generation Button. It primarily works with attribute(s): JournalGroupCode, JournalHistoryAccessType, JournalHistoryJournalCode, JournalHistoryWolCode, ProductAbbreviatedTitle, ProductRenewalSubscriptionType, ProductShortTitle, ProductSortTitle, ProductTitle.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "ProductRenewalSubscriptionType" == "Calendar Year", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: ProductTitle, ProductShortTitle, ProductAbbreviatedTitle, ProductSortTitle, JournalGroupCode, ProductRenewalSubscriptionType, JournalHistoryJournalCode, JournalHistoryWolCode, JournalHistoryAccessType.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalHistoryGroup/JournalHistoryAttributeGenerationButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 324
