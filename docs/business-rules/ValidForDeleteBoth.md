## ValidForDeleteBoth

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductMediaType
- **Source file(s)**: `Conditions/ValidForDeleteBoth.js`

### Functional description

Determines whether the current object is eligible for a **“Delete both (print + online)”** action by checking the owning Journal’s media type. The condition passes only when the Journal is configured as **Both** (i.e., the product exists in both print and online formats). This prevents “delete both” options from being offered/executed for journals that are print-only or online-only.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Locates the Journal associated with the current node by navigating three levels up the hierarchy (parent → parent → parent).
- Reads the Journal attribute `ProductMediaType`.
- Returns **true** when `ProductMediaType` equals `"Both"`.
- Returns **false** for any other value (including blank / not set), meaning the object is **not** valid for “delete both”.

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
