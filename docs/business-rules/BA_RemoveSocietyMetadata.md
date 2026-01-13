## BA_RemoveSocietyMetadata

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: MultiMedia, Journal, MultiJournal
- **Product type(s) valid to**: MultiMedia, Journal, MultiJournal
- **Attribute ID(s)**: JournalSocietyMembershipInfoNoteId, JournalSocietySpecialSensitivitiesId
- **Attribute name(s)**: Journal Society Special Sensitivities Id, Journal Society Membership Info Note Id
- **Version**: 1.1
- **Status**: Active
- **Source file(s)**: `Actions/BA_RemoveSocietyMetadata.js`

### Functional description

BA_RemoveSocietyMetadata

### Functional logic

- Reads/writes attributes including: JournalSocietySpecialSensitivitiesId, JournalSocietyMembershipInfoNoteId.

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: Reference processing, attribute clearing, event republishing

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 33
