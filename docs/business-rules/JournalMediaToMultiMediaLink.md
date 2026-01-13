## JournalMediaToMultiMediaLink

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalMMPackageID
- **Attribute name(s)**: Journal MM Package ID, Product Media Type
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `PackageGroup/JournalMediaToMultiMediaLink.js`

### Functional description

Validates that "ProductMediaType" = "Both".

### Functional logic

- Validate: "ProductMediaType" = "Both".
- Reads/writes attributes including: JournalMMPackageID, ProductMediaType.

### Errors

- **In-script message**: ERROR DURRING LINKING:

### Usage / trigger

- **Configuration**: —
  - **Task/Event**: Precondition: ProductMediaType = Both

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: Reference linking with precondition

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 29
