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

Collection Copy. It primarily works with attribute(s): IssueSAPMaterialNumber, IssueType, IssueVolumeNumber, JournalMediaCode. If validation fails, the user sees an error message such as: "An issue already exists with this Volume and issue number".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalMediaCode" == "Print", apply the corresponding branch logic.
- Calls: collectionLibrary.copyCollection.
- Reads/writes attributes including: IssueType, IssueSAPMaterialNumber, IssueVolumeNumber, JournalMediaCode.

### Errors

- **Configured error**: An issue already exists with this Volume and issue number

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionUpsertGroup/CollectionCopy.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: CollectionFunctions (collectionLibrary)
- **Key functions**: copyCollection(), showAlert(), navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 61
