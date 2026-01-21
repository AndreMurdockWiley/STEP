## JSON_Util

- **Rule type**: Library
- **Setup group**: Integrations
- **Business area**: Integrations
- **Product type(s) valid to**: All
- **Attribute ID(s)**: TenantID
- **Attribute name(s)**: Various JSON attributes
- **Version**: 1.1
- **Status**: Active
- **Source file(s)**: `Integrations/JSON_Util.js`

### Functional description

JSON Util. It primarily works with attribute(s): TenantID. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: TenantID.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: initialNodeJSON(), getAllValuesAsJSON(), getReferencesAsJSON(), getDataContainers()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 2
