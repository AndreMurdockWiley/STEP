## OtherProductCollectionSaveAction

- **Rule type**: Business Action
- **Business area**: OtherProductCollectionRules
- **Data model object valid to**: OtherProductCollectionOffering
- **Source file(s)**: `OtherProductCollectionRules/OtherProductCollectionSaveAction.js`

### Functional description

`OtherProductCollectionSaveAction` is the Save-time orchestration action for **OtherProductCollectionOffering** records.  
When a user saves an Other Product Collection, this action coordinates three downstream business actions to:

1. validate text and URL field quality,
2. place/reclassify the collection under the correct archive/classification parent based on collection type, subtype, and status,
3. record which collection components were added or removed (Main vs. Approved) for downstream tracking.

If a validation check fails in a referenced action, the save is blocked and the user receives the corresponding validation message.

### Functional logic

This action does not contain custom JavaScript logic of its own; it delegates processing through `ReferenceOtherBABusinessAction` plugins executed in sequence:

- **ReferencedBA: `BA_ValidateTextFields`**  
  Validates editable text/URL fields (for example, leading/trailing spaces, line breaks, and invalid formatting). On failure, it throws a user-facing validation message and stops the save flow.
- **ReferencedBA: `BA_AutoClassOtherProdCollectionToArchive`**  
  Reclassifies the collection to the correct parent/archive node according to collection type, subtype, and collection status values.
- **ReferencedBA: `BA_LinkModifiedCollectionComponents`**  
  Compares collection components between Main and Approved workspaces, clears prior delta links, and writes references that identify added and removed components.

Net effect: the Save action behaves as a controlled pipeline that enforces data quality, maintains correct classification, and preserves component-change traceability.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProductCollectionRules/OtherProductCollectionSaveAction.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 354
