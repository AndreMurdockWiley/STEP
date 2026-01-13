## VolumeCreationFinishButton

- **Rule type**: Business Action
- **Business area**: VolumesNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CopyToOnline, JournalMediaNumberOfVolumes, JournalNumberOfVolumes, JournalStartingVolume
- **Source file(s)**: `VolumesGroup/VolumesNavegationGroup/VolumeCreationFinishButton.js`

### Functional description

Volume Creation/Finish Button

### Functional logic

- If "CopyToOnline" == "Yes", apply the corresponding branch logic.
- Calls: volumeLibrary.createVolume, volumeLibrary.volumeCopyToOnline.
- Reads/writes attributes including: CopyToOnline, JournalNumberOfVolumes, JournalMediaNumberOfVolumes, JournalStartingVolume.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 389
