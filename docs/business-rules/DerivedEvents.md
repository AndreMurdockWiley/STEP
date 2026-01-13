## DerivedEvents

- **Rule type**: Action
- **Setup group**: Integrations
- **Business area**: Integration
- **Data model object valid to**: Product
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Integrations/DerivedEvents.js`

### Functional description

Republishes all child media objects to current event queue when journal is published. See the Functional Logic and Usage sections below for the specific configuration and trigger context.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Integrations/DerivedEvents.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getObjectType(), getChildren(), forEach(), republish()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 114, 119
