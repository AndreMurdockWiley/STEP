## PopulateIssueRunDate

- **Rule type**: Business Action
- **Setup group**: IssuesGroup
- **Business area**: IssuesGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: IssueRunDate, IssueStatus, ProductOriginalPublicationDate
- **Attribute name(s)**: Product Original Publication Date, Issue Run Date, Issue Status
- **Status**: Active
- **Source file(s)**: `IssuesGroup/PopulateIssueRunDate.js`

### Functional description

PopulateIssueRunDate

### Functional logic

- Reads/writes attributes including: ProductOriginalPublicationDate, IssueRunDate, IssueStatus.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: Group Issue Functions (link)
- **Key functions**: getValue, setSimpleValue, setLOVValueByID, approve

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 186
