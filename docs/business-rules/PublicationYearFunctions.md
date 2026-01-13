## PublicationYearFunctions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalPrintPublicationYear, JournalDigitalPublicationYear
- **Attribute ID(s)**: ContinuousNumbering, JournalLastPublicationYear, JournalMediaCode, JournalPublicationYear, ProductPublicationYear
- **Attribute name(s)**: Product Publication Year, Journal Publication Year
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Libraries/PublicationYearFunctions.js`

### Functional description

Publication Year Functions

### Functional logic

- Plugin: JavaScriptBusinessLibrary.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Electronic", continue; otherwise error.
- Reads/writes attributes including: JournalMediaCode, ContinuousNumbering, ProductPublicationYear, JournalPublicationYear, JournalLastPublicationYear.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions, VolumeFunctions
- **Key functions**: createYear(), getNextYear(), getLastPublicationYear(), deletePubYear()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 11
