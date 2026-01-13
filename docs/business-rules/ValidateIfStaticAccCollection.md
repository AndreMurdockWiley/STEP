## ValidateIfStaticAccCollection

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionCategory, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfStaticAccCollection.js`

### Functional description

Validate If Static Access Collection

### Functional logic

- If "OtherProductCollectionType" == "Static", continue; otherwise error.
- If "CollectionCategory" == "Access", continue; otherwise error.
- Reads/writes attributes including: OtherProductCollectionType, CollectionCategory.

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
- **Row(s) (0-based in data block)**: 275
