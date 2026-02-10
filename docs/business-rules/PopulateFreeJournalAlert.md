## PopulateFreeJournalAlert

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalFreeJournal
- **Attribute name(s)**: Journal Free Journal
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/PopulateFreeJournalAlert.js`

### Functional description

`PopulateFreeJournalAlert` validates and normalizes the **Journal Free Journal** flag (`JournalFreeJournal`) on Journal records.  
The rule supports three business-valid states for this field:

- `Y` (Yes)
- `N` (No)
- Blank (not populated)

To improve data consistency, lowercase inputs (`y`/`n`) are automatically converted to uppercase (`Y`/`N`).  
If a user enters any other non-blank value, the rule displays a warning message: **"Free Journal should be either 'Y' or 'N' or 'Blank'"**.

### Functional logic

The rule executes the following logic against `JournalFreeJournal`:

- Reads the current value of `JournalFreeJournal`.
- If the value is blank/null, no update is made and no warning is shown.
- If the value is `y` or `Y`, the rule writes back `Y`.
- If the value is `n` or `N`, the rule writes back `N`.
- If the value is any other non-blank text, the rule flags it as invalid and shows a UI warning:
  - `WARNING: Free Journal should be either 'Y' or 'N' or 'Blank'`

This behavior standardizes valid user input while notifying users when the value is outside the allowed set.

### Errors

- **Configured error**: WARNING: Free Journal should be either 'Y' or 'N' or 'Blank'

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/PopulateFreeJournalAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 187
