## AutoClassificationJournals

- **Rule type**: Business Action
- **Setup group**: AutoClassifyRules
- **Business area**: AutoClassifyRules
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalGroupCode
- **Attribute name(s)**: Journal Group Code
- **Status**: Active
- **Source file(s)**: `AutoClassifyRules/AutoClassificationJournals.js`

### Functional description

Auto Classification Journals

### Functional logic

- Reads/writes attributes including: JournalGroupCode.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue(), toUpperCase(), charCodeAt(), getProductByID(), setParent()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 94
