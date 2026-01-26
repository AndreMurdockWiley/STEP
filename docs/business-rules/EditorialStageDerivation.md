## EditorialStageDerivation

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: JournalPrintMedia, Journal, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, Journal, JournalDigitalMedia
- **Attribute ID(s)**: JournalAcceptingSubmission, JournalEditorialStage, JournalMediaCode, ProductMediaType, ProductStatus
- **Attribute name(s)**: Journal Accepting Submission, Product Status, Journal Editorial Stage, Product Media Type
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/EditorialStageDerivation.js`

### Functional description

Editorial Stage Derivation. It primarily works with attribute(s): JournalAcceptingSubmission, JournalEditorialStage, JournalMediaCode, ProductMediaType, ProductStatus. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductStatus, JournalEditorialStage, JournalAcceptingSubmission, ProductMediaType, JournalMediaCode.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/EditorialStageDerivation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getChildren(), getValue(), setSimpleValue(), getListOfValuesValueByID()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 62
