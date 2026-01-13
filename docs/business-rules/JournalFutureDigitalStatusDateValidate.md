## JournalFutureDigitalStatusDateValidate

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalFutureDigitalStatusEffectDate, JournalMediaFutureDigitalStatus, ProductStatus, ProductTitle
- **Attribute name(s)**: Journal Future Digital Status Effect Date, Product Title, Product Status, Journal Media Future Digital Status
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/JournalFutureDigitalStatusDateValidate.js`

### Functional description

Journal Future Digital Status Effect Date Validate

### Functional logic

- Reads/writes attributes including: JournalFutureDigitalStatusEffectDate, ProductTitle, ProductStatus, JournalMediaFutureDigitalStatus.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getValue, setSimpleValue, getToday, sendEmail

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 181
