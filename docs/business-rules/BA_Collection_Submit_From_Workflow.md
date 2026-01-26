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

Collection Submit from Workflow. It primarily works with attribute(s): AT_SubmitMessage. It is triggered from: CollectionCreationWF (State-5, NextState event). If validation fails, the user sees an error message such as: "Missing references for mandatory reference types: "COLLECTIONS TO JOURNAL REFERENCE". [Attribute] is/are missing. Please provide.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

- **Configured error**: Missing references for mandatory reference types: "COLLECTIONS TO JOURNAL REFERENCE". [Attribute] is/are missing. Please provide.
- **In-script message**: COLLECTIONS TO JOURNAL REFERENCE is missing for below Collections. Please provide.
- **In-script message**: Mandatory value(s) missing for below DataBase Collection(s). Please provide.
- **In-script message**: COLLECTIONS TO JOURNAL REFERENCE is missing. Please provide.
- **In-script message**: is/are missing. Please provide.

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: CollectionCreationWF
  - **Task/Event**: State-5, NextState event

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getWorkflowInstanceByID, getTask, triggerByID, isRejectedByScript, getScriptMessage, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 138
