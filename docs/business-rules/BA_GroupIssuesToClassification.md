## BA_GroupIssuesToClassification

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Status**: Active
- **Source file(s)**: `Actions/BA_GroupIssuesToClassification.js`

### Functional description

BA_GroupIssuesToClassification

### Functional logic

—

### Errors

—

### Usage / trigger

- **Configuration**: Group_Issues_Data_Extract_Kafka
  - **Task/Event**: —
- **Configuration**: Group_Issues_Data_Extract
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: Library: Group Issue Functions (alias: link)
- **Key functions**: setGroupIssueState(), createAndUpdateGroupIssues()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 173
