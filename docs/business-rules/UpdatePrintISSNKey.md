## UpdatePrintISSNKey

- **Rule type**: Business Action
- **Setup group**: JournalMediaUpsertGroup
- **Business area**: JournalMediaUpsertGroup
- **Data model object valid to**: JournalPrintMedia
- **Product type(s) valid to**: JournalPrintMedia
- **Attribute ID(s)**: ProductIssn, JournalTrueStatus, ProductMediaType
- **Attribute name(s)**: Product ISSN, Journal True Status, Product Media Type
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/UpdatePrintISSNKey.js`

### Functional description

Ensures the **Print ISSN key** on a `JournalPrintMedia` record is set to a valid ISSN when the user enters/updates **Product ISSN**.

If the journal is not flagged as **Journal True Status = No**, the rule authenticates the entered ISSN using `genericFunctions.issnAuthentication`. When authentication succeeds (or is skipped for **Journal True Status = No**), the rule writes the ISSN to the `ProductIssn` **key attribute** and then runs `JournalHistoryISSNUpdate` to keep ISSN history aligned. If authentication fails, the rule prevents completion and shows the authentication message as an error.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `JournalTrueStatus` (and reads `ProductMediaType`, though it does not currently influence the decision).
- Uses the validated **new Product ISSN** value (`ProductIssn` / "New ISSN" context parameter).
- If `JournalTrueStatus` is not `No`, calls `genericFunctions.issnAuthentication(newISSN)`; otherwise treats the ISSN as authenticated.
- If authenticated:
  - Updates the `ProductIssn` **key** via `genericFunctions.setValueToKeyAttribute(...)`.
  - Executes the follow-on business action `JournalHistoryISSNUpdate` for the same object.
- If authentication fails:
  - Adds the returned authentication message to Data Issues and stops processing.

### Errors

- **Configured error**: Authentication error message returned from genericFunctions.issnAuthentication

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaUpsertGroup/UpdatePrintISSNKey.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: issnAuthentication, setValueToKeyAttribute

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 151
