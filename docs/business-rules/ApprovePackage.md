## ApprovePackage

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Status**: Active
- **Source file(s)**: `PackageGroup/ApprovePackage.js`

### Functional description

Approves the current Package object in STEP (i.e., commits the object’s changes from the working workspace to the Approved state) when the user runs this Business Action. This rule does not add any package-specific validation or data updates; it relies on STEP’s standard approval behavior.

### Functional logic

When executed, the action approves the current object:

- Take the bound `NODE` (the object the action is run on)
- Call `NODE.approve()`
- If STEP blocks approval (e.g., due to standard validation/permission/workflow constraints), STEP raises the error; this rule does not intercept or transform errors.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/ApprovePackage.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: approve

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 150
