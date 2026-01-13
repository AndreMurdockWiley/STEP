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

Validates that "CollectionType" = "Database Model Collections". It primarily works with attribute(s): CollectionHeaderContentEndDate, CollectionHeaderContentStartDate, ComponentContentLicenseEndDate, ComponentContentLicenseStartDate.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Validate: "CollectionType" = "Database Model Collections".
- Reads/writes attributes including: CollectionType, CollectionHeaderContentStartDate, CollectionHeaderContentEndDate, ComponentContentLicenseStartDate, ComponentContentLicenseEndDate.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionValidFromPopulate.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions
- **Key functions**: getReferences(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 121
