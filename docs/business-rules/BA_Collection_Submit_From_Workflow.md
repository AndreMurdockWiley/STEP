## BA_Collection_Submit_From_Workflow

- **Rule type**: Business Action
- **Setup group**: CollectionsGroup
- **Business area**: CollectionsGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Attribute ID(s)**: AT_SubmitMessage
- **Attribute name(s)**: Submit Message
- **Status**: Active
- **Source file(s)**: `CollectionGroup/BA_Collection_Submit_From_Workflow.js`

### Functional description

Collection Submit from Workflow

### Functional logic

—

### Errors

- **Configured error**: Missing references for mandatory reference types: "COLLECTIONS TO JOURNAL REFERENCE". [Attribute] is/are missing. Please provide.
- **In-script message**: COLLECTIONS TO JOURNAL REFERENCE is missing for below Collections. Please provide.
- **In-script message**: Mandatory value(s) missing for below DataBase Collection(s). Please provide.
- **In-script message**: COLLECTIONS TO JOURNAL REFERENCE is missing. Please provide.
- **In-script message**: is/are missing. Please provide.

### Usage / trigger

- **Configuration**: CollectionCreationWF
  - **Task/Event**: State-5, NextState event

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getWorkflowInstanceByID, getTask, triggerByID, isRejectedByScript, getScriptMessage, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 138
