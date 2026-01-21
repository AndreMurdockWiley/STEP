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

Validates that "ProductMediaType" = "Both". It primarily works with attribute(s): JournalMMPackageID. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalMMPackageID.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: ERROR DURRING LINKING:

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: —
  - **Task/Event**: Precondition: ProductMediaType = Both

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: Reference linking with precondition

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 29
