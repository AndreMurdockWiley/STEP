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

Sets integration status and timestamp for issues being sent to downstream systems

### Functional logic

- Reads/writes attributes including: Status, StatusMessage, LastUpdatedNew.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getObjectType(), getValue(), setSimpleValue(), SimpleDateFormat.format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 112, 117
