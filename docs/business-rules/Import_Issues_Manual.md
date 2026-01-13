## Import_Issues_Manual

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IDLIssueFromIssueNumber, IDLIssueFromVolume, IDLIssueFurtherDescription, IDLIssueId, IDLIssueJpcmsId, IDLIssueProductionIdentifier, IDLIssuePubSequence, IDLIssuePublicationType, IDLIssueReportingYear, IDLIssueSapMaterialNumber, IDLIssueStatus, IDLIssueSupplementNo, IDLIssueTitle, IDLIssueToIssueNumber, IDLIssueType, IDLIssueVolumeNumber, IDLProductPublicationYear, IDLVolumeGroupFtePricingForYear, IDLVolumeGroupScheduledNumberOfIssues, IssueFromIssueNumber, IssueFromVolume, IssueFurtherDescription, IssueId, IssueJpcmsId, IssueNumber, IssueProductionIdentifier, IssuePubSequence, IssuePublicationType, IssueReportingYear, IssueSAPMaterialNumber, IssueStatus, IssueSupplementNo, IssueTitle, IssueToIssueNumber, IssueType, IssueVolumeNumber, JANISIssueRunDate, JANISProductOriginalPublicationDate, JANISProductRevisedPublicationDate, JournalMediaCode, ProductPublicationYear, ScheduledNoOfIssuesYear, VolumeGroupFtePricingForYear
- **Attribute name(s)**: Journal Media Code, IDL Product Publication Year, IDL Volume Group Scheduled Number Of Issues, Issue Title, IDL Issue Id, JANIS Issue Run Date, IDL Issue Status, IDL Issue Type, IDL Issue JPCMS Id, JANIS Product Original Publication Date, IDL Issue Publication Type, IDL Issue Pub Sequence, IDL Issue Reporting Year, JANIS Product Revised Publication Date, IDL Issue SAP Material Number, IDL Issue Production Identifier, IDL Issue From Issue Number, IDL Issue From Volume, IDL Issue Further Description, IDL Issue To Issue Number, IDL Issue Supplement No, IDL Issue Volume Number, Issue Volume Number, Product Publication Year, Scheduled No Of Issues Year
- **Status**: Active
- **Source file(s)**: `Actions/Import_Issues_Manual.js`

### Functional description

Import Issues Manual

### Functional logic

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- If "JournalMediaCode" == "Electronic", apply the corresponding branch logic.
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
- **Row(s) (0-based in data block)**: 178
