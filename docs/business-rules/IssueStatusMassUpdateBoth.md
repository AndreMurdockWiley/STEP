## IssueStatusMassUpdateBoth

- **Rule type**: Business Action
- **Setup group**: IssuesUpsertGroup
- **Business area**: IssuesUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: JournalPrintIssues, JournalDigitalIssues
- **Attribute ID(s)**: IssueStatus, JournalMediaCode
- **Attribute name(s)**: Issue Status, Replicate Other Media
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdateBoth.js`

### Functional description

Issue Status Mass Update Both

### Functional logic

- Reads/writes attributes including: IssueStatus, JournalMediaCode.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: Group Issue Functions (link)
- **Key functions**: Mass status update with media replication

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 18
