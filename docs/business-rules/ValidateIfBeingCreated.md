## ValidateIfBeingCreated

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Source file(s)**: `Conditions/ValidateIfBeingCreated.js`

### Functional description

Determines whether the rule is being evaluated in an “object creation” context (i.e., not running from within a workflow task). This condition is typically used in STEP validations to branch logic so certain checks only run during initial creation (or are skipped when the object is already in a workflow).

### Functional logic

The condition is based solely on the presence of a current workflow context:

- If a `WORKFLOW` context is available (the rule is running inside a workflow), **return `false`**.
- If no `WORKFLOW` context is available, **return `true`** (treat as “being created” / evaluated outside workflow).

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
- **Row(s) (0-based in data block)**: 254
