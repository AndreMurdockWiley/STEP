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

Other Products Functions is a shared library used by automation that creates or updates **OtherProducts** and **Backfiles** records. Its business purpose is to maintain a single running system material-number counter in **OPAndBackfileSystemMatNo** and provide the next available value to calling rules (for example, when assigning SAP material numbers).  
The library performs a technical sequence update and does not surface a user-facing validation message by itself; any business messaging is handled by the calling action/integration rule.

### Functional logic

The library exposes one helper method, **sequentialMatNoIncrement(materialNumber)**, with the following behavior:

- Reads the current numeric value from **OPAndBackfileSystemMatNo** on the provided sequence object.
- Increments that value by **1** to generate the next system material number.
- Writes the incremented value back to **OPAndBackfileSystemMatNo** so the counter is persisted for subsequent calls.
- Returns the new incremented value to the caller, which then uses it in downstream attribute population (for example, `ProductSAPMaterialNumber`).
- Maintains sequential assignment through a shared counter; no additional format or null-validation logic is implemented inside this library function.

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
