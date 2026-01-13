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

Journal Primary Contact Check

### Functional logic

- Reads/writes attributes including: EditorialContactPrimary.

### Errors

- **Configured error**: Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getReferenceTypeByID, getReferences, getTarget, getName, getValue, getSimpleValue, push, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 145
