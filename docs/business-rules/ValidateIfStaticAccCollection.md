## ValidateIfStaticAccCollection

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionCategory, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfStaticAccCollection.js`

### Functional description

Determines whether the current object qualifies as a **Static Access Collection** based on two classification attributes. This rule is used as a **Business Condition** in STEP validations so that downstream validation logic/messages can be applied only when the object is a Static Access Collection.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read `OtherProductCollectionType` and `CollectionCategory` from the current object.
- **Return `true`** when both conditions are met:
  - `OtherProductCollectionType` equals `"Static"`, and
  - `CollectionCategory` equals `"Access"`.
- **Return `false`** for all other value combinations (including blank/missing values).
- This rule **does not update any attributes**; it only evaluates the two inputs above.

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
