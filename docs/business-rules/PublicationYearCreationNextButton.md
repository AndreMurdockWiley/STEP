## PublicationYearCreationNextButton

- **Rule type**: Business Action
- **Business area**: PubYearNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalMediaCode, JournalPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationNextButton.js`

### Functional description

Creates a new Publication Year from the current record and then advances the UI to the next step in the workflow. The action uses the value in **JournalPublicationYear** (and reads **JournalMediaCode** for context) to create the year via the publication-year library, confirms success with an acknowledgement message, and navigates the user to the Volumes Creation screen for the newly created year.

### Functional logic

- Read **JournalPublicationYear** (and **JournalMediaCode** for context) from the current node.
- Call the publication-year library to create the new year record based on the current node and year value.
- Show an acknowledgement message: "Year {year} has been created. Continuing Process with Volume Creation."
- Navigate the UI to **VolumesCreationScreen**, passing the newly created year object as the target.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearNavegationGroup/PublicationYearCreationNextButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 377
