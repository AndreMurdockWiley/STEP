## ValidateIfBeingCreatedPrint

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Source file(s)**: `Conditions/ValidateIfBeingCreatedPrint.js`

### Functional description

Determines whether the current object should be treated as **print-capable** during creation/validation flows. The condition evaluates the object’s `ProductMediaType` value and is intended for use in STEP configuration as a boolean gate (e.g., to apply validations only when print content is relevant).

### Functional logic

The rule reads the `ProductMediaType` attribute from the current object and returns a boolean:

- If `ProductMediaType` is **not set** (null/empty): return **false**
- If `ProductMediaType` equals **`Print`** or **`Both`**: return **true**
- Otherwise: return **false**

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 256
