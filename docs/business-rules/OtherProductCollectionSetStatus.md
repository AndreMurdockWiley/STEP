## OtherProductCollectionSetStatus

- **Rule type**: Business Action
- **Business area**: OtherProductCollectionRules
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionStatus, OtherProductCollectionType
- **Source file(s)**: `OtherProductCollectionRules/OtherProductCollectionSetStatus.js`

### Functional description

This business action standardizes status for Other Product Collection records by setting **CollectionStatus** to **Active** whenever the rule runs.  
The rule also reads **OtherProductCollectionType** as context, but in the current implementation that value does not change the outcome.  
No validation or user-facing error handling is performed by this rule.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads the current value of **OtherProductCollectionType** from the object.
- Sets **CollectionStatus** to the fixed value **"Active"**.
- Applies the same behavior for all valid object types (global scope); no conditional branching is implemented.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProductCollectionRules/OtherProductCollectionSetStatus.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 356
