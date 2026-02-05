## RebillingTabPopulation

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductActivated, ProductRenewalSubscriptionType
- **Source file(s)**: `Conditions/RebillingTabPopulation.js`

### Functional description

Notifies users to review the Rebilling tab when an activated product's parent subscription type is set to Open Access. It evaluates the current product's activation state together with the parent product's renewal subscription type during the business condition validation.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads ProductRenewalSubscriptionType from the parent product and ProductActivated from the current product.
- If the subscription type equals "Open Access" and the product is "Activated", shows an acknowledgment alert prompting review of the Rebilling tab and returns true.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 247
