## OtherProductInitiateSaveButton

- **Rule type**: Business Action
- **Business area**: OtherProductsNavegation
- **Data model object valid to**: All
- **Source file(s)**: `OtherProducts/OtherProductsNavegation/OtherProductInitiateSaveButton.js`

### Functional description

This business action provides immediate user feedback when the **Other Product Initiate Save** button is triggered in the UI.  
It displays an informational message to confirm that the process has started: **"Search Initiated For Other Products"**.

The rule acts as a user notification step only; it does not perform data validation, update product data, or persist changes.

### Functional logic

1. Read the current UI selection context (`UI.getSelection()`).
2. Display an INFO alert in the STEP UI with the message:
   - `Search Initiated For Other Products`
3. End processing.

There are no conditional branches, validation checks, gateway calls, or save operations implemented in this rule.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/OtherProductsNavegation/OtherProductInitiateSaveButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 358
