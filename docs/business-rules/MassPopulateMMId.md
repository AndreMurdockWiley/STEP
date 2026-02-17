## MassPopulateMMId

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalMMPackageID
- **Attribute name(s)**: Journal MM Package ID
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/MassPopulateMMId.js`

### Functional description

When this business action runs on a Journal, it automatically derives the Journal MM Package ID from the related Multimedia package and writes that ID into `JournalMMPackageID`. In the same flow, it propagates the Journal's Publishing Manager relationship to the Multimedia object so both objects stay aligned for publishing and downstream integrations.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Gets the first child under the current Journal node (treated as Journal Media).
- From that child, follows the `BOMS_TO_JOURNAL_MULTIMEDIA` reference and selects the first related Multimedia source object.
- Reads the Multimedia object's ID and sets Journal attribute `JournalMMPackageID` to that value.
- Reads the first `JournalPublishingManager` reference on the Journal to identify the target Publishing Manager.
- Creates a `JournalPublishingManager` reference from the Multimedia object to the same Publishing Manager.
- Performs no explicit null/empty validation in script; it assumes the required child and references exist.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/MassPopulateMMId.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: queryReferencedBy, queryReferences, createReference

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 157
