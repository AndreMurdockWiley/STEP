## OtherProductInitiateSaveButton

- **Rule type**: Business Action
- **Business area**: OtherProductsNavegation
- **Data model object valid to**: All
- **Source file(s)**: `OtherProducts/OtherProductsNavegation/OtherProductInitiateSaveButton.js`

### Functional description

When the user clicks **Other Product Initiate Save Button** in the Other Products navigation flow, this business action provides immediate UI feedback that the process has started.  
The action displays an informational message to the user: **"Search Initiated For Other Products"**.

### Functional logic

1. The action is executed from the Web UI context for the current object.
2. It reads the current UI selection (`UI.getSelection()`), establishing context for the user-triggered action.
3. It shows an informational alert (`UI.showAlert`) with the message **"Search Initiated For Other Products"**.
4. No conditional validation, error branching, or data update is performed in this rule.

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
