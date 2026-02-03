## ValidateUserGroup

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Source file(s)**: `Conditions/ValidateUserGroup.js`

### Functional description

Validates that the **current user is allowed to proceed** based on their STEP user group membership.

This business condition is typically used as a **workflow/STEP validation guard** to prevent users in designated **read-only** groups from passing the validation (and therefore from performing the action/step where this condition is configured).

### Functional logic

When evaluated, the rule inspects the current user’s group memberships and returns a boolean result:

- Start with `isReadOnly = true` (assume the user is allowed to pass the validation).
- Retrieve the current user’s groups via `manager.getCurrentUser().getAllGroups()`.
- Iterate through each group and check its ID.
  - If **any** group ID equals `ReadOnly` **or** `ReadOnly/ReportUsers`, set `isReadOnly = false`.
- Return `isReadOnly`.

**Outcome interpretation**:

- **Returns `true`**: the user is **not** in `ReadOnly` or `ReadOnly/ReportUsers` (validation passes).
- **Returns `false`**: the user **is** in one of the configured read-only groups (validation fails).

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
- **Row(s) (0-based in data block)**: 277
