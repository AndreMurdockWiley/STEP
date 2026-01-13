## BA_TriggerECJournals

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Actions/BA_TriggerECJournals.js`

### Functional description

Trigger Editorial Contacts Journals

### Functional logic

—

### Errors

—

### Usage / trigger

- **Configuration**: Journal_Data_Extract
  - **Task/Event**: Republish event
- **Configuration**: Journal_Data_Extract_Kafka
  - **Task/Event**: Republish event
- **Configuration**: Journal_Data_Extract_Kafka_Testing
  - **Task/Event**: Republish event

### Dependencies / key functions

- **Key functions**: getSelection(), republish()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 122
