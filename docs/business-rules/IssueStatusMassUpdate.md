## IssueStatusMassUpdate

- **Rule type**: Business Action
- **Setup group**: IssuesUpsertGroup
- **Business area**: IssuesUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: IssueStatus
- **Attribute name(s)**: Issue Status
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdate.js`

### Functional description

Issue Status Mass Update

### Functional logic

- Reads/writes attributes including: IssueStatus.

### Errors

- **Configured error**: Issue status successfully updated! | Issue(s) successfully updated.

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: Library: Group Issue Functions (alias: link)
- **Key functions**: createAndUpdateGroupIssues()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 179
