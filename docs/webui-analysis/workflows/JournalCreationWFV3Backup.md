## JournalCreationWFV3Backup

### Overview

- **Screens involved (Web UI)**: 6
- **Business actions exposed (Web UI)**: 10
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 5
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow, journal lifecycle flow.

### States / tasks referenced (best-effort)

- `Journal_Baseline`
- `Journal_Complete`
- `State-13`
- `State-7`

### Web UI screens and actions

#### `JournalCreationBaselineWorkflowTaskLIst` (TaskList)

- No BusinessAction calls were detected on this screen.

#### `JournalCreationWorkflowMediaEnrichment` (TaskList)

- No BusinessAction calls were detected on this screen.

#### `JournalCreationWorkflowTaskList` (TaskList)

- No BusinessAction calls were detected on this screen.

#### `JournalNodeDetails` (NodeDetails)

- **`BA_AddEditorialContactsToJournals`** (BusinessActionWithWebUIBindToolBar) — Add Reference — `Actions/BA_AddEditorialContactsToJournals.js`
- **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal History — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **`BA_CreateJournalHistoryAndReference`** (BusinessActionWithWebUIBindToolBar) — Create Journal History — `JournalWorkflowGroup/BA_CreateJournalHistoryAndReference.js`
- **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`
- **`JournalHistoryApprove`** (BusinessActionWithWebUIBindToolBar) — Save and Approve Journal History — `JournalHistoryGroup/JournalHistoryApprove.js`
- **`JournalHistorySend`** (BusinessActionWithWebUIBindToolBar) — Send Journal History — `JournalHistoryGroup/JournalHistorySend.js`
- **`JournalSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalWorkflowGroup/JournalSaveAction.js`
- **`Send_Journal_Transition_Refs`** (BusinessActionWithWebUIBindToolBar) — Send Referenced Journal — `Actions/Send_Journal_Transition_Refs.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `JournalWorkflowReadyForPubYearTaskList` (TaskList)

- **`NavigateToPubYearOnWFCreationScreen`** (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process — `PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js`

#### `homepage` (HomePage)

- No BusinessAction calls were detected on this screen.

### Functional / business perspective (starter)

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” section above shows what users can do in each step.

### Notes (fill in)

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:
