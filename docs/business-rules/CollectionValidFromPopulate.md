## CollectionValidFromPopulate

- **Rule type**: Business Action
- **Setup group**: CollectionsGroup
- **Business area**: CollectionsGroup
- **Data model object valid to**: MultiJournal
- **Product type(s) valid to**: JournalCollectionsOffering
- **Attribute ID(s)**: CollectionHeaderContentEndDate, CollectionHeaderContentStartDate, ComponentContentLicenseEndDate, ComponentContentLicenseStartDate
- **Attribute name(s)**: Collection Type, Collection Header Content Start Date, Collection Header Content End Date, Component Content License Start Date, Component Content License End Date
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionValidFromPopulate.js`

### Functional description

Validates that "CollectionType" = "Database Model Collections".

### Functional logic

- Validate: "CollectionType" = "Database Model Collections".
- Reads/writes attributes including: CollectionType, CollectionHeaderContentStartDate, CollectionHeaderContentEndDate, ComponentContentLicenseStartDate, ComponentContentLicenseEndDate.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions
- **Key functions**: getReferences(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 121
