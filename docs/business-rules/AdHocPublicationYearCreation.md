## AdHocPublicationYearCreation

- **Rule type**: Business Action
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode, JournalPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/AdHocPublicationYearCreation.js`

### Functional description

Ad Hoc Publication Year Creation

### Functional logic

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- Calls: pubLibrary.createYear.
- Reads/writes attributes including: JournalPublicationYear, IssueType, IssueSAPMaterialNumber, IssueVolumeNumber, JournalMediaCode.

### Errors

- **In-script message**: An issue already exists with this Volume and issue number

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 378
