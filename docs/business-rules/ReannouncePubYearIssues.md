## ReannouncePubYearIssues

- **Rule type**: Business Action
- **Setup group**: ReannouncementGroup
- **Business area**: ReannouncementGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: IssueVolumeNumber
- **Attribute name(s)**: Issue Volume Number
- **Status**: Active
- **Source file(s)**: `ReannouncementGroup/ReannouncePubYearIssues.js`

### Functional description

Reannounce Pub Year Issues

### Functional logic

- Reads/writes attributes including: IssueVolumeNumber.

### Errors

- **Configured error**: Reannouncement not successful! Entered Volume {volumeNum} does not exist In the publication Year {pubname}

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: PublicationYearFunctions (pubLibrary)
- **Key functions**: getSelection(), getParent(), getChildren(), setParent(), showAlert()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 63
