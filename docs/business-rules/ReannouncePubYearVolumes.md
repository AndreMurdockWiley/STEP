## ReannouncePubYearVolumes

- **Rule type**: Business Action
- **Setup group**: ReannouncementGroup
- **Business area**: ReannouncementGroup
- **Data model object valid to**: JournalDigitalVolumes, Journal, JournalDigitalIssues
- **Product type(s) valid to**: JournalDigitalVolumes, Journal, JournalDigitalIssues
- **Attribute ID(s)**: PHPublicationYear
- **Attribute name(s)**: Publication Year
- **Status**: Active
- **Source file(s)**: `ReannouncementGroup/ReannouncePubYearVolumes.js`

### Functional description

Moves selected digital volumes to a new publication year. The user supplies the target
publication year (PHPublicationYear), the rule creates that year under the existing
publication-year parent, approves it, and re-parents each selected volume to the new year.
If the original publication year is left with no volumes, the empty year is deleted and the
user is notified and redirected to the newly created year.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Iterates over the UI selection (each selected JournalDigitalVolumes node).
- Captures the current publication year (parent) and its parent container.
- Creates the target publication year using the provided PHPublicationYear and
  `pubLibrary.createYear`, then approves the new year.
- Re-parents the selected volume to the new year and approves the volume.
- Shows an acknowledgement message for the reannouncement.
- If the original publication year now has no children, deletes and approves the empty year,
  shows a message indicating the deletion, and navigates to the new year screen.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ReannouncementGroup/ReannouncePubYearVolumes.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: PublicationYearFunctions (pubLibrary)
- **Key functions**: createYear(), getChildren(), setParent(), delete(), approve(), navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 70
