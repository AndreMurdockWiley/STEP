## AutomaticPubYearVolumesIssuesCreation

- **Rule type**: Business Action
- **Setup group**: PubYearUpsertGroup
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: Copy_Continuous_Number, Copy_Volume_Interval_offset, JournalContinuousNumbering, JournalMergedIssues, JournalVolumeIntervalOffset
- **Attribute name(s)**: Journal Continuous Numbering, Journal Volume Interval Offset, Journal Merged Issues, Copy Continuous Number, Copy Volume Interval Offset
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/AutomaticPubYearVolumesIssuesCreation.js`

### Functional description

Automatic Pub Year/Volumes/Issues Creation. It primarily works with attribute(s): Copy_Continuous_Number, Copy_Volume_Interval_offset, JournalContinuousNumbering, JournalMergedIssues, JournalVolumeIntervalOffset. If validation fails, the user sees an error message such as: "As this journal has merged issues in the latest publication year, so Auto Creation is not possible. Kindly act on it manually.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalMergedIssues" == "No", apply the corresponding branch logic.
- Reads/writes attributes including: JournalContinuousNumbering, JournalVolumeIntervalOffset, JournalMergedIssues, Copy_Continuous_Number, Copy_Volume_Interval_offset.

### Errors

- **Configured error**: As this journal has merged issues in the latest publication year, so Auto Creation is not possible. Kindly act on it manually.

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: —
  - **Task/Event**: Event: AutoPubYearVolumesIssuesCreation_Event

### Dependencies / key functions

- **Dependencies**: PublicationYearFunctions (pubLibrary), IssueFunctions (issueLibrary), VolumeFunctions (volumeLibrary)
- **Key functions**: Automatic structure creation

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 19
