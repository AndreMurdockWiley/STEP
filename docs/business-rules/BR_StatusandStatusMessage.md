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

BR_StatusandStatusMessage. It primarily works with attribute(s): LastUpdatedNew, Status, StatusMessage.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: Status, StatusMessage, LastUpdatedNew.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Integrations/BR_StatusandStatusMessage.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getObjectType, getValue, setSimpleValue, getSimpleValue, SimpleDateFormat, format

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 141
