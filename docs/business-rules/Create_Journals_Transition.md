## Create_Journals_Transition

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalGroupCode, JournalProductCode, JournalProductionCode, JournalOnlineLibraryCode, JournalInCurrentDatabaseModel
- **Attribute name(s)**: Journal Group Code, Journal Product Code, Journal Production Code, Journal Online Library Code
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/Create_Journals_Transition.js`

### Functional description

Create Journals Transition. It primarily works with attribute(s): JournalGroupCode, JournalProductCode, JournalProductionCode, JournalOnlineLibraryCode, JournalInCurrentDatabaseModel. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: ReferenceOtherBABusinessAction.
- Parameter "ReferencedBA": Populate_HandlingEditorNameDisplay

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/Create_Journals_Transition.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: ReferenceOtherBABusinessAction, SetAttributeValueBusinessAction

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 98
