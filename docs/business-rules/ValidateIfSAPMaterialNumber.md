## ValidateIfSAPMaterialNumber

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: IssueSAPMaterialNumber
- **Source file(s)**: `Conditions/ValidateIfSAPMaterialNumber.js`

### Functional description

Determines whether an Issue record currently **does not have** an SAP Material Number populated. This business condition is used by STEP validation configuration to detect when `IssueSAPMaterialNumber` is missing/blank on the current object.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `IssueSAPMaterialNumber` from the current object (no attributes are written).
- If `IssueSAPMaterialNumber` is **null** or an **empty string**, the condition returns **true** (interpreted as “SAP Material Number is not provided”).
- If `IssueSAPMaterialNumber` contains any value, the condition returns **false** (interpreted as “SAP Material Number is provided”).
- The script does **not** validate SAP Material Number format (e.g., length, numeric-only, leading zeros); any messaging/error behavior is handled by the STEP validation configuration that consumes this condition.

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
- **Row(s) (0-based in data block)**: 273
