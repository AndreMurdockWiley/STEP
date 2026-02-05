## Status_Derivation_on_Media_Objects

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: JournalPrintMedia, Journal, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, Journal, JournalDigitalMedia
- **Attribute ID(s)**: DisplayDigitalMediaStatus, DisplayPrintMediaStatus, JournalAcceptingSubmission, JournalStatus
- **Attribute name(s)**: Display Digital Media Status, Display Print Media Status, Journal Accepting Submission, Journal Status
- **Version**: 1.1
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/Status_Derivation_on_Media_Objects.js`

### Functional description

Derives the parent Journal's Journal Status from the Journal Accepting Submission value and the display status values on the related media. When the rule runs on a JournalPrintMedia or JournalDigitalMedia (or the Journal itself), it looks up the parent Journal and updates Journal Status based on the configured precedence across Display Digital Media Status, Display Print Media Status, and Journal Accepting Submission. No user-facing error is configured.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Looks up the parent Journal of the current object and reads: Journal Accepting Submission, Display Digital Media Status, and Display Print Media Status.
- Sets Journal Status to "Not yet published" when Journal Accepting Submission is "Pre-public Launch" or "Pre-public Takeover".
- When Journal Accepting Submission is "Retro Billing", sets Journal Status based on media status values in this order:
  - "Sold/InterCo Transfr" when Display Digital Media Status is "To be sold/Transfrd".
  - "Ceased" when Display Digital Media Status is "To Be Ceased".
  - "Sold/InterCo Transfr" when Display Print Media Status is "To be sold/Transfrd".
  - "Ceased" when Display Print Media Status is "To Be Ceased".
- Otherwise, sets Journal Status to "Current publication" if either media display status equals "Current publication".
- If no special cases match, copies the first non-empty media display status in this order: Display Digital Media Status, then Display Print Media Status.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/Status_Derivation_on_Media_Objects.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: Status derivation logic with conditional checks

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 31
