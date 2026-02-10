## PopulateJournalProductIdentifier

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalProductID
- **Attribute name(s)**: Journal Product ID
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/PopulateJournalProductIdentifier.js`

### Functional description

This business action standardizes the journal identifier by populating **Journal Product ID** (`JournalProductID`) with the current journal object's STEP ID. This keeps the journal's product identifier aligned with its master record identity for downstream matching, integration, and reference use.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Retrieves the current object's ID from the `ID` bind.
- Reads the current `JournalProductID` value (the value is not used in subsequent logic).
- Unconditionally sets `JournalProductID` to the current object ID using `setSimpleValue(...)`.
- No conditional checks, validation gates, or user-facing error messages are implemented in the script.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/PopulateJournalProductIdentifier.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: getValue(), setSimpleValue(), ID binding

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 134
