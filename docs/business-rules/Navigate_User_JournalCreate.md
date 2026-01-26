## Navigate_User_JournalCreate

- **Rule type**: Action
- **Setup group**: JournalNavegationGroup
- **Business area**: Journal
- **Data model object valid to**: All Object Types
- **Product type(s) valid to**: All
- **Status**: Active

### Functional description

Navigates user to the Journal Creation Baseline Workflow Task List screen after journal creation. It is triggered from: JournalCreationWFv2 (Journal_Baseline state). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic.

- Constructs URL to JournalCreationBaselineWorkflowTaskLIst screen and navigates user using UI.navigateUrl()

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: JournalCreationWFv2
  - **Task/Event**: Journal_Baseline state

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: navigateUrl()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 169
