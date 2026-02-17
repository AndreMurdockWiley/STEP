## NavigateAwayFromIssueCreationScreen

- **Rule type**: Business Action
- **Setup group**: IssuesNavegationGroup
- **Business area**: IssuesNavegationGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesNavegationGroup/NavigateAwayFromIssueCreationScreen.js`

### Functional description

This business action supports exiting the Issue Creation screen. When triggered, it notifies the user that the volume creation flow was cancelled and routes the user back to the appropriate publication-year screen based on the current object's type.

### Functional logic

The rule executes the following UI actions in sequence:

1. Shows an informational alert to the user: **"Volume Creation Process cancelled."**
2. Reads the current object's type ID (`NODE.getObjectType().getID()`).
3. If the object type is `JournalPrintPublicationYear`, navigates to `PrintPublicationYearScreen` with the current node context.
4. Else if the object type is `JournalDigitalPublicationYear`, navigates to `DigitalPublicationYearScreen` with the current node context.
5. For any other object type, no additional navigation is defined in this script.

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
