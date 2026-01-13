## SendJournal

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Attribute ID(s)**: ProductActivated
- **Attribute name(s)**: Product Activated
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/SendJournal.js`

### Functional description

ResendJournalFromSearch

### Functional logic

—

### Errors

- **Configured error**: Shows alert with successfully resent journals and journals not resent due to inactive status

### Usage / trigger

- **Configuration**: Journal_Data_Extract_Kafka
  - **Task/Event**: OutBound Integration Endpoint
- **Configuration**: Journal_Data_Extract
  - **Task/Event**: OutBound Integration Endpoint
- **Configuration**: Journal_Data_Extract_Kafka_Testing
  - **Task/Event**: OutBound Integration Endpoint

### Dependencies / key functions

- **Key functions**: republish, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 152
