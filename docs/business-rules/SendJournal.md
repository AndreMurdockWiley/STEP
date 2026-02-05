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

ResendJournalFromSearch lets a user resend selected journals to SAP from the UI. For each selected journal it checks the Product Activated attribute, approves the journal, and republishes it to the configured outbound integration endpoints. At the end, it shows a single acknowledgement alert summarizing which journals were resent and which were skipped because they are not active.

### Functional logic

1. Read the current UI selection (journals chosen in the search results).
2. For each selected journal:
   - If Product Activated is "Activated", approve the journal and republish it to:
     - Journal_Data_Extract_Kafka
     - Journal_Data_Extract
     - Journal_Data_Extract_Kafka_Testing
   - Otherwise, add the journal to the "not resent" list.
3. Display an acknowledgement alert listing journals resent successfully and journals not resent due to inactive status.

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
