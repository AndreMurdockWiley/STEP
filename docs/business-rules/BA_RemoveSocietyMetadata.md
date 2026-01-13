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

BA_RemoveSocietyMetadata. It primarily works with attribute(s): JournalSocietyMembershipInfoNoteId, JournalSocietySpecialSensitivitiesId. It is triggered from: Business action (triggered via Web UI button / workflow event / configured action).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalSocietySpecialSensitivitiesId, JournalSocietyMembershipInfoNoteId.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: Reference processing, attribute clearing, event republishing

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 33
