## MultiJournalEffectiveDateValidate

- **Rule type**: Business Action
- **Business area**: PackageGroup
- **Data model object valid to**: MultiJournal
- **Attribute ID(s)**: MultiJournalEffectiveDate, MultiJournalFuturePackageStatus, ProductTitle
- **Source file(s)**: `PackageGroup/MultiJournalEffectiveDateValidate.js`

### Functional description

This business action monitors when a Multi Journal reaches its planned effective date.  
When the value in **MultiJournalEffectiveDate** is today or earlier, the rule sends an email notification (to a configured recipient) indicating that the future-date milestone has been reached for that Multi Journal.  
The notification includes the journal title (**ProductTitle**), the configured future package status (**MultiJournalFuturePackageStatus**), and the date comparison details.  
After notification, the rule clears **MultiJournalEffectiveDate** so the same date event is not repeatedly processed.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read **MultiJournalEffectiveDate** from the current MultiJournal object.
- Get today’s date in `yyyy-MM-dd` format.
- If `MultiJournalEffectiveDate <= today`:
  - Read **ProductTitle** and **MultiJournalFuturePackageStatus**.
  - Compose an email subject/body describing that the effective date has been reached.
  - Send the email to the configured mailbox (`sasteven@wiley.com` in the current script).
  - Clear **MultiJournalEffectiveDate** by setting it to blank.
- If the effective date is in the future, no email is sent and no attribute values are changed.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/MultiJournalEffectiveDateValidate.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 373
