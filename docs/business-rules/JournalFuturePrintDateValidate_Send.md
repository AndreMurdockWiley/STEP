## JournalFuturePrintDateValidate_Send

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalFutureDigitalStatusEffectDate, JournalMediaFuturePrintStatusEffectDate
- **Attribute name(s)**: Journal Media Future Print Status Effect Date, Journal Future Digital Status Effect Date
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/JournalFuturePrintDateValidate_Send.js`

### Functional description

Journal Future Print Status Effect Date Validate Send

### Functional logic

- Reads/writes attributes including: JournalMediaFuturePrintStatusEffectDate, JournalFutureDigitalStatusEffectDate.

### Errors

- **Configured error**: The Effective date must be Future date or Greater than Today's date.
- **In-script message**: <b>The Effective date must be Future date or Greater than Today's date.</b>

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: Library: GenericFunctions (alias: genericFunctions)
- **Key functions**: getToday()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 177
