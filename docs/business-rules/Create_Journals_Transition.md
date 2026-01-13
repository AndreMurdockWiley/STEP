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

Create Journals Transition

### Functional logic

- Plugin: ReferenceOtherBABusinessAction.
- Parameter "ReferencedBA": Populate_HandlingEditorNameDisplay

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: ReferenceOtherBABusinessAction, SetAttributeValueBusinessAction

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 98
