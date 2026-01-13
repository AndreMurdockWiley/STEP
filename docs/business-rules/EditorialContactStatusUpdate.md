## EditorialContactStatusUpdate

- **Rule type**: Business Action
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: EditorialContactStatus, EditorialContactStatusBackend, EditorialContactStatusChangedDate
- **Source file(s)**: `JournalUpsertGroup/EditorialContactStatusUpdate.js`

### Functional description

Validates that "ProductActivated" = "Activated".

### Functional logic

- Validate: "ProductActivated" = "Activated".
- Reads/writes attributes including: EditorialContactStatus, EditorialContactStatusBackend, EditorialContactStatusChangedDate, ProductActivated.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 338
