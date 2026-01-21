## BA_EditorialContactOnSave

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: All
- **Attribute ID(s)**: EditorialCodeValue, EditorialContactCode, EditorialContactEmail, EditorialContactFirstName, EditorialContactLastName, EditorialContactStatus
- **Source file(s)**: `Actions/BA_EditorialContactOnSave.js`

### Functional description

BA_EditorialContactOnSave. It primarily works with attribute(s): EditorialCodeValue, EditorialContactCode, EditorialContactEmail, EditorialContactFirstName, EditorialContactLastName, EditorialContactStatus. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: EditorialCodeValue, EditorialContactCode, EditorialContactFirstName, EditorialContactLastName, EditorialContactEmail, EditorialContactStatus.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: is missing. Please provide a value.
- **In-script message**: Please provide status value

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 203
