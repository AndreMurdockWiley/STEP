## OtherProductDateConversion

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ProductContentEndDate, ProductContentStartDate, ProductPublicationDate
- **Attribute name(s)**: Product Publication Date, Product Content Start Date, Product Content End Date
- **Status**: Active
- **Source file(s)**: `Actions/OtherProductDateConversion.js`

### Functional description

Other Product Date Conversion

### Functional logic

- Reads/writes attributes including: ProductPublicationDate, ProductContentStartDate, ProductContentEndDate.

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getAttributeGroupByID(), substring(), SimpleDateFormat.parse(), SimpleDateFormat.format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 48
