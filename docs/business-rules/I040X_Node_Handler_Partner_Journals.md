## I040X_Node_Handler_Partner_Journals

- **Rule type**: Business Action
- **Setup group**: Outbound_Integration_Rules
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Integrations/OutboundIntegrationRules/I040X_Node_Handler_Partner_Journals.js`, `OutboundIntegrationRules/I040X_Node_Handler_Partner_Journals.js`

### Functional description

I040X_Node_Handler_Partner_Journals. It is triggered from: Outbound integration rule (configured in STEP Outbound Integration).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Outbound integration rule (configured in STEP Outbound Integration)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: Integrations_Utility_Library (utilityLib)
- **Key functions**: initialNodeJSON(), getAllValuesAsJSON(), getDataContainers(), addMessage()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 100
