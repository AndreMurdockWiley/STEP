## ValidateIfBeingCreatedOnline

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Source file(s)**: `Conditions/ValidateIfBeingCreatedOnline.js`

### Functional description

Determines whether the current object should be treated as being created for an **online (digital)** product variant.

This business condition is used in STEP configuration to **gate online-specific UI/validation behavior** (for example, only showing or enabling “digital” components when the object’s media type indicates it is Online-capable).

### Functional logic

The condition evaluates the `ProductMediaType` attribute on the current object and returns a boolean.

- If `ProductMediaType` is **blank / not set**: **return false**
- If `ProductMediaType` is exactly **`Online`** or **`Both`**: **return true**
- For any other value (for example **`Print`**): **return false**

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
- **Row(s) (0-based in data block)**: 255
