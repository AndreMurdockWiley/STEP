## UpdateDigitalISSNKey

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: JournalDigitalMedia
- **Product type(s) valid to**: JournalDigitalMedia
- **Attribute ID(s)**: JournalTrueStatus, ProductMediaType
- **Attribute name(s)**: Product ISSN, Journal True Status, Product Media Type
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js`

### Functional description

Update Digital ISSN Key. It primarily works with attribute(s): JournalTrueStatus, ProductMediaType. If validation fails, the user sees an error message such as: "ISSN authentication failed (returned from authentication function)".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalTrueStatus, ProductMediaType.

### Errors

- **Configured error**: ISSN authentication failed (returned from authentication function)

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: issnAuthentication, setValueToKeyAttribute, getBusinessActionByID, execute, addError

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 188
