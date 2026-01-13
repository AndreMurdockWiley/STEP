## AdHocPublicationYearCreation

- **Rule type**: Business Action
- **Business area**: PubYearUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode, JournalPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearUpsertGroup/AdHocPublicationYearCreation.js`

### Functional description

Ad Hoc Publication Year Creation. It primarily works with attribute(s): IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode, JournalPublicationYear. If validation fails, the user sees an error message such as: "An issue already exists with this Volume and issue number".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- Calls: pubLibrary.createYear.
- Reads/writes attributes including: JournalPublicationYear, IssueType, IssueSAPMaterialNumber, IssueVolumeNumber, JournalMediaCode.

### Errors

- **In-script message**: An issue already exists with this Volume and issue number

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearUpsertGroup/AdHocPublicationYearCreation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 378
