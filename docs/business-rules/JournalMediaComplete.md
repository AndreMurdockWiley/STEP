## JournalMediaComplete

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/JournalMediaComplete.js`

### Functional description

Journal Media Complete

### Functional logic

- Plugin: ReferenceOtherBABusinessAction.
- Parameter "ReferencedBA": BA_TAEligibility_Derivation

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: References 8 other business actions
- **Key functions**: Workflow completion sequence

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 34
