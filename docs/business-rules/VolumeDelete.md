## VolumeDelete

- **Rule type**: Business Action
- **Business area**: VolumesDeleteGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: C_IssueDeletedDate, C_IssueState, C_LastUpdated, C_MessageStatus, IssueState
- **Source file(s)**: `VolumesGroup/VolumesDeleteGroup/VolumeDelete.js`

### Functional description

Volume Delete

### Functional logic

- If "IssueState" == "Draft", apply the corresponding branch logic.
- If "IssueState" == "Enriched", apply the corresponding branch logic.
- Calls: volumeLibrary.volumeDeleteCheck, volumeLibrary.deleteVolume, issueLibrary.issueDeleteCheck, issueLibrary.deleteIssue.
- Reads/writes attributes including: IssueState, C_IssueState, C_MessageStatus, C_IssueDeletedDate, C_LastUpdated.

### Errors

- **In-script message**: The Following Volume(s) can't be deleted.
- **In-script message**: can't be deleted

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 387
