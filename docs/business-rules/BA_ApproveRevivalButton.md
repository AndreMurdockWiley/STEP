## BA_ApproveRevivalButton

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: JournalHistoryProducts
- **Attribute ID(s)**: SoftDelete
- **Source file(s)**: `Actions/BA_ApproveRevivalButton.js`

### Functional description

In workflow "ReviveSoftDeleteWorkflow" at task/state "Review", triggers event "Approve" when "SoftDelete" == "No" and navigates the user to the Web UI homepage; otherwise shows an error.

### Functional logic

- Locate workflow instance "ReviveSoftDeleteWorkflow".
- Locate task/state "Review".
- If "SoftDelete" == "No", continue; otherwise error.
- Trigger workflow event "Approve".
- Navigate the user to the Web UI homepage.
- Reads/writes attributes including: SoftDelete.

### Errors

- **In-script message**: Please set Soft Delete as 'No' to approve Revival!

### Usage / trigger

- **Configuration**: Workflow: "ReviveSoftDeleteWorkflow"
  - **Task/Event**: Workflow State/Task: "Review", Workflow Event: "Approve"

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 199
