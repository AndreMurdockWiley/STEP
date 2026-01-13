## BA_EditorialContactOnSave

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: All
- **Attribute ID(s)**: EditorialCodeValue, EditorialContactCode, EditorialContactEmail, EditorialContactFirstName, EditorialContactLastName, EditorialContactStatus
- **Source file(s)**: `Actions/BA_EditorialContactOnSave.js`

### Functional description

BA_EditorialContactOnSave

### Functional logic

- Plugin: ReferenceOtherBABusinessAction.
- Reads/writes attributes including: EditorialCodeValue, EditorialContactCode, EditorialContactFirstName, EditorialContactLastName, EditorialContactEmail, EditorialContactStatus.
- Parameter "ReferencedBA": BA_EditorialContactSendOIEP

### Errors

- **In-script message**: is missing. Please provide a value.
- **In-script message**: Please provide status value

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 203
