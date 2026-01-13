## JournalHistoryISSNUpdate

- **Rule type**: Business Action
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalGroupCode, JournalHistoryAccessType, JournalHistoryCopyright, JournalHistoryISSNOnline, JournalHistoryISSNPrint, JournalHistoryIdentifiersDoi, JournalHistoryJournalCode, JournalHistoryPrimaryUrl, JournalHistorySequenceNumber, JournalHistoryWolCode, JournalMediaCode, ProductAbbreviatedTitle, ProductCopyrightLine, ProductDoi, ProductIssn, ProductRenewalSubscriptionType, ProductShortTitle, ProductSortTitle, ProductTitle, ProductUrl
- **Source file(s)**: `JournalHistoryGroup/JournalHistoryISSNUpdate.js`

### Functional description

Journal History ISSN Update

### Functional logic

- If "ProductRenewalSubscriptionType" == "Calendar Year", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: JournalGroupCode, ProductRenewalSubscriptionType, JournalHistoryAccessType, JournalHistorySequenceNumber, ProductTitle, ProductShortTitle, JournalHistoryIdentifiersDoi, ProductDoi, ProductAbbreviatedTitle, ProductSortTitle.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 325
