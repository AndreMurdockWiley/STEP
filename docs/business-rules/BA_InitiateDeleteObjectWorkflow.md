## BA_InitiateDeleteObjectWorkflow

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Actions/BA_InitiateDeleteObjectWorkflow.js`

### Functional description

Initiate Delete Object Workflow. It is triggered from: DeleteObjectWorkflow (startWorkflowByID). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Navigate the user to the Web UI homepage.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: - Cannot initiate because its in Journal Creation Workflow
- **In-script message**: - Cannot initiate because its already in Delete Object Workflow

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: DeleteObjectWorkflow
  - **Task/Event**: startWorkflowByID

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: validateItemToInitiateDeleteObjectWF, isInWorkflow, startWorkflowByID, showAlert, navigate

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 195
