## BA_ValidateHistoryOrigin

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalHistoryProducts
- **Product type(s) valid to**: JournalHistoryProducts
- **Attribute ID(s)**: HistoryOrigin
- **Attribute name(s)**: History Origin
- **Status**: Active
- **Source file(s)**: `Actions/BA_ValidateHistoryOrigin.js`

### Functional description

BA_ValidateHistoryOrigin

### Functional logic

- If "HistoryOrigin" == "Web UI Navigation", apply the corresponding branch logic.
- If "HistoryOrigin" == "Regular Workflow", apply the corresponding branch logic.
- If "HistoryOrigin" == "Web UI Navigation", apply the corresponding branch logic.
- Reads/writes attributes including: HistoryOrigin.

### Errors

- **Configured error**: To update History origin as Web UI Navigation, Please follow below steps: 1. Update History origin to regular workflow and click save 2. Remove all History transition reference. Kindly update/remove History products having History origin as Web UI Navigation to save/submit
- **In-script message**: To update History origin as Web UI Navigation, Please follow below steps
 1. Update History origin to regular workflow and click save
 2. Remove all History transition reference

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, getReferenceTypeByID, getReferences, getTarget, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 139
