## Sample_Node_Handler

- **Rule type**: Business Action
- **Business area**: Integrations
- **Data model object valid to**: All
- **Source file(s)**: `Integrations/Sample_Node_Handler.js`

### Functional description

JSON_Node_Handler builds outbound payloads for STEP integration events. When triggered by an Integration Endpoint, it inspects the event and node, logs the event context, and—when the node is a Product—assembles a structured JSON message describing the product, its values, children, and key references for downstream processing. It emits either update or delete messages to the integration pipeline.

### Functional logic

This rule operates as a node handler for outbound business processing:

- Capture the event type (if provided) and log whether an event ID is available.
- Retrieve the current node and proceed only if it is a Product.
- For delete events:
  - Emit a minimal delete payload containing the STEP object ID.
- For non-delete events:
  - Build a base JSON object from the node (via Integrations_Utility_Library).
  - Populate attribute values (`values`) and child objects (`children`).
  - Add outbound references (`references`) and classification references for `ProductToSubjectHierarchyLink`.
  - Emit the assembled JSON as an update message.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 310
