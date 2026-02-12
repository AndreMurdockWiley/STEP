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

Other Product Date Conversion standardizes legacy IDL/Janis date values into STEP date attributes for Other Product records. When this business action is triggered (Web UI or workflow event), it reads source date values from the IDL date attribute group, converts supported compact date formats into `yyyy-MM-dd`, and updates the corresponding STEP attributes: `ProductPublicationDate`, `ProductContentStartDate`, and `ProductContentEndDate`. No dedicated business validation message is configured for this action.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads date attributes from attribute group `AG_IDL_DATE` on the current object.
- For each non-null source value, converts compact legacy formats to ISO date format:
  - Length `6` (example: `970101`) is treated as `yyMMdd` and expanded to `19yy-MM-dd`.
  - Other supported compact values (example: `1000101`) are treated as a 21st-century pattern and expanded to `20yy-MM-dd`.
- Parses and normalizes the converted value with `SimpleDateFormat("yyyy-MM-dd")`.
- Writes the normalized value to STEP target attributes using this mapping:
  - `IDLProductPublicationDate` -> `ProductPublicationDate`
  - `IDLProductContentStartDate` -> `ProductContentStartDate`
  - `IDLProductContentEndDate` -> `ProductContentEndDate`
- Values from unmapped attributes in `AG_IDL_DATE` are ignored for target writes.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getAttributeGroupByID(), substring(), SimpleDateFormat.parse(), SimpleDateFormat.format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 48
