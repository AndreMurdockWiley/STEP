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

Audit Stamp Updater

### Functional logic

- Reads/writes attributes including: JournalAuditStamp.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getToday()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 35
