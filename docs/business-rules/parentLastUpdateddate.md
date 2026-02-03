## parentLastUpdateddate

- **Rule type**: Business Action
- **Business area**: Integrations
- **Data model object valid to**: All
- **Attribute ID(s)**: ID, LastUpdatedNew, Status, StatusMessage
- **Source file(s)**: `Integrations/parentLastUpdateddate.js`

### Functional description

Synchronizes the outbound “last updated” timestamp across a Journal hierarchy so integration payloads are consistent. When the rule runs as part of an Integration Endpoint, it copies `LastUpdatedNew` between a `Journal` and its `JournalPrintMedia` / `JournalDigitalMedia` children (depending on which object is being exported) and then stamps the integration outcome fields (`Status`, `StatusMessage`) to indicate the object is ready to be sent downstream.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Determines the current object type.
- If the object is `JournalPrintMedia` or `JournalDigitalMedia`:
  - Reads the parent Journal’s `LastUpdatedNew` value.
  - Overwrites the media object’s `LastUpdatedNew` with the parent’s value.
  - Sets `Status` = `Success`.
  - Sets `StatusMessage` = `Send to Downstream System`.
- If the object is `Journal`:
  - Reads the Journal’s `LastUpdatedNew` value.
  - Iterates all children and sets each child’s `LastUpdatedNew` to match the Journal.
  - For each child, sets `Status` = `Success` and `StatusMessage` = `Send to Downstream System`.
- For any other object type, no attributes are updated (the rule only logs).

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 316
