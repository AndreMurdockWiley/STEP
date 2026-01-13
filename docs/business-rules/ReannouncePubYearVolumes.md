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

Reannounce Pub Year Volumes

### Functional logic

- Calls: pubLibrary.createYear.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: PublicationYearFunctions (pubLibrary)
- **Key functions**: createYear(), getChildren(), setParent(), delete(), approve(), navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 70
