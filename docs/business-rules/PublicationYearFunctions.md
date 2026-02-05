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

Business library of helper functions used by journal publication-year rules. It creates or retrieves publication-year child products under a journal media node (print or electronic), sets the core publication-year attributes, and supports looking up the last publication year, computing the next year, deleting a year with its volumes, and copying print years to the electronic media. It primarily works with attribute(s): ContinuousNumbering, JournalLastPublicationYear, JournalMediaCode, JournalPublicationYear, ProductPublicationYear and does not raise user-facing validation errors by itself.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- createYear(journalMedia, newYear) chooses the publication-year object type based on JournalMediaCode ("Print" => JournalPrintPublicationYear, otherwise JournalDigitalPublicationYear), checks for an existing child with ProductPublicationYear == newYear, and if missing creates one, sets Name and ProductPublicationYear to newYear, sets ContinuousNumbering to "No", then approves and returns it.
- getNextYear(journalMedia) returns JournalPublicationYear + 1.
- getLastPublicationYear(journalMedia) scans children and returns the one whose ProductPublicationYear matches JournalLastPublicationYear, or null if none.
- pubYearDeleteCheck(pubYearProduct) iterates volume children and returns false if any volume fails volumeFunctions.volumeDeleteCheck; true otherwise.
- deletePubYear(pubYearProduct) deletes all volume children via volumeFunctions.deleteVolume, then deletes and approves the publication-year node.
- yearCopyToOnline(printPubYear) locates the sibling journal media with JournalMediaCode "Electronic", creates the same ProductPublicationYear under it using createYear, approves, and returns it.
- Reads/writes attributes including: JournalMediaCode, ContinuousNumbering, ProductPublicationYear, JournalPublicationYear, JournalLastPublicationYear.

### Errors

- **Configured error**: N/A (Business Action).

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
