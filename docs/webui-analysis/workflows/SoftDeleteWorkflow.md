## SoftDeleteWorkflow

### Overview

- **Screens involved (Web UI)**: 2
- **Business actions exposed (Web UI)**: 2
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 1
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a soft-delete review/approval flow, general workflow orchestration.

### States / tasks referenced (best-effort)

- `Review`

### Web UI screens and actions

#### `JournalHistorySoftDeleteWFScreen` (NodeDetails)

- **`BA_ApproveSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveSoftDeleteButton.js`
- **`BA_RejectSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectSoftDeleteButton.js`

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
