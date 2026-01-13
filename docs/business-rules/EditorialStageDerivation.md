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

Editorial Stage Derivation

### Functional logic

- Reads/writes attributes including: ProductStatus, JournalEditorialStage, JournalAcceptingSubmission, ProductMediaType, JournalMediaCode.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getChildren(), getValue(), setSimpleValue(), getListOfValuesValueByID()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 62
