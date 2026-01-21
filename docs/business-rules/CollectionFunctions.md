## CollectionFunctions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalCollectionsOffering, OtherProductCollectionOffering
- **Attribute ID(s)**: CollectionCode, CollectionStatus, CollectionSubType, CollectionType, CollectionYear, DatabaseCollectionDates, ProductActivated, ProductTitle
- **Attribute name(s)**: Collection Type, Collection Status, Collection Code, Collection Year
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Libraries/CollectionFunctions.js`

### Functional description

Collection Functions. It primarily works with attribute(s): CollectionCode, CollectionStatus, CollectionSubType, CollectionType, CollectionYear, DatabaseCollectionDates, ProductActivated, ProductTitle. It is triggered from: CollectionCreationWF (On creation). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- If "CollectionStatus" == "Inactive", continue; otherwise error.
- If "CollectionStatus" == "Inactive", continue; otherwise error.
- Reads/writes attributes including: CollectionType, CollectionStatus, ProductTitle, CollectionYear, CollectionSubType, CollectionCode, ProductActivated, DatabaseCollectionDates.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: CollectionCreationWF
  - **Task/Event**: On creation

### Dependencies / key functions

- **Dependencies**: GenericFunctions
- **Key functions**: createCollectionYear(), createCollectionSubType(), createCollection()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 15
