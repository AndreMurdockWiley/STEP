## DateConversion

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalEditorialAuthorServicesEnabldDt, JournalRightsFromWhatDate, JournalStartDate, ProductContentEndDate, ProductContentStartDate
- **Attribute name(s)**: Janis Journal Start Date, Janis Journal Rights From What Date, Janis Journal Content End Date, Janis Journal Content Start Date, Journal Start Date, Journal Rights From What Date, Product Content End Date, Product Content Start Date
- **Status**: Active
- **Source file(s)**: `Actions/DateConversion.js`

### Functional description

Date Conversion

### Functional logic

- Reads/writes attributes including: JournalEditorialAuthorServicesEnabldDt, JournalStartDate, JournalRightsFromWhatDate, ProductContentEndDate, ProductContentStartDate.

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: substring(), SimpleDateFormat(), parse(), format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 174
