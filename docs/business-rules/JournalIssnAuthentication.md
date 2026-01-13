## JournalIssnAuthentication

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalMediaCode, JournalTrueStatus, ProductMediaType
- **Source file(s)**: `Conditions/JournalIssnAuthentication.js`

### Functional description

Journal ISSN Authentication

### Functional logic

- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalTrueStatus" == "No", apply the corresponding branch logic.
- If "ProductMediaType" == "Print", apply the corresponding branch logic.
- If "ProductMediaType" == "Both", apply the corresponding branch logic.
- Reads/writes attributes including: JournalTrueStatus, ProductMediaType, JournalMediaCode.

### Errors

- **In-script message**: Invalid ISSN - Expecting

### Usage / trigger

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 242
