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

Status Derivation on Media Objects

### Functional logic

- If "JournalAcceptingSubmission" == "Pre-public Launch", apply the corresponding branch logic.
- If "JournalAcceptingSubmission" == "Pre-public Takeover", apply the corresponding branch logic.
- If "JournalAcceptingSubmission" == "Retro Billing", apply the corresponding branch logic.
- If "JournalAcceptingSubmission" == "Retro Billing", apply the corresponding branch logic.
- If "JournalAcceptingSubmission" == "Retro Billing", apply the corresponding branch logic.
- If "JournalAcceptingSubmission" == "Retro Billing", apply the corresponding branch logic.
- If "DisplayDigitalMediaStatus" == "Current publication", apply the corresponding branch logic.
- If "DisplayPrintMediaStatus" == "Current publication", apply the corresponding branch logic.
- Reads/writes attributes including: DisplayDigitalMediaStatus, DisplayPrintMediaStatus, JournalAcceptingSubmission, JournalStatus.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: Status derivation logic with conditional checks

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 31
