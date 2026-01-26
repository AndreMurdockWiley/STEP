## BA_CreateJournalHistoryAndReference

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: JournalHistoryAtoZ, JournalHistoryProducts
- **Attribute ID(s)**: SoftDelete
- **Attribute name(s)**: Soft Delete
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/BA_CreateJournalHistoryAndReference.js`

### Functional description

Create Journal History and Reference. It primarily works with attribute(s): SoftDelete. If validation fails, the user sees an error message such as: "Error: "Please select only one Parent Folder at a time", "Cannot create item with type 'Journal History Products' below [parent name]"".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: SoftDelete.

### Errors

- **Configured error**: Error: "Please select only one Parent Folder at a time", "Cannot create item with type 'Journal History Products' below [parent name]"
- **In-script message**: Please select only one Parent Folder at a time.
- **In-script message**: Cannot create item with type 'Journal History Products' below '

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/BA_CreateJournalHistoryAndReference.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: createProduct(), createReference(), navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 123
