## PopulateJournalMediaProductIdentifier

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalMediaProductIdentifier
- **Attribute name(s)**: Journal Media Product Identifier
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/PopulateJournalMediaProductIdentifier.js`

### Functional description

Automatically populates the **Journal Media Product Identifier** with the current Journal Media object's STEP ID.  
This keeps the business identifier aligned to the system record ID for both **JournalPrintMedia** and **JournalDigitalMedia**, ensuring a consistent identifier is available for downstream integrations and matching.

### Functional logic

- Reads the current node context and resolves its ID (`ID` bind).
- Accesses the `JournalMediaProductIdentifier` attribute on the current Journal Media record.
- Sets `JournalMediaProductIdentifier` to the node ID value (overwriting any existing value).
- Executes as a business action with no conditional branching or validation checks.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaUpsertGroup/PopulateJournalMediaProductIdentifier.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: getValue(), setSimpleValue(), ID binding

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 135
