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

OIEP_Monitoring_2. It primarily works with attribute(s): ActiveBGP. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ActiveBGP.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: failed
- **In-script message**: failed.<br> Error:
- **In-script message**: ...... Please refer the Background process ID

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: callStepRESTAPI(), callStepRESTAPIstatus(), jsonKeyValues(), mail().send()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 78
