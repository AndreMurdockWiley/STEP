## HistoryNotesDCAction

- **Rule type**: Business Action
- **Setup group**: JournalHistoryGroup
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalHistoryProducts
- **Product type(s) valid to**: JournalHistoryProducts
- **Attribute ID(s)**: HistoryNotes, HistoryNotesCreatedBy, HistoryNotesCreatedDate, HistoryNotesIsModified, HistoryNotesModifiedBy, HistoryNotesModifiedDate, HistoryNotesType, JournalNotesHistoryUUID
- **Attribute name(s)**: History Notes Created Date, History Notes Created By, History Notes Modified Date, History Notes Modified By, History Notes Type, History Notes, History Notes Is Modified
- **Status**: Active
- **Source file(s)**: `JournalHistoryGroup/HistoryNotesDCAction.js`

### Functional description

History Notes Data Container Action

### Functional logic

- Reads/writes attributes including: HistoryNotesCreatedDate, HistoryNotesCreatedBy, HistoryNotesModifiedDate, HistoryNotesModifiedBy, HistoryNotesType, HistoryNotes, HistoryNotesIsModified, JournalNotesHistoryUUID.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerObjects() custom function, SimpleDateFormat.format(), getCurrentUser()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 108
