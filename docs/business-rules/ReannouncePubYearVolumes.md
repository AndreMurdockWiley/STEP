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

Reannounce Pub Year Volumes. It primarily works with attribute(s): PHPublicationYear.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Calls: pubLibrary.createYear.

### Errors

—

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
