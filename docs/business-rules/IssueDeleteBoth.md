## IssueDeleteBoth

- **Rule type**: Business Action
- **Setup group**: IssuesDeleteGroup
- **Business area**: IssuesDeleteGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: C_IssueDeletedDate, C_IssueState, C_LastUpdated, C_MessageStatus, IssueState, JournalMediaCode
- **Attribute name(s)**: Issue State, Common Issue State, Common Message Status, Common Issue Deleted Date, Common Last Updated, Replicate Other Media
- **Version**: HAR01
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesDeleteGroup/IssueDeleteBoth.js`

### Functional description

Issue Delete Both

### Functional logic

- If "IssueState" == "Draft", apply the corresponding branch logic.
- If "C_IssueState" == "Enriched", apply the corresponding branch logic.
- If "IssueState" == "Enriched", apply the corresponding branch logic.
- Calls: issueLibrary.issueDeleteCheck, issueLibrary.deleteIssue.
- Reads/writes attributes including: JournalMediaCode, IssueState, C_IssueState, C_MessageStatus, C_LastUpdated, C_IssueDeletedDate.

### Errors

- **Configured error**: ERROR: Issue [name] can't be deleted - The issue has already been sent to SAP
- **In-script message**: can't be deleted

### Usage / trigger

- **Configuration**: Group_Issues_Data_Extract
  - **Task/Event**: OutBound Integration Endpoint - Republish on certain delete scenarios
- **Configuration**: Group_Issues_Data_Extract_Kafka
  - **Task/Event**: OutBound Integration Endpoint - Republish on certain delete scenarios

### Dependencies / key functions

- **Dependencies**: IssueFunctions (issueLibrary)
- **Key functions**: issueDeleteCheck, deleteIssue, queryForSingleObj, deleteValuesBasedOnAttributeGroup, getProductClassificationLinks, approveNode, getCurrentDate

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 162
