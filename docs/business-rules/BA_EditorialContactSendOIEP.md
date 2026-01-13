## BA_EditorialContactSendOIEP

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: All
- **Source file(s)**: `Actions/BA_EditorialContactSendOIEP.js`

### Functional description

BA_EditorialContactSendOIEP

### Functional logic

- Plugin: ReferenceOtherBCBusinessCondition.
- Parameter "ReferencedBC": BC_EditorialContactSendSAPCondition
- Parameter "ValueWhenReferencedIsNA": false

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 204
