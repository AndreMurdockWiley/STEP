## Sample_Message_Joiner

- **Rule type**: Business Action
- **Business area**: Integrations
- **Data model object valid to**: All
- **Source file(s)**: `Integrations/Sample_Message_Joiner.js`

### Functional description

Builds a single outbound JSON payload for integrations by joining the
individual message fragments received from the integration endpoint. It
collects update and delete messages, removes duplicates, and emits a
compact JSON object under `products.updates` and `products.deletes` that
downstream systems can consume.

### Functional logic

The rule joins messages provided by the STEP integration joiner contracts
and formats them into a single JSON payload.

- Start the output with `{"products":{"updates":[`.
- Iterate through all messages in the `updates` group from the joiner
  source.
  - Track a per-group list of message hashes.
  - Append each message string only once (skip duplicates with the same
    hash), inserting commas between messages.
- Append `],"deletes":[`.
- Repeat the same de-duplication and append logic for the `deletes`
  group.
- Close the payload with `]}}`.

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
- **Row(s) (0-based in data block)**: 309
