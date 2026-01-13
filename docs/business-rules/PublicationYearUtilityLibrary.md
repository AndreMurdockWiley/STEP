## PublicationYearUtilityLibrary

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalPrintPublicationYear, JournalDigitalPublicationYear
- **Attribute ID(s)**: ContinuousNumbering, CreateIssueTypeIDL, IssueNumber, IssuePubSequence, IssueSentToSAP, IssueType, IssueVolumeNumber, JournalGroupCode, JournalMediaCode, JournalNumberOfVolumes, JournalPublicationYear, JournalStartingVolume, NumberOfIssues, ProductPublicationYear, VolumeGroupPublicationSet
- **Attribute name(s)**: Various year attributes
- **Version**: Legacy
- **Status**: Deprecated
- **Source file(s)**: `Libraries/PublicationYearUtilityLibrary.js`

### Functional description

Publication Year Utility Library (OLD)

### Functional logic

- Plugin: JavaScriptBusinessLibrary.
- Locate workflow instance "VolumeIssueCreationWF".
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- Reads/writes attributes including: JournalGroupCode, JournalMediaCode, ContinuousNumbering, ProductPublicationYear, VolumeGroupPublicationSet, JournalPublicationYear, CreateIssueTypeIDL, IssueVolumeNumber, IssueNumber, IssuePubSequence.

### Errors

- **In-script message**: Can't Delete the Publication Year. There is an issue that had been sent to SAP

### Usage / trigger

- **Configuration**: Workflow: "VolumeIssueCreationWF"
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getJournal(), createYear(), createVolume(), createIssue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 12
