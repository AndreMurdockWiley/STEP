## Test_BR

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Actions/Test_BR.js`

### Functional description

Removes the current issue object from the VolumeIssueCreationWF workflow and deletes it. If the delete operation creates a delete node, the rule approves that delete node to complete the removal. This action is used by the VolumeIssueCreationWF "Remove and Delete" task.

### Functional logic

- Remove the current object from the `VolumeIssueCreationWF` workflow.
- Call `delete()` on the object and log the returned delete node.
- If a delete node is returned, call `approve()` on it.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: Remove and Delete

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: removeFromWorkflow(), delete(), approve()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 51
