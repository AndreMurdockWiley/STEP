## JournalPrimaryContactCheck

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Attribute ID(s)**: EditorialContactPrimary
- **Attribute name(s)**: Editorial Contact Primary
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/JournalPrimaryContactCheck.js`

### Functional description

Journal Primary Contact Check. It primarily works with attribute(s): EditorialContactPrimary. If validation fails, the user sees an error message such as: "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: EditorialContactPrimary.

### Errors

- **Configured error**: Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/JournalPrimaryContactCheck.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getReferenceTypeByID, getReferences, getTarget, getName, getValue, getSimpleValue, push, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 145
