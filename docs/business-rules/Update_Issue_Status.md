## Update_Issue_Status

- **Rule type**: Business Action
- **Setup group**: IssuesGroup
- **Business area**: IssuesGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: IssueRunDate, IssueStatus
- **Attribute name(s)**: Issue Run Date, Issue Status
- **Status**: Active
- **Source file(s)**: `IssuesGroup/Update_Issue_Status.js`

### Functional description

Update Issue Status

### Functional logic

- Reads/writes attributes including: IssueRunDate, IssueStatus.

### Errors

—

### Usage / trigger

- **Configuration**: Group_Issues_Data_Extract_Kafka
  - **Task/Event**: —
- **Configuration**: Group_Issues_Data_Extract
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: Group Issue Functions (link)
- **Key functions**: getValue, getSimpleValue, setLOVValueByID, setGroupIssueState, createAndUpdateGroupIssues, approve

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 185
