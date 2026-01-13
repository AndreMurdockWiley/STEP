## AdHocVolumeCreation

- **Rule type**: Business Action
- **Setup group**: VolumesUpsertGroup
- **Business area**: VolumesUpsertGroup
- **Data model object valid to**: JournalPrintPublicationYear, JournalDigitalPublicationYear
- **Product type(s) valid to**: JournalPrintPublicationYear, JournalDigitalPublicationYear
- **Attribute ID(s)**: IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode, JournalStartingVolume
- **Attribute name(s)**: Journal Starting Volume, Issue Type, Issue SAP Material Number, Issue Volume Number, Journal Media Code
- **Status**: Active
- **Source file(s)**: `VolumesGroup/VolumesUpsertGroup/AdHocVolumeCreation.js`

### Functional description

Ad Hoc Volume Creation

### Functional logic

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- Calls: volumeLibrary.createVolume.
- Reads/writes attributes including: JournalStartingVolume, IssueType, IssueSAPMaterialNumber, IssueVolumeNumber, JournalMediaCode.

### Errors

- **Configured error**: An issue already exists with this Volume and issue number

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: VolumeFunctions (volumeLibrary)
- **Key functions**: createVolume, getParent, getValue, showAlert, pad, getObjectByKey

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 189
