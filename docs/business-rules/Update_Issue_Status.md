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

Update Issue Status. It primarily works with attribute(s): IssueRunDate, IssueStatus. It is triggered from: Group_Issues_Data_Extract_Kafka. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: IssueRunDate, IssueStatus.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

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
