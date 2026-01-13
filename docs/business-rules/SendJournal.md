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

ResendJournalFromSearch. It primarily works with attribute(s): ProductActivated. It is triggered from: Journal_Data_Extract_Kafka (OutBound Integration Endpoint). If validation fails, the user sees an error message such as: "Shows alert with successfully resent journals and journals not resent due to inactive status".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

- **Configured error**: Shows alert with successfully resent journals and journals not resent due to inactive status

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

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
