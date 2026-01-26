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

Automatically creates or updates a Journal History record and reference for a Journal (Print/Digital), keeping key identifiers and access type in sync. It primarily works with attribute(s): HistoryOrigin, JournalGroupCode, JournalHistoryAccessType, JournalHistoryCopyright, JournalHistoryISSNOnline, JournalHistoryISSNPrint, JournalHistoryIdentifiersDoi, JournalHistoryJournalCode, JournalHistoryPrimaryUrl, JournalHistorySequenceNumber, JournalHistoryWolCode, JournalMediaCode, ProductAbbreviatedTitle, ProductCopyrightLine, ProductDoi, ProductIssn, ProductRenewalSubscriptionType, ProductShortTitle, ProductSortTitle, ProductTitle, ProductUrl, SoftDelete. It is triggered from: Workflow: Journal Media workflow (completion) (Invoked by Business Action "JournalMediaComplete" (which references JournalHistoryAutoCreation).). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalMediaCode, JournalGroupCode, ProductRenewalSubscriptionType, JournalHistoryAccessType, JournalHistoryISSNPrint, ProductIssn, JournalHistoryISSNOnline, ProductTitle, HistoryOrigin, ProductShortTitle.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: A Reference of type 'Journal_History_Reference' already exists. Only updating the existing Journal History.

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Workflow: Journal Media workflow (completion)
  - **Task/Event**: Invoked by Business Action "JournalMediaComplete" (which references JournalHistoryAutoCreation).
- **Configuration**: Workflow: Journal workflow (completion)
  - **Task/Event**: Invoked by Business Action "Journals_Completed_Transition" (which references JournalHistoryAutoCreation).

### Dependencies / key functions

- **Dependencies**: AutoClassificationJournalHistory
- **Key functions**: Journal history creation/update with reference management

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 41
