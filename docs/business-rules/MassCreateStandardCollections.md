## MassCreateStandardCollections

- **Rule type**: Business Action
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionSubType, CollectionType, CollectionYear
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`

### Functional description

Mass Create Standard Collections creates the next Standard collection cycle from the user’s current selection. For each selected collection, it validates that the selected **CollectionYear** is the most recent year available for the same **CollectionType** and **CollectionSubType**. When the validation passes, the rule creates a new collection year (`CollectionYear + 1`), creates a **Standard** subtype under that new year, creates the new **Standard** collection, and starts the `CollectionCreationWF` workflow on the newly created collection. If validation fails, the user sees an alert message: "The Collection Year is not the most recent one for that collection Type".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads the current Web UI selection and processes each selected collection independently.
- Calculates `newYear` as the selected `CollectionYear + 1`.
- Traverses collection hierarchy under the same collection type to identify the maximum existing `CollectionYear` for the matching `CollectionType` and `CollectionSubType`.
- Compares the selected record’s `CollectionYear` to the computed max year; if it is not the latest, shows an `ERROR` alert and skips creation for that selection.
- If the selected record is the latest year, creates:
  - a new Collection Year node via `collectionLibrary.createCollectionYear(...)`,
  - a new Standard subtype via `collectionLibrary.createCollectionSubType(..., "Standard")`,
  - and a new Standard collection via `collectionLibrary.createCollection(..., "Standard", newYear)`.
- Starts workflow `CollectionCreationWF` on each newly created collection.
- Reads/writes attributes including: CollectionYear, CollectionSubType, CollectionType.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 223
