## NodeJSONConverter

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: Color, ManufacturerName
- **Status**: Active
- **Source file(s)**: `Actions/NodeJSONConverter.js`

### Functional description

NodeJSONConverter is a business action used to convert a STEP node event into an outbound JSON message. In its current implementation, the rule runs when invoked through a business-action context (for example, from Web UI/workflow-driven execution), logs event context for traceability, and publishes an `upsert` message for product nodes. The rule is positioned as a node-to-JSON conversion point; `ManufacturerName` and `Color` are listed as relevant attributes, but their mapping is currently commented out in source.

### Functional logic

The rule follows a simple event-handling flow to produce an outbound JSON payload:

- Reads the incoming event type from the node handler source and writes informational logs for monitoring.
- Retrieves the current node and continues only when the node exists and is a `Product`.
- Creates a JSON payload object (currently a static placeholder with `first` and `second` fields).
- Serializes the payload and publishes it via `nodeHandlerResult.addMessage("upsert", ...)`.
- Does not add an outbound message when the node is missing or not a product.
- Contains commented logic indicating planned/previous support for:
  - mapping `ManufacturerName` and `Color` into the payload, and
  - branching for delete vs. upsert message types.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getSimpleEventType(), getNode(), addMessage()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 172
