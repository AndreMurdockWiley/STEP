## Product_Joiner

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Actions/Product_Joiner.js`

### Functional description

Aggregates outbound product messages into a single JSON payload for downstream processing. This business action is invoked from the Web UI or workflow event and joins messages from the "upsert" and "delete" groups into one "products" object, removing duplicate message entries before output.

### Functional logic

- Initializes the output with `{"products":{"upsert":[`.
- For each message in the `upsert` group:
  - Retrieves the next message string from the joiner source.
  - Deduplicates by message string hash; only the first occurrence is appended.
  - Appends messages as-is, comma-separated.
- Appends `],"delete":[` and repeats the same join/deduplication logic for the `delete` group.
- Closes the JSON payload with `]}}`.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: appendFromGroup(), message deduplication, JSON construction

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 45
