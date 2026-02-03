## Workflow_Test_Message

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Status**: Active
- **Source file(s)**: `Actions/Workflow_Test_Message.js`

### Functional description

Workflow_Test_Message is a **user-invoked test business action** used to confirm that a Business Action is correctly wired in STEP (Web UI / workflow configuration) and that user messaging renders as expected.

When executed, it displays a Web UI alert dialog to the user with a configured **Title**, **Headline**, and **Body** text (`TITLE / HEADLINE / BODY`). This rule performs **no validation**, **no branching**, and **no data updates**.

### Functional logic

At runtime, STEP binds the current object as `NODE` (not used) and the Web UI context as `UI`, then executes a single UI call:

- Always call `UI.showAlert("TITLE", "HEADLINE", "BODY")`
- No reads/writes to `NODE`
- No conditions or validation checks; the alert is always shown when the action is triggered

### Errors

- **Configured alert text**: TITLE / HEADLINE / BODY

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 149
