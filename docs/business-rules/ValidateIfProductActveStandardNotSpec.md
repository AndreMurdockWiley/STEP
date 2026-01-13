## ValidateIfProductActveStandardNotSpec

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionSubType, CollectionType, ProductActivated
- **Source file(s)**: `Conditions/ValidateIfProductActveStandardNotSpec.js`

### Functional description

Validate If Product Activated/Standard/NotSpecific

### Functional logic

- If "ProductActivated" == "Activated", continue; otherwise error.
- If "CollectionSubType" == "Standard", continue; otherwise error.
- Reads/writes attributes including: ProductActivated, CollectionSubType, CollectionType.

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
- **Row(s) (0-based in data block)**: 272
