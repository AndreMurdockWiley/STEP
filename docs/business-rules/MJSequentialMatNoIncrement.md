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

MJ Sequential Mat No Increment. It primarily works with attribute(s): ProductSAPMaterialNumber.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Calls: journalPackageLibrary.sequentialMatNoIncrement.
- Reads/writes attributes including: ProductSAPMaterialNumber.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/MJSequentialMatNoIncrement.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: JournalPackageFunctions (journalPackageLibrary)
- **Key functions**: sequentialMatNoIncrement(), getProductByID(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 77
