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

Volume Functions. It primarily works with attribute(s): IssueFromIssueNumber, IssueRunDate, IssueVolumeNumber, JournalMediaCode, ProductPublicationYear. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Electronic", continue; otherwise error.
- Reads/writes attributes including: JournalMediaCode, IssueVolumeNumber, ProductPublicationYear, IssueRunDate, IssueFromIssueNumber.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Libraries/VolumeFunctions.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions, IssueFunctions
- **Key functions**: createVolume(), volumeDeleteCheck(), deleteVolume(), volumeCopyToOnline()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 8
