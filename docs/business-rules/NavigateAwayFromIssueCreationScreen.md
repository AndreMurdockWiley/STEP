## NavigateAwayFromIssueCreationScreen

- **Rule type**: Business Action
- **Setup group**: IssuesNavegationGroup
- **Business area**: IssuesNavegationGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesNavegationGroup/NavigateAwayFromIssueCreationScreen.js`

### Functional description

Cancels the issue-creation flow and returns the user to the appropriate publication-year screen. When executed, the rule displays an informational alert ("Volume Creation Process cancelled.") and then routes the user back based on whether the current node is a print or digital publication year.

### Functional logic

The rule executes a simple UI action sequence:

- Show an INFO alert to confirm cancellation: `Volume Creation Process cancelled.`
- Read the current object's type via `NODE.getObjectType().getID()`.
- If object type is `JournalPrintPublicationYear`, navigate to `PrintPublicationYearScreen` with the current node context.
- Else, if object type is `JournalDigitalPublicationYear`, navigate to `DigitalPublicationYearScreen` with the current node context.
- No additional validation or data updates are performed by this rule.

### Errors

- **Configured error**: INFO: Volume Creation Process cancelled.

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/IssuesNavegationGroup/NavigateAwayFromIssueCreationScreen.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: showAlert, navigate, getObjectType

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 163
