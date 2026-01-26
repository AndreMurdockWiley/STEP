## Journal_Status_Derivation

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: JournalPrintMedia, Journal, JournalDigitalMedia
- **Attribute ID(s)**: DisplayDigitalMediaStatus, DisplayPrintMediaStatus, JournalAcceptingSubmission, JournalStatus
- **Attribute name(s)**: Display Digital Media Status, Display Print Media Status, Journal Accepting Submission, Journal Status
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/Journal_Status_Derivation.js`

### Functional description

Journal Status Derivation. It primarily works with attribute(s): DisplayDigitalMediaStatus, DisplayPrintMediaStatus, JournalAcceptingSubmission, JournalStatus. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: DisplayDigitalMediaStatus, DisplayPrintMediaStatus, JournalAcceptingSubmission, JournalStatus.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/Journal_Status_Derivation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 99
