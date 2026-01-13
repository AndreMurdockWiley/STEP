## BA_TAEligibility_Derivation

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalMediaCode, ProductMediaType, ProductStatus
- **Attribute name(s)**: Journal TA Eligible Current, Journal TA Eligibility Override, Journal True Status, Journal TA Eligible Future, Journal In Current Database Model, Journal In Future Database Model, Journal TA Type, Journal Owner, Product Status, Product Type, Journal Editorial Stage, Product Revenue Model
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/BA_TAEligibility_Derivation.js`

### Functional description

BA_TAEligibility_Derivation. It primarily works with attribute(s): JournalMediaCode, ProductMediaType, ProductStatus.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductMediaType, ProductStatus, JournalMediaCode.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/BA_TAEligibility_Derivation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: getValue(), getSimpleValue(), getLOVValue(), setLOVValueByID(), getChildren()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 128
