## VolumeFunctions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalPrintVolumes, JournalDigitalVolumes
- **Attribute ID(s)**: IssueFromIssueNumber, IssueRunDate, IssueVolumeNumber, JournalMediaCode, ProductPublicationYear
- **Attribute name(s)**: Issue Volume Number, Journal Media Code
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Libraries/VolumeFunctions.js`

### Functional description

Volume Functions

### Functional logic

- Plugin: JavaScriptBusinessLibrary.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Electronic", continue; otherwise error.
- Reads/writes attributes including: JournalMediaCode, IssueVolumeNumber, ProductPublicationYear, IssueRunDate, IssueFromIssueNumber.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions, IssueFunctions
- **Key functions**: createVolume(), volumeDeleteCheck(), deleteVolume(), volumeCopyToOnline()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 8
