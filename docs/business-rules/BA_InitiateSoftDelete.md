## BA_InitiateSoftDelete

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: JournalHistoryProducts
- **Source file(s)**: `Actions/BA_InitiateSoftDelete.js`

### Functional description

Executes logic within workflow "JournalCreationWFV3Backup" context. It is triggered from: Workflow: "JournalCreationWFV3Backup". If validation fails, the user sees an error message such as: "- Cannot initiate because object is already in Soft Delete Workflow".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Locate workflow instance "JournalCreationWFV3Backup".
- Navigate the user to the Web UI homepage.

### Errors

- **In-script message**: - Cannot initiate because object is already in Soft Delete Workflow

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Workflow: "JournalCreationWFV3Backup"
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 205
