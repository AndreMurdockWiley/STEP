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

Publication Year Functions. It primarily works with attribute(s): ContinuousNumbering, JournalLastPublicationYear, JournalMediaCode, JournalPublicationYear, ProductPublicationYear.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Electronic", continue; otherwise error.
- Reads/writes attributes including: JournalMediaCode, ContinuousNumbering, ProductPublicationYear, JournalPublicationYear, JournalLastPublicationYear.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Libraries/PublicationYearFunctions.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions, VolumeFunctions
- **Key functions**: createYear(), getNextYear(), getLastPublicationYear(), deletePubYear()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 11
