## ReviveSoftDeleteWorkflow

### Overview

- **Screens involved (Web UI)**: 4
- **Business actions exposed (Web UI)**: 2
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 3
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a soft-delete review/approval flow, revival (undo soft-delete) review/approval flow, general workflow orchestration.

### States / tasks referenced (best-effort)

- `AddReference`
- `Review`

### Web UI screens and actions

#### `JournalHistoryReviveDeleteWFScreen` (NodeDetails)

- **`BA_ApproveRevivalButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveRevivalButton.js`
- **`BA_RejectRevivalButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectRevivalButton.js`

#### `ReviveSoftDeleteAddReferenceWFTaskList` (TaskList)

- No BusinessAction calls were detected on this screen.

#### `ReviveSoftDeleteReviewWFTaskList` (TaskList)

- No BusinessAction calls were detected on this screen.

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
