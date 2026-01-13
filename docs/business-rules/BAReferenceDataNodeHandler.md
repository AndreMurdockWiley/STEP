## BAReferenceDataNodeHandler

- **Rule type**: Business Action
- **Setup group**: Outbound_Integration_Rules
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Integrations/OutboundIntegrationRules/BAReferenceDataNodeHandler.js`, `OutboundIntegrationRules/BAReferenceDataNodeHandler.js`

### Functional description

Reference Data Node Handler Json Extract

### Functional logic

—

### Errors

—

### Usage / trigger

- **Configuration**: Outbound integration rule (configured in STEP Outbound Integration)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: JSON_Reference_Entity_Classification_lib (utilityLib)
- **Key functions**: getAllValuesAsJSON(), getDataContainers(), getLOVValuesfromLOV(), getLOVValueIDsfromLOV(), addMessage()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 80
