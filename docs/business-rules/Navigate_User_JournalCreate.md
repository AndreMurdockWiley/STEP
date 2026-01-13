## Navigate_User_JournalCreate

- **Rule type**: Action
- **Setup group**: JournalNavegationGroup
- **Business area**: Journal
- **Data model object valid to**: All Object Types
- **Product type(s) valid to**: All
- **Status**: Active

### Functional description

Navigates user to the Journal Creation Baseline Workflow Task List screen after journal creation

### Functional logic

- Constructs URL to JournalCreationBaselineWorkflowTaskLIst screen and navigates user using UI.navigateUrl()

### Errors

—

### Usage / trigger

- **Configuration**: JournalCreationWFv2
  - **Task/Event**: Journal_Baseline state

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: navigateUrl()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 169
