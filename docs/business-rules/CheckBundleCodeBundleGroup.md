## CheckBundleCodeBundleGroup

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: Journal
- **Attribute ID(s)**: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType
- **Source file(s)**: `Conditions/CheckBundleCodeBundleGroup.js`

### Functional description

Check Bundle Code Bundle Group

### Functional logic

- Reads/writes attributes including: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType.

### Errors

- **In-script message**: Value Pair of Bundle Code, Bundle Group, and Subscription Type is duplicated, please fix.

### Usage / trigger

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 234
