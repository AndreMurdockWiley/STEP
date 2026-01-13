## BA_InitiateDeleteObjectWorkflow

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Actions/BA_InitiateDeleteObjectWorkflow.js`

### Functional description

Initiate Delete Object Workflow

### Functional logic

- Navigate the user to the Web UI homepage.

### Errors

- **Configured error**: Cannot initiate because its in Journal Creation Workflow; Cannot initiate because its already in Delete Object Workflow; Unable to initiate product into Delete Object Workflow
- **In-script message**: - Cannot initiate because its in Journal Creation Workflow
- **In-script message**: - Cannot initiate because its already in Delete Object Workflow

### Usage / trigger

- **Configuration**: DeleteObjectWorkflow
  - **Task/Event**: startWorkflowByID

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: validateItemToInitiateDeleteObjectWF, isInWorkflow, startWorkflowByID, showAlert, navigate

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 195
