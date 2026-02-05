## StatusandStatusMessage

- **Rule type**: Business Condition
- **Business area**: Integrations
- **Data model object valid to**: Backfiles, OtherProducts, MultiJournal
- **Attribute ID(s)**: LastUpdatedNew, Status, StatusMessage
- **Source file(s)**: `Integrations/StatusandStatusMessage.js`

### Functional description

Sets a standardized success status for eligible integration objects and ensures a last-updated timestamp is populated. When the rule runs for Backfiles, OtherProducts, or MultiJournal, it marks the record as ready to send downstream and initializes LastUpdatedNew if it is empty.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Checks the current object's type; only Backfiles, OtherProducts, and MultiJournal qualify.
- Sets Status to "Success" and StatusMessage to "Send to Downstream System" for qualifying objects.
- Builds a current timestamp in "yyyy-MM-dd HH:mm:ss" format.
- If LastUpdatedNew is blank, writes the timestamp to LastUpdatedNew.
- Returns true for qualifying objects; returns false otherwise.

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
- **Row(s) (0-based in data block)**: 313
