## ValidateIfOpenAccess

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductRenewalSubscriptionType
- **Source file(s)**: `Conditions/ValidateIfOpenAccess.js`

### Functional description

Ensures the current object is treated as **Open Access** by verifying that the **Product renewal subscription type** has been set to **Open Access**. This rule is used as a STEP business condition (typically in validation), so a non-matching value causes the condition to fail and prevents the configured step/validation from proceeding.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `ProductRenewalSubscriptionType` from the current object.
- Return **true** only when the value is exactly `"Open Access"`.
- Otherwise return **false** (the calling STEP configuration interprets this as a failed condition/validation).

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
- **Row(s) (0-based in data block)**: 266
