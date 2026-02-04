## UpdateProduct

- **Rule type**: Business Action
- **Business area**: Integrations
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Source file(s)**: `Integrations/UpdateProduct.js`

### Functional description

Updates a journal media product’s **Publication Date** in STEP from an inbound integration message. The rule is intended to be called by an **Integration Endpoint** (inbound processing) and uses the incoming payload to locate the target product (by `productCode`) and set the `PublicationDate` attribute based on a workflow event value provided in the message.

### Functional logic

When invoked, the business action performs the following steps:

- Parses the inbound message as JSON (`inboundMessage.getMessage()`).
- Reads:
  - `productCode` as the STEP product ID to update.
  - `hasPart[0].workflowEventGroup[2].workflowEventValue` as the source date/time value.
- Looks up the product by ID: `manager.getProductHome().getProductByID(productCode)`.
- Updates the product attribute `PublicationDate` with the first 10 characters of the workflow event value (expected format \(YYYY-MM-DD\), derived via `substring(0,10)`).

**Important assumptions / constraints (per source code):**

- The payload must contain `productCode`, a non-empty `hasPart` array, and `workflowEventGroup` with at least 3 entries; the rule uses fixed indexes (`[0]` and `[2]`) and does not validate presence.
- The target product must already exist in STEP under that ID; no create/upsert logic is performed.

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
- **Row(s) (0-based in data block)**: 315
