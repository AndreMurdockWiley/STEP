## PopulateAvailableOnOTISAlert

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalAvailableOnOtis
- **Attribute name(s)**: Journal Available On OTIS
- **Status**: Deprecated
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateAvailableOnOTISAlert.js`

### Functional description

PopulateAvailableOnOTISAlert

### Functional logic

- If "JournalAvailableOnOtis" == "y", apply the corresponding branch logic.
- If "JournalAvailableOnOtis" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalAvailableOnOtis.

### Errors

- **Configured error**: WARNING: Available On OTIS should be either 'Y' or 'N' or 'Blank'

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 190
