## MJSequentialMatNoIncrement

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: MultiJournal
- **Product type(s) valid to**: MultiJournal
- **Attribute ID(s)**: ProductSAPMaterialNumber
- **Attribute name(s)**: Product SAP Material Number
- **Status**: Active
- **Source file(s)**: `PackageGroup/MJSequentialMatNoIncrement.js`

### Functional description

MJ Sequential Mat No Increment

### Functional logic

- Calls: journalPackageLibrary.sequentialMatNoIncrement.
- Reads/writes attributes including: ProductSAPMaterialNumber.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: JournalPackageFunctions (journalPackageLibrary)
- **Key functions**: sequentialMatNoIncrement(), getProductByID(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 77
