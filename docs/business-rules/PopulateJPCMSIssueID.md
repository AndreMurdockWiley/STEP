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

PopulateJPCMSIssueID

### Functional logic

- If "JournalTrueStatus" == "No", apply the corresponding branch logic.
- Reads/writes attributes including: JournalTrueStatus, JournalGroupCode, IssueVolumeNumber, IssueFromIssueNumber, IssueJpcmsId, IDLIssueDOI, IssueDoi.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: Group Issue Functions (link)
- **Key functions**: getValue, setSimpleValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 184
