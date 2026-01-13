## CollectionSetContentDates

- **Rule type**: Business Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: CollectionType, CollectionHeaderContentStartDate, CollectionHeaderContentEndDate
- **Attribute name(s)**: Collection Type, Collection Header Content Start Date, Collection Header Content End Date
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionSetContentDates.js`

### Functional description

Validates that "CollectionType" = "Database Model Collections".

### Functional logic

- Validate: "CollectionType" = "Database Model Collections".
- Reads/writes attributes including: CollectionType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 120
