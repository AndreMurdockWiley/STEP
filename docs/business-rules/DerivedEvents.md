## DerivedEvents

- **Rule type**: Action
- **Setup group**: Integrations
- **Business area**: Integration
- **Data model object valid to**: Product
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Integrations/DerivedEvents.js`

### Functional description

Republishes all child media objects to current event queue when journal is published. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

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
- **Key functions**: getObjectType(), getChildren(), forEach(), republish()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 114, 119
