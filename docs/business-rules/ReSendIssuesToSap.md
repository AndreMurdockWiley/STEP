## ReSendIssuesToSap

- **Rule type**: Business Action
- **Business area**: IssuesWorkFlowGroup
- **Data model object valid to**: All
- **Source file(s)**: `IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js`

### Functional description

User-initiated action that resends selected Issue objects to SAP integration feeds. For each selected Issue, the rule checks the ProductActivated status; activated Issues are approved, republished to the standard and Kafka outbound endpoints, and their Group Issue classification is created or updated. Issues that are not activated are skipped. The UI presents an acknowledgement listing both the resent and skipped Issues.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Iterates over the current UI selection of Issue objects.
- If ProductActivated == "Activated":
  - Approves the Issue.
  - Republish the Issue to Issues_Data_Extract and Issues_Data_Extract_Kafka.
  - Calls link.createAndUpdateGroupIssues to create/update Group Issue classification and publish to group issue endpoints.
- Otherwise, records the Issue as not resent.
- Displays a UI acknowledgement summarizing Issues resent and not resent.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 323
