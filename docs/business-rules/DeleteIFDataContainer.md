## DeleteIFDataContainer

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Attribute ID(s)**: JournalImpactFactorDataContainer
- **Attribute name(s)**: Journal Impact Factor Data Container
- **Status**: Active
- **Source file(s)**: `Actions/DeleteIFDataContainer.js`

### Functional description

Delete IF Data Container. It primarily works with attribute(s): JournalImpactFactorDataContainer. It is triggered from: Business action (triggered via Web UI button / workflow event / configured action).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Key functions**: getDataContainerByTypeID, deleteLocal

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 156
