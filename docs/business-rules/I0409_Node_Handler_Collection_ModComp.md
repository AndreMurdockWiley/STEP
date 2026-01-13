## I0409_Node_Handler_Collection_ModComp

- **Rule type**: Business Action
- **Setup group**: Outbound_Integration_Rules
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Integrations/OutboundIntegrationRules/I0409_Node_Handler_Collection_ModComp.js`, `OutboundIntegrationRules/I0409_Node_Handler_Collection_ModComp.js`

### Functional description

I0409_Node_Handler_Collection_Modified_Components

### Functional logic

—

### Errors

—

### Usage / trigger

- **Configuration**: Outbound integration rule (configured in STEP Outbound Integration)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: Collections_Endpoints_JSON_Utility_Lib (utilityLib)
- **Key functions**: getSimpleEventType, getNode, getObjectType, isDeleted, currentNodeInitialJSON, getAllValuesAsJSON, getReferencesAsJSON_ModifiedComponents, addMessage, JSON.stringify

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 146
