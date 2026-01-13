## BA_ReviveSoftDelete

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: JournalHistoryProducts
- **Source file(s)**: `Actions/BA_ReviveSoftDelete.js`

### Functional description

Revive Soft Delete. It is triggered from: Business action (triggered via Web UI button / workflow event / configured action). If validation fails, the user sees an error message such as: "- Cannot initiate because object is in Journal Creation Workflow".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Navigate the user to the Web UI homepage.

### Errors

- **In-script message**: - Cannot initiate because object is in Journal Creation Workflow
- **In-script message**: - Cannot initiate because object is in Soft Delete Workflow
- **In-script message**: - Cannot initiate because object is already in Revive Soft Delete Workflow

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 209
