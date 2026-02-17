## OIEP_Monitoring_2

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ActiveBGP
- **Attribute name(s)**: Active BGP
- **Status**: Active
- **Source file(s)**: `Actions/OIEP_Monitoring_2.js`

### Functional description

OIEP_Monitoring_2 is an operational monitoring action for outbound integration endpoints in STEP. When triggered from the Web UI or a workflow event, it checks configured endpoints, identifies failed or unhealthy background processes, and notifies the support team by email with process-level details. The rule uses **ActiveBGP** to persist the most recent running background-process ID for each endpoint so repeated executions can detect jobs that appear to be stuck for an extended period.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Resolves the environment-specific STEP base URL (dev/qa/test/prod) and calls STEP REST endpoints using a service account.
- Reads endpoint entities under **Enpoint Monitoring** and retrieves each outbound endpoint status.
- For eligible endpoint states, retrieves associated worker/background process IDs.
- For each background process in **failed** or **completedwitherrors** state, fetches the execution report and extracts error text for notification.
- Sends an alert email containing endpoint ID, background process ID, and error context so support teams can investigate quickly.
- For processes in **running** state, compares the current process ID with the endpoint's stored **ActiveBGP** value to detect potentially long-running jobs.
- Updates **ActiveBGP** with the latest running process ID to support comparison on the next monitoring run.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: failed
- **In-script message**: failed.<br> Error:
- **In-script message**: ...... Please refer the Background process ID

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: callStepRESTAPI(), callStepRESTAPIstatus(), jsonKeyValues(), mail().send()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 78
