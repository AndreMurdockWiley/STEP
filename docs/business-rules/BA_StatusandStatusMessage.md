## BA_StatusandStatusMessage

- **Rule type**: Action
- **Setup group**: Integrations
- **Business area**: Integration
- **Data model object valid to**: Product
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: Status, StatusMessage, LastUpdatedNew
- **Attribute name(s)**: Status, Status Message, Last Updated New
- **Status**: Active
- **Source file(s)**: `Integrations/BA_StatusandStatusMessage.js`

### Functional description

Sets integration status and timestamp for issues being sent to downstream systems. It primarily works with attribute(s): Status, StatusMessage, LastUpdatedNew. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Checks if object type is JournalDigitalIssues or JournalPrintIssues. Sets Status='Success', StatusMessage='Send to Downstream System'. If LastUpdatedNew is null, sets it to current timestamp in 'yyyy-MM-dd HH:mm:ss' format.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getObjectType(), getValue(), setSimpleValue(), SimpleDateFormat.format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 112, 117
