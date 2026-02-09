## PublicationYearCreationFinishButton

- **Rule type**: Business Action
- **Business area**: PubYearNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalMediaCode, JournalPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationFinishButton.js`

### Functional description

Creates a new Publication Year for the current journal media record using the entered JournalPublicationYear value, then confirms success to the user and directs them to the appropriate publication-year screen (print or digital) for the newly created year. This action reads the JournalMediaCode to establish media context.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read JournalPublicationYear (and JournalMediaCode for context) from the current journal media node.
- Create the Publication Year object via `PublicationYearFunctions.createYear` using the current node and the year value.
- Display an acknowledgement alert: “Year successfully created!” with the year number.
- Navigate to the relevant Publication Year screen based on media type:
  - `PrintPublicationYearScreen` for `JournalPrintMedia`
  - `DigitalPublicationYearScreen` for `JournalDigitalMedia`

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearNavegationGroup/PublicationYearCreationFinishButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 376
