## ValidForDeleteBoth

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductMediaType
- **Source file(s)**: `Conditions/ValidForDeleteBoth.js`

### Functional description

Determines whether the current object belongs to a Journal that is configured as **“Both”** (i.e., the Journal supports both media types). This condition is typically used to gate validations/actions that are only applicable when the owning Journal’s `ProductMediaType` is set to **Both**.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Navigates from the current node up the hierarchy (three parent levels) to obtain the owning **Journal** node.
- Reads the Journal attribute `ProductMediaType`.
- Returns **true** when `ProductMediaType` equals **"Both"**.
- Returns **false** for any other value (including blank / not set).
- Does not write any attributes.

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
- **Row(s) (0-based in data block)**: 252
