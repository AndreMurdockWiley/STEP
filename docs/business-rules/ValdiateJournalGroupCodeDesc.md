## ValdiateJournalGroupCodeDesc

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: EntityRoot
- **Attribute ID(s)**: EntityJournalGroupCodeDescription
- **Source file(s)**: `Conditions/ValdiateJournalGroupCodeDesc.js`

### Functional description

Ensures a **Journal Group Code Description** is provided on the entity. This business condition is used as a mandatory-field validation for `EntityJournalGroupCodeDescription` on `EntityRoot` objects; it returns **pass** when the attribute is populated and **fail** when it is missing, preventing the configured STEP action from completing until the description is entered.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `EntityJournalGroupCodeDescription` from the current node.
- If the value is **null** (no value set), the condition **fails** (`return false`).
- If the value is **not null**, the condition **passes** (`return true`).
- No attributes are written/updated by this rule (read-only validation). Note: the current script does not treat an empty string as missing; it only checks for `null`.

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
