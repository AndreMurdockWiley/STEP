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

Journal Future Print Status Effect Date Validate Send. It primarily works with attribute(s): JournalFutureDigitalStatusEffectDate, JournalMediaFuturePrintStatusEffectDate. If validation fails, the user sees an error message such as: "The Effective date must be Future date or Greater than Today's date.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalMediaFuturePrintStatusEffectDate, JournalFutureDigitalStatusEffectDate.

### Errors

- **Configured error**: The Effective date must be Future date or Greater than Today's date.
- **In-script message**: <b>The Effective date must be Future date or Greater than Today's date.</b>

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaUpsertGroup/JournalFuturePrintDateValidate_Send.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: Library: GenericFunctions (alias: genericFunctions)
- **Key functions**: getToday()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 177
