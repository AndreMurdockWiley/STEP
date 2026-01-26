## BA_RejectSoftDeleteButton

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: JournalHistoryProducts
- **Attribute ID(s)**: SoftDelete
- **Source file(s)**: `Actions/BA_RejectSoftDeleteButton.js`

### Functional description

In workflow "SoftDeleteWorkflow" at task/state "Review", triggers event "Cancel" when "SoftDelete" == "No" and navigates the user to the Web UI homepage; otherwise shows an error. It primarily works with attribute(s): SoftDelete. It is triggered from: Workflow: "SoftDeleteWorkflow" (Workflow State/Task: "Review", Workflow Event: "Cancel"). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Locate workflow instance "SoftDeleteWorkflow".
- Locate task/state "Review".
- If "SoftDelete" == "No", continue; otherwise error.
- Trigger workflow event "Cancel".
- Navigate the user to the Web UI homepage.
- Reads/writes attributes including: SoftDelete.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: Please set Soft Delete as 'No' to reject Soft Delete!

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Workflow: "SoftDeleteWorkflow"
  - **Task/Event**: Workflow State/Task: "Review", Workflow Event: "Cancel"

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 207
