## AutoSetIssueRunDate_Event

- **Rule type**: Business Action
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IssueJpcmsId, IssueRunDate, IssueStatus, JournalGroupCode, ProductOriginalPublicationDate, ProductRevisedPublicationDate
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/AutoSetIssueRunDate_Event.js`

### Functional description

Automatic Set Issue Run Date (EventProcessor)

### Functional logic

- Reads/writes attributes including: JournalGroupCode, IssueJpcmsId, IssueRunDate, ProductOriginalPublicationDate, ProductRevisedPublicationDate, IssueStatus.

### Errors

—

### Usage / trigger

- **Configuration**: Event Processor: "AutoSetIssueRunDate_Event"
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 379
