## OtherProductsFunctions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: OtherProducts, Backfiles
- **Attribute ID(s)**: OPAndBackfileSystemMatNo
- **Attribute name(s)**: Other Products and Backfile System Material Number
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Libraries/OtherProductsFunctions.js`

### Functional description

This library supports sequential numbering for **OtherProducts** and **Backfiles** by maintaining the **Other Products and Backfile System Material Number** (`OPAndBackfileSystemMatNo`).  
Its purpose is to provide a reusable function that moves the stored system material number to the next value, so downstream business rules or workflows can assign the next available sequence number consistently.

### Functional logic

When `sequentialMatNoIncrement(materialNumber)` is called, the library performs the following steps:

1. Reads the current value of `OPAndBackfileSystemMatNo` from the provided object.
2. Increments the value by `1`.
3. Writes the incremented value back to `OPAndBackfileSystemMatNo`.
4. Returns the updated number to the calling logic.

In business terms, this function acts as a simple **counter service** for Other Products and Backfiles material numbering. It does not apply additional validation, formatting, or error messaging itself; those controls are expected to be handled by the calling rule or process.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Libraries/OtherProductsFunctions.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: sequentialMatNoIncrement()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 5
