## NotValidForDeleteBoth

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductMediaType
- **Source file(s)**: `Conditions/NotValidForDeleteBoth.js`

### Functional description

This business condition is used to disallow "delete both"-style processing when the related journal is configured for both media types. The rule starts from the current object, navigates three levels up to its journal-level ancestor, and evaluates the journal's `ProductMediaType` value. The condition passes only when `ProductMediaType` is not `Both`; if it is `Both`, the condition fails.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Resolves a journal-level ancestor with `NODE.getParent().getParent().getParent()`.
- Reads `ProductMediaType` from that ancestor using `getSimpleValue()`.
- Returns `true` when `ProductMediaType` is anything other than `Both`.
- Returns `false` when `ProductMediaType` is `Both`.
- Attribute interaction: reads `ProductMediaType`; no attribute values are written.

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
- **Row(s) (0-based in data block)**: 246
