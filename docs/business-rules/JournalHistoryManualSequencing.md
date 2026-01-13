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

Journal History Manual Sequencing. It primarily works with attribute(s): JournalHistoryEndYear, JournalHistorySequenceNumber.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalHistorySequenceNumber, JournalHistoryEndYear.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalHistoryGroup/JournalHistoryManualSequencing.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferencedBy(), getValue(), sort(), reverse(), forEach()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 47
