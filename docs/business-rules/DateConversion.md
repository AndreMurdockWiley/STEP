## DateConversion

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalEditorialAuthorServicesEnabldDt, JournalRightsFromWhatDate, JournalStartDate, ProductContentEndDate, ProductContentStartDate
- **Attribute name(s)**: Janis Journal Start Date, Janis Journal Rights From What Date, Janis Journal Content End Date, Janis Journal Content Start Date, Journal Start Date, Journal Rights From What Date, Product Content End Date, Product Content Start Date
- **Status**: Active
- **Source file(s)**: `Actions/DateConversion.js`

### Functional description

Date Conversion. It primarily works with attribute(s): JournalEditorialAuthorServicesEnabldDt, JournalRightsFromWhatDate, JournalStartDate, ProductContentEndDate, ProductContentStartDate. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalEditorialAuthorServicesEnabldDt, JournalStartDate, JournalRightsFromWhatDate, ProductContentEndDate, ProductContentStartDate.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: substring(), SimpleDateFormat(), parse(), format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 174
