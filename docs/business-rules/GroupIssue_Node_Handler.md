## GroupIssue_Node_Handler

- **Rule type**: Business Action
- **Setup group**: Outbound_Integration_Rules
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: AG_Group_Issue_OIEP_Attributes
- **Attribute name(s)**: Group Issue OIEP Attributes
- **Status**: Active
- **Source file(s)**: `Integrations/OutboundIntegrationRules/GroupIssue_Node_Handler.js`, `OutboundIntegrationRules/GroupIssue_Node_Handler.js`

### Functional description

GroupIssue Node Handler. It primarily works with attribute(s): AG_Group_Issue_OIEP_Attributes. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: initialNodeJSON(), getAllValuesAsJSON(), getAttributeValue(), getValidAttributes(), isAttributeValidForNode()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 171
