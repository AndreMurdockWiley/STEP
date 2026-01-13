## JournalNotesDCAction

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalNotes, JournalNotesCreatedBy, JournalNotesCreatedDate, JournalNotesIsModified, JournalNotesJournalUUID, JournalNotesModifiedBy, JournalNotesModifiedDate, JournalNotesSendToSAP, JournalNotesType, JournalSAPNotes
- **Attribute name(s)**: Journal Notes Created Date, Journal Notes Created By, Journal Notes Modified Date, Journal Notes Modified By, Journal Notes Send To SAP, Journal Notes Type, Journal Notes
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/JournalNotesDCAction.js`

### Functional description

Journal Notes Data Container Action. It primarily works with attribute(s): JournalNotes, JournalNotesCreatedBy, JournalNotesCreatedDate, JournalNotesIsModified, JournalNotesJournalUUID, JournalNotesModifiedBy, JournalNotesModifiedDate, JournalNotesSendToSAP, JournalNotesType, JournalSAPNotes.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalNotesCreatedDate, JournalNotesCreatedBy, JournalNotesModifiedDate, JournalNotesModifiedBy, JournalNotesSendToSAP, JournalNotesType, JournalNotes, JournalNotesIsModified, JournalNotesJournalUUID, JournalSAPNotes.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/JournalNotesDCAction.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerObjects() custom function, SimpleDateFormat.format(), getCurrentUser()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 110
