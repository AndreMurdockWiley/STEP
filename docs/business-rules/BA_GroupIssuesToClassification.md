## BA_GroupIssuesToClassification

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Status**: Active
- **Source file(s)**: `Actions/BA_GroupIssuesToClassification.js`

### Functional description

BA_GroupIssuesToClassification. It is triggered from: Group_Issues_Data_Extract_Kafka.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

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
