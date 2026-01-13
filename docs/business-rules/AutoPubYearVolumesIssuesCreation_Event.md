## AutoPubYearVolumesIssuesCreation_Event

- **Rule type**: Business Action
- **Setup group**: PubYearUpsertGroup
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: Copy_Continuous_Number, Copy_Volume_Interval_offset, IssueStatus, IssueType, JournalFinanceProductType, JournalPublicationYear, JournalStartingVolume, ManualAGA, MediaVolumeCount, MultiVolumeJournals, StartingIssueNumber, StartingPubSequenceMedia
- **Attribute name(s)**: Product Status, Journal Finance Product Type, Journal Publication Year, Journal Starting Volume, Starting Issue Number
- **Status**: Active
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/AutoPubYearVolumesIssuesCreation_Event.js`

### Functional description

Automatic Pub Year/Volumes/Issues Creation (EventProcessor). It primarily works with attribute(s): Copy_Continuous_Number, Copy_Volume_Interval_offset, IssueStatus, IssueType, JournalFinanceProductType, JournalPublicationYear, JournalStartingVolume, ManualAGA, MediaVolumeCount, MultiVolumeJournals, StartingIssueNumber, StartingPubSequenceMedia. It is triggered from: Event Processor: "AutoPubYearVolumesIssuesCreation_Event".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "Copy_Continuous_Number" == "Yes", apply the corresponding branch logic.
- If "Copy_Continuous_Number" == "No", apply the corresponding branch logic.
- If "Copy_Continuous_Number" == "No", apply the corresponding branch logic.
- Calls: pubLibrary.getLastPublicationYear, pubLibrary.createYear, volumeLibrary.createVolume, issueLibrary.createIssue.
- Reads/writes attributes including: Copy_Continuous_Number, Copy_Volume_Interval_offset, MultiVolumeJournals, MediaVolumeCount, ManualAGA, JournalFinanceProductType, JournalStartingVolume, StartingIssueNumber, JournalPublicationYear, IssueType.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Event Processor: "AutoPubYearVolumesIssuesCreation_Event"
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: PublicationYearFunctions (pubLibrary), IssueFunctions (issueLibrary), VolumeFunctions (volumeLibrary)
- **Key functions**: getLastPublicationYear(), createYear(), createVolume(), createIssue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 85
