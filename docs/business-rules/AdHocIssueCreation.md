## AdHocIssueCreation

- **Rule type**: Business Action
- **Setup group**: IssuesUpsertGroup
- **Business area**: IssuesUpsertGroup
- **Data model object valid to**: JournalDigitalVolumes, JournalPrintVolumes
- **Product type(s) valid to**: JournalDigitalVolumes, JournalPrintVolumes
- **Attribute ID(s)**: IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode, StartingIssueNumber, StartingIssueNumberVolume, StartingPubSequenceMedia, StartingSupplementNoVolume, StartingSupplementNoYear
- **Attribute name(s)**: Number of Issues, Issue Type, Continuous Numbering, Starting Issue Number
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesUpsertGroup/AdHocIssueCreation.js`

### Functional description

Ad Hoc Issue Creation

### Functional logic

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- Calls: issueLibrary.createIssue.
- Reads/writes attributes including: StartingPubSequenceMedia, StartingIssueNumber, StartingIssueNumberVolume, StartingSupplementNoYear, StartingSupplementNoVolume, IssueType, IssueSAPMaterialNumber, IssueVolumeNumber, JournalMediaCode.

### Errors

- **Configured error**: An issue already exists with this Volume and issue number

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: PublicationYearFunctions (pubLibrary), VolumeFunctions (volumeLibrary), JournalFunctions (journalLibrary), IssueFunctions (issueLibrary)
- **Key functions**: createIssue(), showAlert(), pad()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 58
