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

Journal Status Derivation

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
- **Key functions**: getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 99
