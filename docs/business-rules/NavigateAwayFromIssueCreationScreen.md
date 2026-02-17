## NavigateAwayFromIssueCreationScreen

- **Rule type**: Business Action
- **Setup group**: IssuesNavegationGroup
- **Business area**: IssuesNavegationGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesNavegationGroup/NavigateAwayFromIssueCreationScreen.js`

### Functional description

This business action supports a user canceling Issue/Volume creation and returning to the appropriate parent Publication Year screen.  
When triggered, it informs the user that the creation flow was canceled and redirects them back based on whether they are working in the print or digital publication-year context.

### Functional logic

1. Display an informational alert to the user:
   - `INFO: Volume Creation Process cancelled.`
2. Read the current node object type (`NODE.getObjectType().getID()`).
3. Route the user to the matching publication-year screen:
   - If object type is `JournalPrintPublicationYear`, navigate to `PrintPublicationYearScreen`.
   - If object type is `JournalDigitalPublicationYear`, navigate to `DigitalPublicationYearScreen`.
4. No additional branch is defined for other object types in this rule.

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
