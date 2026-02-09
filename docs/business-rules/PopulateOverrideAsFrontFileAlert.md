## PopulateOverrideAsFrontFileAlert

- **Rule type**: Business Action
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalHistoryProducts
- **Attribute ID(s)**: JournalHistoryOverrideasFrontfile
- **Source file(s)**: `JournalHistoryGroup/PopulateOverrideAsFrontFileAlert.js`

### Functional description

Normalizes the "Override as Frontfile" flag on Journal History products to a consistent Y/N value and provides immediate user feedback. When the action runs, it validates the entered value (case-insensitive) and standardizes it to uppercase when valid. If the value is invalid, the user is warned; otherwise, the user receives a confirmation that the journal history was saved.

### Functional logic

- Reads the JournalHistoryOverrideasFrontfile attribute from the current JournalHistoryProducts record.
- If the value is provided, validates it against Y/y or N/n:
  - Y/y is normalized to "Y".
  - N/n is normalized to "N".
  - Any other value is treated as invalid.
- If the value is blank or valid, shows an acknowledgment alert: "Journal History Saved!".
- If the value is invalid, shows a warning alert: "Override as Frontfile should be either 'Y' or 'N' or 'Blank'".

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalHistoryGroup/PopulateOverrideAsFrontFileAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 327
