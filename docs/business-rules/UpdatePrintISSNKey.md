## UpdatePrintISSNKey

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: JournalPrintMedia
- **Product type(s) valid to**: JournalPrintMedia
- **Attribute ID(s)**: JournalTrueStatus, ProductMediaType
- **Attribute name(s)**: Product ISSN, Journal True Status, Product Media Type
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/UpdatePrintISSNKey.js`

### Functional description

Update Print ISSN Key

### Functional logic

- Reads/writes attributes including: JournalTrueStatus, ProductMediaType.

### Errors

- **Configured error**: Authentication error message returned from genericFunctions.issnAuthentication

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: issnAuthentication, setValueToKeyAttribute

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 151
