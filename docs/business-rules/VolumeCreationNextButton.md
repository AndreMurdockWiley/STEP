## VolumeCreationNextButton

- **Rule type**: Business Action
- **Business area**: VolumesNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CopyToOnline, CreateIssueTypeIDL, JournalMediaNumberOfVolumes, JournalNumberOfVolumes, JournalStartingVolume
- **Source file(s)**: `VolumesGroup/VolumesNavegationGroup/VolumeCreationNextButton.js`

### Functional description

Volume Creation/Next Button

### Functional logic

- If "CopyToOnline" == "Yes", apply the corresponding branch logic.
- Calls: volumeLibrary.createVolume, volumeLibrary.volumeCopyToOnline.
- Reads/writes attributes including: CopyToOnline, JournalNumberOfVolumes, JournalMediaNumberOfVolumes, JournalStartingVolume, CreateIssueTypeIDL.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 390
