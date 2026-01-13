## BC_DisplayHistoryTransition

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: JournalHistoryProducts, Journal
- **Attribute ID(s)**: HistoryOrigin, Journal_History_Relation
- **Source file(s)**: `Conditions/BC_DisplayHistoryTransition.js`

### Functional description

BC_DisplayHistoryTransition

### Functional logic

- If "Journal_History_Relation" == "Regular Workflow", apply the corresponding branch logic.
- If "Journal_History_Relation" == "Regular Workflow", apply the corresponding branch logic.
- Reads/writes attributes including: HistoryOrigin, Journal_History_Relation.

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
- **Row(s) (0-based in data block)**: 225
