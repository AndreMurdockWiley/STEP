## Import_Issues_Manual_V2

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IDLIssueFromIssueNumber, IDLIssueFromVolume, IDLIssueFurtherDescription, IDLIssueId, IDLIssueJpcmsId, IDLIssueProductionIdentifier, IDLIssuePubSequence, IDLIssuePublicationType, IDLIssueReportingYear, IDLIssueSapMaterialNumber, IDLIssueStatus, IDLIssueSupplementNo, IDLIssueTitle, IDLIssueToIssueNumber, IDLIssueType, IDLIssueVolumeNumber, IDLProductPublicationYear, IDLVolumeGroupFtePricingForYear, IDLVolumeGroupScheduledNumberOfIssues, IssueFromIssueNumber, IssueFromVolume, IssueFurtherDescription, IssueId, IssueJpcmsId, IssueNumber, IssueProductionIdentifier, IssuePubSequence, IssuePublicationType, IssueReportingYear, IssueSAPMaterialNumber, IssueStatus, IssueSupplementNo, IssueTitle, IssueToIssueNumber, IssueType, IssueVolumeNumber, JANISIssueRunDate, JANISProductOriginalPublicationDate, JANISProductRevisedPublicationDate, JournalMediaCode, ProductPublicationYear, ScheduledNoOfIssuesYear, VolumeGroupFtePricingForYear
- **Attribute name(s)**: Journal Media Code, Product Publication Year, Volume Group Scheduled Number Of Issues, Issue Title, Issue ID, JANIS Issue Run Date, Issue Status, Issue Type, Issue JPCMS ID, Product Original Publication Date, Issue Publication Type, Issue Pub Sequence, Issue Reporting Year, Product Revised Publication Date, Issue SAP Material Number, Issue Production Identifier, Issue From Issue Number, Issue From Volume, Issue Further Description, Issue To Issue Number, Issue Supplement No, Issue Volume Number
- **Status**: Active
- **Source file(s)**: `Actions/Import_Issues_Manual_V2.js`

### Functional description

Import Issues Manual_V2. It primarily works with attribute(s): IDLIssueFromIssueNumber, IDLIssueFromVolume, IDLIssueFurtherDescription, IDLIssueId, IDLIssueJpcmsId, IDLIssueProductionIdentifier, IDLIssuePubSequence, IDLIssuePublicationType, IDLIssueReportingYear, IDLIssueSapMaterialNumber, IDLIssueStatus, IDLIssueSupplementNo, IDLIssueTitle, IDLIssueToIssueNumber, IDLIssueType, IDLIssueVolumeNumber, IDLProductPublicationYear, IDLVolumeGroupFtePricingForYear, IDLVolumeGroupScheduledNumberOfIssues, IssueFromIssueNumber, IssueFromVolume, IssueFurtherDescription, IssueId, IssueJpcmsId, IssueNumber, IssueProductionIdentifier, IssuePubSequence, IssuePublicationType, IssueReportingYear, IssueSAPMaterialNumber, IssueStatus, IssueSupplementNo, IssueTitle, IssueToIssueNumber, IssueType, IssueVolumeNumber, JANISIssueRunDate, JANISProductOriginalPublicationDate, JANISProductRevisedPublicationDate, JournalMediaCode, ProductPublicationYear, ScheduledNoOfIssuesYear, VolumeGroupFtePricingForYear. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalMediaCode, IDLProductPublicationYear, IDLVolumeGroupFtePricingForYear, IDLVolumeGroupScheduledNumberOfIssues, IDLIssueTitle, IDLIssueId, JANISIssueRunDate, IDLIssueStatus, IDLIssueType, IDLIssueJpcmsId.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Key functions**: createProduct, setName, setValue, getChildren

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 153
