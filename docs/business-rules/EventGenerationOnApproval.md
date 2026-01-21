## EventGenerationOnApproval

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: EventTrigger
- **Attribute name(s)**: Event Trigger
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Integrations/EventGenerationOnApproval.js`

### Functional description

Event Generation On Approval. It primarily works with attribute(s): EventTrigger. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: EventTrigger.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: —
  - **Task/Event**: On Approval (Trigger)

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: new Date()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 27
