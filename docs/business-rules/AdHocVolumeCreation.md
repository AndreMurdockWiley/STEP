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

Ad Hoc Volume Creation. It primarily works with attribute(s): IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode, JournalStartingVolume. If validation fails, the user sees an error message such as: "An issue already exists with this Volume and issue number".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- Calls: volumeLibrary.createVolume.
- Reads/writes attributes including: JournalStartingVolume, IssueType, IssueSAPMaterialNumber, IssueVolumeNumber, JournalMediaCode.

### Errors

- **Configured error**: An issue already exists with this Volume and issue number

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): VolumesGroup/VolumesUpsertGroup/AdHocVolumeCreation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: VolumeFunctions (volumeLibrary)
- **Key functions**: createVolume, getParent, getValue, showAlert, pad, getObjectByKey

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 189
