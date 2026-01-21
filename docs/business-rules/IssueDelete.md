## IssueDelete

- **Rule type**: Business Action
- **Business area**: IssuesDeleteGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: C_IssueDeletedDate, C_IssueState, C_LastUpdated, C_MessageStatus, IssueState
- **Source file(s)**: `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`

### Functional description

Issue Delete. It primarily works with attribute(s): C_IssueDeletedDate, C_IssueState, C_LastUpdated, C_MessageStatus, IssueState. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: IssueState, C_IssueState, C_MessageStatus, C_LastUpdated, C_IssueDeletedDate.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: can't be deleted

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/IssuesDeleteGroup/IssueDelete.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 319
