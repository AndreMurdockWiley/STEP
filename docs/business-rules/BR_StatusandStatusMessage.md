## BR_StatusandStatusMessage

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues (AllObjectTypesValid="true")
- **Attribute ID(s)**: LastUpdatedNew, Status, StatusMessage
- **Attribute name(s)**: Status, Status Message, Last Updated New
- **Status**: Active
- **Source file(s)**: `Integrations/BR_StatusandStatusMessage.js`

### Functional description

BR_StatusandStatusMessage. It primarily works with attribute(s): LastUpdatedNew, Status, StatusMessage. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: Status, StatusMessage, LastUpdatedNew.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getObjectType, getValue, setSimpleValue, getSimpleValue, SimpleDateFormat, format

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 141
