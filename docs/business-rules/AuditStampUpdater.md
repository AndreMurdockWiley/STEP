## AuditStampUpdater

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalsProducts, Journal, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalsProducts, Journal, JournalDigitalMedia
- **Attribute ID(s)**: JournalAuditStamp
- **Attribute name(s)**: Journal Audit Stamp
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/AuditStampUpdater.js`

### Functional description

Audit Stamp Updater. It primarily works with attribute(s): JournalAuditStamp.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalAuditStamp.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/AuditStampUpdater.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getToday()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 35
