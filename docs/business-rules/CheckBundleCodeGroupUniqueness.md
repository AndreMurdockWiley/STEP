## CheckBundleCodeGroupUniqueness

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Attribute ID(s)**: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType
- **Attribute name(s)**: Product Bundle Code, Product Bundle Group, Product Bundle Subscription Type
- **Status**: Active
- **Source file(s)**: `Actions/CheckBundleCodeGroupUniqueness.js`

### Functional description

Check Bundle Code Group Uniqueness

### Functional logic

- Reads/writes attributes including: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType.

### Errors

- **Configured error**: Value Pair of Bundle Code, Bundle Group, and Subscription Type is duplicated, please fix.

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerObjects, getDataContainerByTypeID, getDataContainers, iterator, hasNext, next, getDataContainerObject, getValue, getSimpleValue, indexOf, push, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 148
