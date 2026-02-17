## Navigate_User_JournalCreate

- **Rule type**: Action
- **Setup group**: JournalNavegationGroup
- **Business area**: Journal
- **Data model object valid to**: All Object Types
- **Product type(s) valid to**: All
- **Status**: Active

### Functional description

This action streamlines the post-creation journey for journal users. When a journal reaches the **Journal_Baseline** state in **JournalCreationWFv2**, the rule automatically redirects the user to the **JournalCreationBaselineWorkflowTaskLIst** screen so they can continue baseline workflow tasks without manual navigation. If the action cannot complete successfully, STEP shows the configured business-action message: **"N/A (Business Action)."**

### Functional logic

This rule performs a UI navigation-only action (no data update).

- Trigger point: **JournalCreationWFv2** workflow, **Journal_Baseline** state.
- Build/resolve the destination URL for the **JournalCreationBaselineWorkflowTaskLIst** task list screen.
- Execute navigation with **UI.navigateUrl()** so the current user session lands on the baseline task list immediately after creation.

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
