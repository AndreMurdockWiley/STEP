## BA_InitiateSoftDelete

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: JournalHistoryProducts
- **Source file(s)**: `Actions/BA_InitiateSoftDelete.js`

### Functional description

Executes logic within workflow "JournalCreationWFV3Backup" context.

### Functional logic

- Locate workflow instance "JournalCreationWFV3Backup".
- Navigate the user to the Web UI homepage.

### Errors

- **In-script message**: - Cannot initiate because object is already in Soft Delete Workflow

### Usage / trigger

- **Configuration**: Workflow: "JournalCreationWFV3Backup"
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 205
