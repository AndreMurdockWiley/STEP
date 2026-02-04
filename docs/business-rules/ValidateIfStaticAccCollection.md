## ValidateIfStaticAccCollection

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionCategory, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfStaticAccCollection.js`

### Functional description

Validates that an Other Product collection classified as **Static** is also categorized as an **Access** collection. This prevents misclassification by enforcing the required pairing between `OtherProductCollectionType` and `CollectionCategory` when the validation is executed in STEP.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Check `OtherProductCollectionType`.
  - If the value is **Static**, validation continues.
  - Otherwise, the rule fails validation (error).
- Check `CollectionCategory`.
  - If the value is **Access**, validation continues.
  - Otherwise, the rule fails validation (error).
- Attributes evaluated by this validation include: `OtherProductCollectionType`, `CollectionCategory`.

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
- **Row(s) (0-based in data block)**: 275
