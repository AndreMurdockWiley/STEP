## OtherProductsSaveButton

- **Rule type**: Business Action
- **Business area**: OtherProducts
- **Data model object valid to**: OtherProducts
- **Source file(s)**: `OtherProducts/OtherProductsSaveButton.js`

### Functional description

Runs the **Other Products Save Button** action for `OtherProducts` records.  
When a user saves, this rule orchestrates key save-time processes by invoking referenced business actions for field validation, automatic classification, and DOI URL refresh, so the record is validated and enriched before save completion.

### Functional logic

The rule is implemented as an orchestration wrapper using the `ReferenceOtherBABusinessAction` plugin, with each step invoking a referenced business action:

1. Calls `BA_ValidateTextFields` to validate required/format-sensitive text fields during save.
2. Calls `AutoClassificationOtherProducts` to apply automatic classification logic for the product.
3. Calls `WebUI_Update_DOI_URL` to update DOI URL data used by the Web UI.

In practice, this save-button rule coordinates these operations in sequence and relies on the referenced actions for detailed validation/error messaging and field-level processing.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/OtherProductsSaveButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 359
