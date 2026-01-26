## PopulateJPCMSIssueID

- **Rule type**: Business Action
- **Setup group**: IssuesGroup
- **Business area**: IssuesGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: IDLIssueDOI, IssueDoi, IssueFromIssueNumber, IssueJpcmsId, IssueVolumeNumber, JournalGroupCode, JournalTrueStatus
- **Attribute name(s)**: Journal True Status, Journal Group Code, Issue Volume Number, Issue From Issue Number, Issue JPCMS ID, IDL Issue DOI, Issue DOI
- **Status**: Active
- **Source file(s)**: `IssuesGroup/PopulateJPCMSIssueID.js`

### Functional description

PopulateJPCMSIssueID. It primarily works with attribute(s): IDLIssueDOI, IssueDoi, IssueFromIssueNumber, IssueJpcmsId, IssueVolumeNumber, JournalGroupCode, JournalTrueStatus. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalTrueStatus, JournalGroupCode, IssueVolumeNumber, IssueFromIssueNumber, IssueJpcmsId, IDLIssueDOI, IssueDoi.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/PopulateJPCMSIssueID.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: Group Issue Functions (link)
- **Key functions**: getValue, setSimpleValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 184
