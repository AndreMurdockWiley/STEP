## RebillingTabPopulation

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductActivated, ProductRenewalSubscriptionType
- **Source file(s)**: `Conditions/RebillingTabPopulation.js`

### Functional description

Rebilling Tab Population

### Functional logic

- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: ProductRenewalSubscriptionType, ProductActivated.

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
- **Row(s) (0-based in data block)**: 247
