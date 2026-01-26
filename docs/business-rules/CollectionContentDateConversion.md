## CollectionContentDateConversion

- **Rule type**: Business Action
- **Setup group**: CollectionsGroup
- **Business area**: CollectionsGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: CollectionCode, ComponentContentLicenseEndDate, ComponentContentLicenseStartDate, DigitalJournalCode, JanisComponentContentLicenseEndDate, JanisComponentContentLicenseStartDate
- **Attribute name(s)**: Component Content License Start Date, Component Content License End Date
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionContentDateConversion.js`

### Functional description

Collection Content Date Conversion. It primarily works with attribute(s): CollectionCode, ComponentContentLicenseEndDate, ComponentContentLicenseStartDate, DigitalJournalCode, JanisComponentContentLicenseEndDate, JanisComponentContentLicenseStartDate. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ComponentContentLicenseStartDate, CollectionCode, DigitalJournalCode, JanisComponentContentLicenseStartDate, JanisComponentContentLicenseEndDate, ComponentContentLicenseEndDate.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionContentDateConversion.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferences(), getAttributeGroupByID(), substring(), SimpleDateFormat.parse(), SimpleDateFormat.format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 103
