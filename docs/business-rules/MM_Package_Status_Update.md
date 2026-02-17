## MM_Package_Status_Update

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: JournalDigitalMedia, JournalPrintMedia, MultiMedia
- **Attribute ID(s)**: ProductStatus
- **Attribute name(s)**: Product Status
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `PackageGroup/MM_Package_Status_Update.js`

### Functional description

Synchronizes MultiMedia package `ProductStatus` from the statuses of linked journal media products (`JournalDigitalMedia` and `JournalPrintMedia`).  
When at least one linked journal media item is in a qualifying status, the package status is updated to LOV value `C` and approved so the package reflects an active/usable state for downstream processes.  
This is a Business Action rule, so it performs updates rather than showing user-facing validation errors.

### Functional logic

The rule evaluates `ProductStatus` on journal media and connected MultiMedia packages using reference type `BOMS_TO_JOURNAL_MULTIMEDIA`.

- Runs for object types `JournalDigitalMedia`, `JournalPrintMedia`, and `MultiMedia`.
- For journal media objects, it finds all referencing MultiMedia packages through `BOMS_TO_JOURNAL_MULTIMEDIA`.
- If the journal media `ProductStatus` is populated and not in the excluded set (`N`, `P`, `T`, `R`, `Z`, `B`), it sets the linked package `ProductStatus` to `C` and approves the package.
- If the triggering journal media is in the excluded set, the rule re-checks all journal media linked to that package; if any linked journal media has a non-excluded status, the package is still set to `C` and approved.
- For direct execution on a `MultiMedia` object, the same linked-journal scan is applied before deciding to update.
- If statuses are blank or all linked journal media are in the excluded set, no package status update is made.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/MM_Package_Status_Update.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: Status synchronization logic

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 21
