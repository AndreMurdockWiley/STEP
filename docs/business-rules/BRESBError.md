## BRESBError

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: EditorialContactCode, Error_Description, Error_EditorialCode, Error_EditorialID, Error_EditorialName, Error_JSON_Load, Error_Timestamp, JournalMediaFuturePrintStatusEffectDate, JournalVCHIdentifier, ProductTitle
- **Attribute name(s)**: Editorial Contact Code, Journal VCH Identifier, Journal Media Future Print Status Effect Date
- **Status**: Active
- **Source file(s)**: `Integrations/BRESBError.js`

### Functional description

BR ESB Errors. It primarily works with attribute(s): EditorialContactCode, Error_Description, Error_EditorialCode, Error_EditorialID, Error_EditorialName, Error_JSON_Load, Error_Timestamp, JournalMediaFuturePrintStatusEffectDate, JournalVCHIdentifier, ProductTitle. It is triggered from: Error_Review_WF (New_Error task: toESB event). If validation fails, the user sees an error message such as: "ERROR IN Editorial Code :".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Locate task/state "New_Error".
- Trigger workflow event "toESB".
- Reads/writes attributes including: EditorialContactCode, JournalVCHIdentifier, JournalMediaFuturePrintStatusEffectDate, ProductTitle, Error_Description, Error_EditorialCode, Error_EditorialID, Error_EditorialName, Error_Timestamp, Error_JSON_Load.

### Errors

- **In-script message**: ERROR IN Editorial Code :

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Error_Review_WF
  - **Task/Event**: New_Error task: toESB event
- **Configuration**: Workflow: —
  - **Task/Event**: Workflow State/Task: "New_Error", Workflow Event: "toESB"

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: createProduct(), getValue(), setSimpleValue(), SimpleDateFormat.format(), getWorkflowInstance(), triggerByID(), sendEmail()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 106
