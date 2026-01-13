## BA_TriggerECJournals

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Actions/BA_TriggerECJournals.js`

### Functional description

Trigger Editorial Contacts Journals. It is triggered from: Journal_Data_Extract (Republish event).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

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
