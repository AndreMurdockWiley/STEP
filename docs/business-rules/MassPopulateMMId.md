## MassPopulateMMId

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalMMPackageID
- **Attribute name(s)**: Journal MM Package ID
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/MassPopulateMMId.js`

### Functional description

Mass Populate MM Id

### Functional logic

- Reads/writes attributes including: JournalMMPackageID.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: queryReferencedBy, queryReferences, createReference

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 157
