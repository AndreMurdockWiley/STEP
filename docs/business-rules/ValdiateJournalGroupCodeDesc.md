## ValdiateJournalGroupCodeDesc

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: EntityRoot
- **Attribute ID(s)**: EntityJournalGroupCodeDescription
- **Source file(s)**: `Conditions/ValdiateJournalGroupCodeDesc.js`

### Functional description

Ensures a Journal Group Code **Description** is populated on the current `EntityRoot`. The condition evaluates the `EntityJournalGroupCodeDescription` attribute and returns **false** (validation fails) when the attribute has **no value** (`null`), and **true** when a value is present. This runs as a STEP business condition configured for validation.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `EntityJournalGroupCodeDescription` from the current object (`NODE`).
- If the value is `null`, the business condition returns `false` (indicating the description is missing).
- If the value is not `null`, the business condition returns `true`.
- Note: the script only checks for `null`; an empty string is treated as present and will pass.

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
- **Row(s) (0-based in data block)**: 250
