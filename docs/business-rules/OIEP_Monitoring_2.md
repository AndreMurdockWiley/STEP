## OIEP_Monitoring_2

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ActiveBGP
- **Attribute name(s)**: Active BGP
- **Status**: Active
- **Source file(s)**: `Actions/OIEP_Monitoring_2.js`

### Functional description

OIEP_Monitoring_2

### Functional logic

- Reads/writes attributes including: ActiveBGP.

### Errors

- **In-script message**: failed
- **In-script message**: failed.<br> Error:
- **In-script message**: ...... Please refer the Background process ID

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: callStepRESTAPI(), callStepRESTAPIstatus(), jsonKeyValues(), mail().send()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 78
