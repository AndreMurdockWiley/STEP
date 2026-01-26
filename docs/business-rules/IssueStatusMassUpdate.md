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

Issue Status Mass Update. It primarily works with attribute(s): IssueStatus. If validation fails, the user sees an error message such as: "Issue status successfully updated! | Issue(s) successfully updated.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: IssueStatus.

### Errors

- **Configured error**: Issue status successfully updated! | Issue(s) successfully updated.

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdate.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: Library: Group Issue Functions (alias: link)
- **Key functions**: createAndUpdateGroupIssues()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 179
