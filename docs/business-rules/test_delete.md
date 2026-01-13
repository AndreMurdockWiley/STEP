## test_delete

- **Rule type**: Business Action
- **Setup group**: IssuesDeleteGroup
- **Business area**: IssuesDeleteGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: JournalPrintIssues, JournalDigitalIssues
- **Attribute ID(s)**: JPCMS, OriginalPublicationDate
- **Attribute name(s)**: JPCMS, Original Publication Date
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesDeleteGroup/test_delete.js`

### Functional description

test_delete

### Functional logic

- Calls: issueLibrary.issueDeleteCheck, issueLibrary.deleteIssue.

### Errors

- **Configured error**: The issue has JPCMS and Original Publication Date populated
- **In-script message**: can't be deleted

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: IssueFunctions (issueLibrary)
- **Key functions**: issueDeleteCheck(), deleteIssue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 20
