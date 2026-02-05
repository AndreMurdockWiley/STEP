## UpdateDigitalISSNKey

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: JournalDigitalMedia
- **Product type(s) valid to**: JournalDigitalMedia
- **Attribute ID(s)**: JournalTrueStatus, ProductMediaType
- **Attribute name(s)**: Product ISSN, Journal True Status, Product Media Type
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js`

### Functional description

Validates and applies a proposed Product ISSN (digital ISSN) update for a JournalDigitalMedia record. The rule uses Journal True Status to determine whether ISSN authentication must run: active journals (JournalTrueStatus not "No") require authentication, while inactive journals bypass it. When validation succeeds (or is skipped), it writes the new ISSN to the Product ISSN key and triggers the JournalHistoryISSNUpdate action to keep ISSN history aligned. If validation fails, the authentication error is returned to the user.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads JournalTrueStatus (and retrieves ProductMediaType, though it is not used in the current logic).
- Uses the validated context parameter "New ISSN" from ProductIssn as the candidate value.
- If JournalTrueStatus is not "No", calls issnAuthentication on the new ISSN; otherwise treats the value as valid.
- When valid, sets ProductIssn as the key attribute to the new ISSN value.
- Executes the JournalHistoryISSNUpdate business action after the key update.
- When invalid, adds the returned authentication error to the data issues list and stops processing.

### Errors

- **Configured error**: ISSN authentication failed (returned from authentication function)

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: issnAuthentication, setValueToKeyAttribute, getBusinessActionByID, execute, addError

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 188
