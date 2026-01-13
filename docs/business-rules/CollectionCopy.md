## CollectionCopy

- **Rule type**: Business Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode
- **Attribute name(s)**: Collection Year
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionCopy.js`

### Functional description

Collection Copy

### Functional logic

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- Calls: collectionLibrary.copyCollection.
- Reads/writes attributes including: IssueType, IssueSAPMaterialNumber, IssueVolumeNumber, JournalMediaCode.

### Errors

- **Configured error**: An issue already exists with this Volume and issue number

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: CollectionFunctions (collectionLibrary)
- **Key functions**: copyCollection(), showAlert(), navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 61
