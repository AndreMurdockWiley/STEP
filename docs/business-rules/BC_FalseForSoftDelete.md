## BC_FalseForSoftDelete

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: JournalHistoryProducts
- **Source file(s)**: `Conditions/BC_FalseForSoftDelete.js`

### Functional description

Validates that "SoftDelete" = "No".

### Functional logic

- Validate: "SoftDelete" = "No".
- Reads/writes attributes including: SoftDelete.

### Errors

—

### Usage / trigger

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 226
