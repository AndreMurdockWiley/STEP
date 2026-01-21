## JSON_Utility_Library

- **Rule type**: Library
- **Setup group**: Integrations
- **Business area**: Integrations
- **Product type(s) valid to**: All
- **Attribute ID(s)**: Various
- **Attribute name(s)**: Various attributes
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Integrations/JSON_Utility_Library.js`

### Functional description

JSWA_Utility_Library. It primarily works with attribute(s): Various. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: retrieveInheritedAttributeLinks(), getAllValuesAsJSON(), getArrayFromMultiValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 10
