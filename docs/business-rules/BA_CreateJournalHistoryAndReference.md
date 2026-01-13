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

Create Journal History and Reference

### Functional logic

- Reads/writes attributes including: SoftDelete.

### Errors

- **Configured error**: Error: "Please select only one Parent Folder at a time", "Cannot create item with type 'Journal History Products' below [parent name]"
- **In-script message**: Please select only one Parent Folder at a time.
- **In-script message**: Cannot create item with type 'Journal History Products' below '

### Usage / trigger

—

### Dependencies / key functions

- **Key functions**: createProduct(), createReference(), navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 123
