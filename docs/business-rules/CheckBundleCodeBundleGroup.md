## CheckBundleCodeBundleGroup

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: Journal
- **Attribute ID(s)**: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType
- **Source file(s)**: `Conditions/CheckBundleCodeBundleGroup.js`

### Functional description

Check Bundle Code Bundle Group. It primarily works with attribute(s): ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType. It is triggered from: Business condition (validation configured in STEP). If validation fails, the user sees an error message such as: "Value Pair of Bundle Code, Bundle Group, and Subscription Type is duplicated, please fix.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType.

### Errors

- **In-script message**: Value Pair of Bundle Code, Bundle Group, and Subscription Type is duplicated, please fix.

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 234
