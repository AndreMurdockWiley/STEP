## ValidateIfJournalSpecialProduct

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfJournalSpecialProduct.js`

### Functional description

Determines whether the current object qualifies as a **Journal special product** based on its collection classification. The condition evaluates the attributes `OtherProductCollectionType` and `OtherProductCollectionSubType` and is intended to be used by STEP validations/workflow configuration that require the object to represent a Dynamic Journal collection.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `OtherProductCollectionType` and `OtherProductCollectionSubType` from the current object.
- Return **true** only when both of the following are true:
  - `OtherProductCollectionType` == `"Dynamic"`
  - `OtherProductCollectionSubType` == `"Journal"`
- Otherwise return **false** (any user-facing error message is handled by the STEP validation/configuration that invokes this condition).

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
- **Row(s) (0-based in data block)**: 260
