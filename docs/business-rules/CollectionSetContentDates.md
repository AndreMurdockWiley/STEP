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

Validates that "CollectionType" = "Database Model Collections". It primarily works with attribute(s): CollectionType, CollectionHeaderContentStartDate, CollectionHeaderContentEndDate.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Validate: "CollectionType" = "Database Model Collections".
- Reads/writes attributes including: CollectionType.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionUpsertGroup/CollectionSetContentDates.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 120
