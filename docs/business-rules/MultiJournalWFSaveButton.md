## MultiJournalWFSaveButton

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `PackageGroup/MultiJournalWFSaveButton.js`

### Functional description

This business action supports the Multi Journal workflow save interaction in STEP Web UI.  
When the action is executed, it provides immediate user feedback by showing an informational confirmation message: **"MultiJournal Successfully Created!"**.

The current implementation is a notification-only action: it does not perform field validation, data updates, or workflow state changes.

### Functional logic

1. The rule is invoked as a Web UI business action with access to the current UI context (`UI`) and current object (`NODE`).
2. It reads the current UI selection using `UI.getSelection()` (context retrieval only; the selection is not used further in this version).
3. It displays an information alert to the end user: **"MultiJournal Successfully Created!"** via `UI.showAlert("INFO", ...)`.
4. No conditional branches are implemented; the same alert is shown whenever the action runs.
5. No configured error path, exception handling, or persistence logic is present in the script.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/MultiJournalWFSaveButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: UI.showAlert()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 40
