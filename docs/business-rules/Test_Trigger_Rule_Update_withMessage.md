## Test_Trigger_Rule_Update_withMessage

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Integrations/Test_Trigger_Rule_Update_withMessage.js`

### Functional description

Invoked by the Integration rule configured in STEP Integration Endpoints, this action acts as a lightweight trigger wrapper for the integration flow. It hands off processing to a referenced business action and surfaces any configured business-action error message (for example, "N/A (Business Action)") when validation fails.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Uses the ReferenceOtherBABusinessAction plugin to delegate execution.
- References the business action Feed_Trigger_Action via the "ReferencedBA" parameter.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: Approve_And_Send_Object (myFunc)
- **Key functions**: ReferenceOtherBABusinessAction (14 references)

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 89
