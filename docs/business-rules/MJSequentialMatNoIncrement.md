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

This business action automatically assigns the next sequential SAP Material Number to the current **MultiJournal** record. It uses a dedicated sequence product (`ProductSequentialMatNo`) as the source/counter and writes the generated value into **ProductSAPMaterialNumber**. The goal is to ensure consistent, system-driven numbering instead of manual entry.

### Functional logic

- Retrieves the sequence control product by ID: `ProductSequentialMatNo` (via Product Home).
- Calls `journalPackageLibrary.sequentialMatNoIncrement(...)` to get the next material number in sequence.
- Updates the current object (`NODE`) attribute `ProductSAPMaterialNumber` with the returned value using `setSimpleValue(...)`.
- The script contains no conditional branching or explicit validation/error handling; sequencing behavior is delegated to the shared library function.

### Errors

- **Configured error**: N/A (Business Action).

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
