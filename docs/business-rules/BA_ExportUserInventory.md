## BA_ExportUserInventory

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Status**: Active
- **Source file(s)**: `Actions/BA_ExportUserInventory.js`

### Functional description

Export User List

### Functional logic

—

### Errors

- **Configured error**: Info: Success - User List is sent in an Email
- **In-script message**: Dear User, <br><br> Please find the User List attached to this email.<br><br> Thank You.<br><br>This is an automatically generated e-mail. Please do not reply.

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Key functions**: fsendEmailWithAttachment, maskCSVValue, createAsset, upload, mail

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 165
