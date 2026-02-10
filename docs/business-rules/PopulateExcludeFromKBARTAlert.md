## PopulateExcludeFromKBARTAlert

- **Rule type**: Business Action
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalHistoryProducts
- **Attribute ID(s)**: JournalHistoryExcludefromKbart
- **Source file(s)**: `JournalHistoryGroup/PopulateExcludeFromKBARTAlert.js`

### Functional description

This business action standardizes and validates the **Exclude from KBART** indicator on Journal History records (`JournalHistoryExcludefromKbart`). It ensures that valid user input is stored consistently as uppercase `Y` or `N`, while allowing the field to remain blank when no selection is intended. If a user enters any non-blank value other than `Y`/`N`, the rule raises a warning in the UI so the value can be corrected.

### Functional logic

- Reads `JournalHistoryExcludefromKbart` from the current `JournalHistoryProducts` object.
- If the value is `y` or `Y`, writes back `Y`.
- If the value is `n` or `N`, writes back `N`.
- If the value is blank, no update is made and no warning is shown.
- If the value is any other non-blank input, the rule displays a warning: **"Exclude from KBART should be either 'Y' or 'N' or 'Blank'"**.
- The rule uses STEP UI context (`UI.showAlert`) and does not define a blocking error/exception path.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalHistoryGroup/PopulateExcludeFromKBARTAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 326
