## DeleteDataContainer_ISSNHistory

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Attribute ID(s)**: ISSNHistory_DataContainer
- **Attribute name(s)**: ISSN History Data Container
- **Status**: Active
- **Source file(s)**: `Actions/DeleteDataContainer_ISSNHistory.js`

### Functional description

Delete Data Container ISSN History. It primarily works with attribute(s): ISSNHistory_DataContainer. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerByTypeID, deleteLocal

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 143
