## BA_ExportUserInventory

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Status**: Active
- **Source file(s)**: `Actions/BA_ExportUserInventory.js`

### Functional description

Export User List. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "Info: Success - User List is sent in an Email".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

- **Configured error**: Info: Success - User List is sent in an Email
- **In-script message**: Dear User, <br><br> Please find the User List attached to this email.<br><br> Thank You.<br><br>This is an automatically generated e-mail. Please do not reply.

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Key functions**: fsendEmailWithAttachment, maskCSVValue, createAsset, upload, mail

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 165
