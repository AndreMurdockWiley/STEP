## BC_TrueForSoftDelete

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: JournalHistoryProducts
- **Source file(s)**: `Conditions/BC_TrueForSoftDelete.js`

### Functional description

Validates that "SoftDelete" = "Yes". It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Validate: "SoftDelete" = "Yes".
- Reads/writes attributes including: SoftDelete.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 229
