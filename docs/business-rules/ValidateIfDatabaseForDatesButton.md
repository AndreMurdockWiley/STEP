## ValidateIfDatabaseForDatesButton

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionType, ProductActivated
- **Source file(s)**: `Conditions/ValidateIfDatabaseForDatesButton.js`

### Functional description

Determines whether the “Dates” button/action is allowed for the current object. The condition is only met when the object represents a **Database Model Collection** and is **Activated**. This rule evaluates the attributes `CollectionType` and `ProductActivated` and is used as a STEP business condition (validation) to allow or block the configured UI action.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `CollectionType` and `ProductActivated` from the current object.
- Return **true** (condition satisfied) only when:
  - `CollectionType` = “Database Model Collections”, and
  - `ProductActivated` = “Activated”.
- Otherwise return **false** (condition not satisfied), preventing the configured “Dates” button/action from being available/allowed in STEP.

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
- **Row(s) (0-based in data block)**: 259
