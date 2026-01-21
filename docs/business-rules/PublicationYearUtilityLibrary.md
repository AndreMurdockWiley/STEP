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

Publication Year Utility Library (OLD). It primarily works with attribute(s): ContinuousNumbering, CreateIssueTypeIDL, IssueNumber, IssuePubSequence, IssueSentToSAP, IssueType, IssueVolumeNumber, JournalGroupCode, JournalMediaCode, JournalNumberOfVolumes, JournalPublicationYear, JournalStartingVolume, NumberOfIssues, ProductPublicationYear, VolumeGroupPublicationSet. It is triggered from: Workflow: "VolumeIssueCreationWF". If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- Locate workflow instance "VolumeIssueCreationWF".
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- Reads/writes attributes including: JournalGroupCode, JournalMediaCode, ContinuousNumbering, ProductPublicationYear, VolumeGroupPublicationSet, JournalPublicationYear, CreateIssueTypeIDL, IssueVolumeNumber, IssueNumber, IssuePubSequence.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: Can't Delete the Publication Year. There is an issue that had been sent to SAP

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Workflow: "VolumeIssueCreationWF"
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getJournal(), createYear(), createVolume(), createIssue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 12
