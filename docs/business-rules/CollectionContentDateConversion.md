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

Collection Content Date Conversion

### Functional logic

- Reads/writes attributes including: ComponentContentLicenseStartDate, CollectionCode, DigitalJournalCode, JanisComponentContentLicenseStartDate, JanisComponentContentLicenseEndDate, ComponentContentLicenseEndDate.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferences(), getAttributeGroupByID(), substring(), SimpleDateFormat.parse(), SimpleDateFormat.format()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 103
