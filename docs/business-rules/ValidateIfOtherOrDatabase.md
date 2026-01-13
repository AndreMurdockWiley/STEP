## ValidateIfOtherOrDatabase

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType
- **Source file(s)**: `Conditions/ValidateIfOtherOrDatabase.js`

### Functional description

Validate If Other or Database

### Functional logic

- If "CollectionType" == "Other Database", continue; otherwise error.
- If "CollectionType" == "Database Model Collections", continue; otherwise error.
- Reads/writes attributes including: CollectionType.

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
- **Row(s) (0-based in data block)**: 268
