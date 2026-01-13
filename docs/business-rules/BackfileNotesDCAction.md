## BackfileNotesDCAction

- **Rule type**: Business Action
- **Setup group**: BackfilesUpsertGroup
- **Business area**: BackfilesUpsertGroup
- **Data model object valid to**: Backfiles
- **Product type(s) valid to**: Backfiles
- **Attribute ID(s)**: BackfileNotes, BackfileNotesCreatedBy, BackfileNotesCreatedDate, BackfileNotesIsModified, BackfileNotesModifiedBy, BackfileNotesModifiedDate, BackfileNotesType, JournalNotesBackfileUUID
- **Attribute name(s)**: Backfile Notes Created Date, Backfile Notes Created By, Backfile Notes Modified Date, Backfile Notes Modified By, Backfile Notes Type, Backfile Notes
- **Status**: Active
- **Source file(s)**: `AutoClassifyRules/BackfileNotesDCAction.js`, `BackfilesUpsertGroup/BackfileNotesDCAction.js`

### Functional description

Backfile Notes Data Container Action

### Functional logic

- Reads/writes attributes including: BackfileNotesCreatedDate, BackfileNotesCreatedBy, BackfileNotesModifiedDate, BackfileNotesModifiedBy, BackfileNotesType, BackfileNotes, BackfileNotesIsModified, JournalNotesBackfileUUID.

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
- **Row(s) (0-based in data block)**: 109
