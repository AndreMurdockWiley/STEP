## DeleteNode

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Actions/DeleteNode.js`

### Functional description

Hard-deletes the current node (used for data conversion cleanup) and approves the deletion. It is triggered from: Business action (triggered via Web UI / workflow event). This action performs no validation or user-facing error handling.

### Functional logic

This section summarizes the functional logic based on the exported STEP rule configuration and script inspection. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Hard-delete the current node.
- Approve the deletion immediately after the delete call.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: delete(), approve()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 176
