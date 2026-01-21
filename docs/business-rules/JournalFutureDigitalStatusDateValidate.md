## JournalFutureDigitalStatusDateValidate

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalFutureDigitalStatusEffectDate, JournalMediaFutureDigitalStatus, ProductStatus, ProductTitle
- **Attribute name(s)**: Journal Future Digital Status Effect Date, Product Title, Product Status, Journal Media Future Digital Status
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/JournalFutureDigitalStatusDateValidate.js`

### Functional description

Journal Future Digital Status Effect Date Validate. It primarily works with attribute(s): JournalFutureDigitalStatusEffectDate, JournalMediaFutureDigitalStatus, ProductStatus, ProductTitle. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalFutureDigitalStatusEffectDate, ProductTitle, ProductStatus, JournalMediaFutureDigitalStatus.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaUpsertGroup/JournalFutureDigitalStatusDateValidate.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getValue, setSimpleValue, getToday, sendEmail

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 181
