## OtherProductDateConversion

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ProductContentEndDate, ProductContentStartDate, ProductPublicationDate
- **Attribute name(s)**: Product Publication Date, Product Content Start Date, Product Content End Date
- **Status**: Active
- **Source file(s)**: `Actions/OtherProductDateConversion.js`

### Functional description

Other Product Date Conversion. It primarily works with attribute(s): ProductContentEndDate, ProductContentStartDate, ProductPublicationDate. It is triggered from: Business action (triggered via Web UI button / workflow event / configured action).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductPublicationDate, ProductContentStartDate, ProductContentEndDate.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getAttributeGroupByID(), substring(), SimpleDateFormat.parse(), SimpleDateFormat.format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 48
