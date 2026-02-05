## Test_Trigger_Rule_Journal_Refs_Send

- **Rule type**: Business Action
- **Business area**: Integrations
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalIssueTemplateCreation, MessageStatus, ProductTitle
- **Source file(s)**: `Integrations/Test_Trigger_Rule_Journal_Refs_Send.js`

### Functional description

Triggers the outbound "Journal Refs" send and updates journal message
attributes based on whether the current journal differs from the last
approved version. The action calls the shared approve-and-trigger library,
then, for Journal objects, evaluates ProductTitle and the linked cost center
classification to decide if the downstream payload should be treated as a new
issue-template creation or an update. It sets JournalIssueTemplateCreation and
MessageStatus accordingly and approves the journal.

### Functional logic

This section summarizes the configured functional logic captured in the rules
inventory. The bullet points below are a concise, human-readable summary of the
rule logic (inferred where necessary from the script).

- Calls the Approve_And_Send_Object library to approve and trigger the
  integration send for the current object.
- If the object type is Journal:
  - Reads ProductTitle and the current ProductToCostCenterReferenceLink.
  - Loads the approved workspace version and reads the same fields.
  - If ProductTitle or the cost center link differs:
    - Sets JournalIssueTemplateCreation = true.
    - Sets MessageStatus = CREATE.
  - Otherwise:
    - Sets JournalIssueTemplateCreation = false.
    - Sets MessageStatus = UPDATE.
  - Approves the journal after updating the attributes.

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
- **Row(s) (0-based in data block)**: 314
