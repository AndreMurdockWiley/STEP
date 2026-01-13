## Import_Issues_Manual_V5

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IDLIssueDOI, IDLIssueFromIssueNumber, IDLIssueFromVolume, IDLIssueFurtherDescription, IDLIssueId, IDLIssueJpcmsId, IDLIssueProductionIdentifier, IDLIssuePubSequence, IDLIssuePublicationType, IDLIssueReportingYear, IDLIssueSapMaterialNumber, IDLIssueStatus, IDLIssueSupplementNo, IDLIssueTitle, IDLIssueToIssueNumber, IDLIssueType, IDLIssueVolumeNumber, IDLJournalProductionIssueCode, IDLProductPublicationYear, IDLVolumeGroupFtePricingForYear, IDLVolumeGroupScheduledNumberOfIssues, IssueDoi, IssueFromIssueNumber, IssueFromVolume, IssueFurtherDescription, IssueId, IssueJpcmsId, IssueNumber, IssueProductionIdentifier, IssuePubSequence, IssuePublicationType, IssueReportingYear, IssueSAPMaterialNumber, IssueStatus, IssueSupplementNo, IssueTitle, IssueToIssueNumber, IssueType, IssueVolumeNumber, JANISIssueRunDate, JANISProductOriginalPublicationDate, JANISProductRevisedPublicationDate, JournalMediaCode, JournalProductionIssueCode, ProductPublicationYear, ScheduledNoOfIssuesYear, VolumeGroupFtePricingForYear
- **Attribute name(s)**: Journal Media Code, Publication Year, Scheduled Number of Issues, Issue Title, Issue ID, Issue Run Date, Issue Status, Issue Type, Issue Volume Number
- **Status**: Active
- **Source file(s)**: `Actions/Import_Issues_Manual_V5.js`

### Functional description

Import Issues Manual_V5

### Functional logic

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- If "JournalMediaCode" == "Electronic", apply the corresponding branch logic.
- If "IDLIssueType" == "Standard Issue", apply the corresponding branch logic.
- If "IDLIssueType" == "Merged Issue", apply the corresponding branch logic.
- If "IDLIssueType" == "Supplement", apply the corresponding branch logic.
- Reads/writes attributes including: JournalMediaCode, IDLProductPublicationYear, IDLVolumeGroupFtePricingForYear, IDLVolumeGroupScheduledNumberOfIssues, IDLIssueTitle, IDLIssueId, JANISIssueRunDate, IDLIssueStatus, IDLIssueType, IDLIssueJpcmsId.

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getChildren(), createProduct(), setName(), getValue(), setValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 49
