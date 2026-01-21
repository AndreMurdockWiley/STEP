## AutoSetIssueRunDate_Event

- **Rule type**: Business Action
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IssueJpcmsId, IssueRunDate, IssueStatus, JournalGroupCode, ProductOriginalPublicationDate, ProductRevisedPublicationDate
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/AutoSetIssueRunDate_Event.js`

### Functional description

Automatic Set Issue Run Date (EventProcessor). It primarily works with attribute(s): IssueJpcmsId, IssueRunDate, IssueStatus, JournalGroupCode, ProductOriginalPublicationDate, ProductRevisedPublicationDate. It is triggered from: Event Processor: "AutoSetIssueRunDate_Event". If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalGroupCode, IssueJpcmsId, IssueRunDate, ProductOriginalPublicationDate, ProductRevisedPublicationDate, IssueStatus.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Event Processor: "AutoSetIssueRunDate_Event"
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 379
