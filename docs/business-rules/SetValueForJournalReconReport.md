## SetValueForJournalReconReport

- **Rule type**: Business Condition
- **Business area**: OIEP-Filter
- **Data model object valid to**: All
- **Attribute ID(s)**: ID, LastUpdatedNew
- **Source file(s)**: `Integrations/SetValueForJournalReconReport.js`

### Functional description

Ensures Journal and Journal Media records are prepared for the reconciliation
extract by backfilling missing identifiers and initializing the reconciliation
timestamp. For JournalPrintMedia and JournalDigitalMedia, it copies the parent
Journal ID when the media ID is empty, and sets `LastUpdatedNew` to the current
timestamp when not already populated. For Journal objects, it sets a missing ID
to the object's own ID and initializes `LastUpdatedNew` if empty. The rule
returns false for other object types.

### Functional logic

This section summarizes the configured functional logic captured in the rules
inventory. The bullet points below are a concise, human-readable summary of the
rule logic (inferred where necessary from the script).

- Check the object type and only proceed for Journal, JournalPrintMedia, or
  JournalDigitalMedia; return false for any other type.
- For JournalPrintMedia or JournalDigitalMedia, set `ID` to the parent Journal
  ID when the media ID is empty, then format the current date as
  `yyyy-MM-dd HH:mm:ss` and write it to `LastUpdatedNew` only when the attribute
  is null.
- For Journal, set `ID` to the object's own ID when missing, then set
  `LastUpdatedNew` to the formatted current timestamp only when the attribute is
  null.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 311
