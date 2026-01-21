## BA_EditorialContactSendOIEP

- **Rule type**: Business Action
- **Business area**: Actions
- **Data model object valid to**: All
- **Source file(s)**: `Actions/BA_EditorialContactSendOIEP.js`

### Functional description

BA_EditorialContactSendOIEP. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: ReferenceOtherBCBusinessCondition.
- Parameter "ReferencedBC": BC_EditorialContactSendSAPCondition
- Parameter "ValueWhenReferencedIsNA": false

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 204
