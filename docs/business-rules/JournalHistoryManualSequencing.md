## JournalHistoryManualSequencing

- **Rule type**: Business Action
- **Setup group**: JournalHistoryGroup
- **Business area**: JournalHistoryGroup
- **Data model object valid to**: JournalHistoryProducts
- **Product type(s) valid to**: JournalHistoryProducts
- **Attribute ID(s)**: JournalHistoryEndYear, JournalHistorySequenceNumber
- **Attribute name(s)**: Journal History Sequence Number, Journal History End Year
- **Status**: Active
- **Source file(s)**: `JournalHistoryGroup/JournalHistoryManualSequencing.js`

### Functional description

Journal History Manual Sequencing

### Functional logic

- Reads/writes attributes including: JournalHistorySequenceNumber, JournalHistoryEndYear.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferencedBy(), getValue(), sort(), reverse(), forEach()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 47
