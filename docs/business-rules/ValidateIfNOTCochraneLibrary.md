## ValidateIfNOTCochraneLibrary

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfNOTCochraneLibrary.js`

### Functional description

Validate If NOT Cochrane Library

### Functional logic

- If "OtherProductCollectionSubType" == "Evidence Medicine", continue; otherwise error.
- If "OtherProductCollectionType" == "Dynamic", continue; otherwise error.
- Reads/writes attributes including: OtherProductCollectionSubType, OtherProductCollectionType.

### Errors

—

### Usage / trigger

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 261
