## bcFilterOnLov_OneSource

- **Rule type**: Business Condition
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: Domain user-type root
- **Source file(s)**: `Integrations/OutboundIntegrationRules/bcFilterOnLov_OneSource.js`, `OutboundIntegrationRules/bcFilterOnLov_OneSource.js`

### Functional description

`bcFilterOnLov_OneSource` is an outbound-integration **filter condition** used by STEP Integration Endpoints to decide whether a List-of-Values (LOV) event should be placed onto the endpoint event queue for the OneSource integration.

Business intent: **only publish the OneSource Product Level 1 Material Group LOV** (and ignore all other LOV objects) so unrelated LOV maintenance does not trigger outbound messages.

### Functional logic

When the integration endpoint evaluates this business condition for the current object (`node`):

- **Allow / queue the event**: if `node.getID()` equals `MatGrp4OneSourcePrdLvl1Code_LOV`, return `true` (the object/event is eligible to be added to the endpoint event queue).
- **Block / do not queue the event**: for any other object ID, return the message `wont be added to endpoint event queue` (the event is filtered out).

Notes from the implementation:

- The rule is bound to a LOV (`LOVID` is configured as `Ownership_LOV`), but **the LOV bind is not used in the condition**; the decision is made solely from the current object’s ID.
- Additional IDs appear as commented-out candidates in the source, indicating the allow-list may have been broader previously.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 307, 370
