## Should_NonJournal_Trigger_Outbound

- **Rule type**: Business Condition
- **Business area**: Integrations
- **Data model object valid to**: OtherProducts
- **Source file(s)**: `Integrations/Should_NonJournal_Trigger_Outbound.js`

### Functional description

Determines whether an **OtherProducts** (non-journal) record should trigger an outbound integration. This condition is referenced by Integration Endpoints to gate outbound publishing for non-journal products.

### Functional logic

No executable rule logic is implemented in the source file; it only declares the business condition metadata. The actual criteria are configured in STEP Integration Endpoints. From the rule definition:

- **Scope**: Global business condition.
- **Valid object type**: `OtherProducts` only.
- **Execution**: Not run on approve; not privileged.

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
