## VolumeIssueCreationWF

### Overview

- **Screens involved (Web UI)**: 3
- **Business actions exposed (Web UI)**: 1
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 2
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow, issue lifecycle flow.

### States / tasks referenced (best-effort)

- `State-8`
- `State-9`

### Web UI screens and actions

#### `IssueWorkflowMediaTaskList` (TaskList)

- **`IssueDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Issue(s) — `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`

#### `IssueWorkflowNonJPCMSTaskList` (TaskList)

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
