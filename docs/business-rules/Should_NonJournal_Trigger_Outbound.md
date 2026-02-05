## Should_NonJournal_Trigger_Outbound

- **Rule type**: Business Condition
- **Business area**: Integrations
- **Data model object valid to**: OtherProducts
- **Source file(s)**: `Integrations/Should_NonJournal_Trigger_Outbound.js`

### Functional description

Determines whether an **OtherProducts** record should be considered a non-journal item for outbound integrations. This business condition is used by STEP Integration Endpoints to gate outbound processing so that only qualifying non-journal products proceed.

### Functional logic

This rule contains no scripted logic in the source file; it is a configuration-driven condition evaluated by STEP at runtime.

- Invoked by Integration Endpoints for **OtherProducts** objects.
- Evaluates the endpoint's configured criteria that identify a product as **non-journal**.
- If the criteria are met, the condition returns **true** and outbound processing can proceed; otherwise it returns **false** and the outbound action is skipped.

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
- **Row(s) (0-based in data block)**: 312
