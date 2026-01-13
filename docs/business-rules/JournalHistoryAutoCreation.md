## JournalHistoryAutoCreation

- **Rule type**: Business Action
- **Setup group**: JournalHistoryGroup
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: HistoryOrigin, JournalGroupCode, JournalHistoryAccessType, JournalHistoryCopyright, JournalHistoryISSNOnline, JournalHistoryISSNPrint, JournalHistoryIdentifiersDoi, JournalHistoryJournalCode, JournalHistoryPrimaryUrl, JournalHistorySequenceNumber, JournalHistoryWolCode, JournalMediaCode, ProductAbbreviatedTitle, ProductCopyrightLine, ProductDoi, ProductIssn, ProductRenewalSubscriptionType, ProductShortTitle, ProductSortTitle, ProductTitle, ProductUrl, SoftDelete
- **Attribute name(s)**: Journal Media Code, Journal Group Code, Product Renewal Subscription Type, Journal History Access Type, Journal History ISSN Print, Product Issn, Journal History ISSN Online, Product Title, Product Short Title, Product Doi, Product Abbreviated Title, Product Sort Title, Product Copyright Line, Product Url, Journal History Sequence Number, History Origin, Soft Delete
- **Version**: 1.1
- **Status**: Active
- **Source file(s)**: `JournalHistoryGroup/JournalHistoryAutoCreation.js`

### Functional description

Journal History Auto Creation. It primarily works with attribute(s): HistoryOrigin, JournalGroupCode, JournalHistoryAccessType, JournalHistoryCopyright, JournalHistoryISSNOnline, JournalHistoryISSNPrint, JournalHistoryIdentifiersDoi, JournalHistoryJournalCode, JournalHistoryPrimaryUrl, JournalHistorySequenceNumber, JournalHistoryWolCode, JournalMediaCode, ProductAbbreviatedTitle, ProductCopyrightLine, ProductDoi, ProductIssn, ProductRenewalSubscriptionType, ProductShortTitle, ProductSortTitle, ProductTitle, ProductUrl, SoftDelete. If validation fails, the user sees an error message such as: "A Reference of type 'Journal_History_Reference' already exists. Only updating the existing Journal History.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "ProductRenewalSubscriptionType" == "Calendar Year", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Calendar Year", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: JournalMediaCode, JournalGroupCode, ProductRenewalSubscriptionType, JournalHistoryAccessType, JournalHistoryISSNPrint, ProductIssn, JournalHistoryISSNOnline, ProductTitle, HistoryOrigin, ProductShortTitle.

### Errors

- **In-script message**: A Reference of type 'Journal_History_Reference' already exists. Only updating the existing Journal History.

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalHistoryGroup/JournalHistoryAutoCreation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: AutoClassificationJournalHistory
- **Key functions**: Journal history creation/update with reference management

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 41
