## Issue_Creation

- **Rule type**: Business Action
- **Business area**: WileyPOCRules
- **Data model object valid to**: All
- **Attribute ID(s)**: IDLJournalPublicationSet, IssueVolumeNumber, JournalMediaCode, JournalNumberOfVolumes, JournalPublicationYear, JournalStartingVolume, NumberOfIssues, VolumeGroupPubSet, VolumeGroupVolumesInPubSet, WIL_SortNumber
- **Source file(s)**: `WileyPOCRules/Issue_Creation.js`

### Functional description

BA for Wiley Demo

### Functional logic

- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- Reads/writes attributes including: JournalMediaCode, WIL_SortNumber, IssueVolumeNumber, VolumeGroupVolumesInPubSet, VolumeGroupPubSet, JournalNumberOfVolumes, NumberOfIssues, JournalStartingVolume, JournalPublicationYear, IDLJournalPublicationSet.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 392
