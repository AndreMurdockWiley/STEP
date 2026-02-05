## Send_Journal_Transition_Refs

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalHistoryProducts, Journal
- **Product type(s) valid to**: Journal, JournalHistoryProducts
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Actions/Send_Journal_Transition_Refs.js`

### Functional description

Runs as a Web UI business action to send journal transition references for the currently selected items. For each selected Journal or JournalHistoryProducts node, it delegates processing to the downstream action `Test_Trigger_Rule_Journal_Refs_Send`. Any non-eligible object types in the selection are ignored.

### Functional logic

- Retrieves the current selection from the Web UI context.
- Iterates through each selected node.
- Checks the node's object type:
  - If the type is **JournalHistoryProducts**, execute `Test_Trigger_Rule_Journal_Refs_Send` for that node.
  - If the type is **Journal**, execute `Test_Trigger_Rule_Journal_Refs_Send` for that node.
- No additional validation, branching, or error handling is performed in this rule.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: Test_Trigger_Rule_Journal_Refs_Send
- **Key functions**: Reference processing for transitions

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 26
