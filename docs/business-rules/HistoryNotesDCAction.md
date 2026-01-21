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

History Notes Data Container Action. It primarily works with attribute(s): HistoryNotes, HistoryNotesCreatedBy, HistoryNotesCreatedDate, HistoryNotesIsModified, HistoryNotesModifiedBy, HistoryNotesModifiedDate, HistoryNotesType, JournalNotesHistoryUUID. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: HistoryNotesCreatedDate, HistoryNotesCreatedBy, HistoryNotesModifiedDate, HistoryNotesModifiedBy, HistoryNotesType, HistoryNotes, HistoryNotesIsModified, JournalNotesHistoryUUID.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalHistoryGroup/HistoryNotesDCAction.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerObjects() custom function, SimpleDateFormat.format(), getCurrentUser()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 108
