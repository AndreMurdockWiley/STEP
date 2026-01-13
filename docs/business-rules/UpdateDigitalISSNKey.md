## UpdateDigitalISSNKey

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: JournalDigitalMedia
- **Product type(s) valid to**: JournalDigitalMedia
- **Attribute ID(s)**: JournalTrueStatus, ProductMediaType
- **Attribute name(s)**: Product ISSN, Journal True Status, Product Media Type
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js`

### Functional description

Update Digital ISSN Key

### Functional logic

- Reads/writes attributes including: JournalTrueStatus, ProductMediaType.

### Errors

- **Configured error**: ISSN authentication failed (returned from authentication function)

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: issnAuthentication, setValueToKeyAttribute, getBusinessActionByID, execute, addError

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 188
