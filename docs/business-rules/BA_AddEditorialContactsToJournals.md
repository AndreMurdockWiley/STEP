## BA_AddEditorialContactsToJournals

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: All
- **Attribute ID(s)**: EditorialContactEmail, EditorialContactFirstName, EditorialContactStatus
- **Source file(s)**: `Actions/BA_AddEditorialContactsToJournals.js`

### Functional description

Add Editorial Contacts To Journals

### Functional logic

- Reads/writes attributes including: EditorialContactFirstName, EditorialContactEmail, EditorialContactStatus.

### Errors

- **In-script message**: Please select only one History object at a time.
- **In-script message**: : First Name is missing. Please provide a value.
- **In-script message**: : Email is missing. Please provide a value.
- **In-script message**: : Status must be 'Active' to create reference.

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 198
