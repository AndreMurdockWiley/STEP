## ReSendIssuesToSap

- **Rule type**: Business Action
- **Business area**: IssuesWorkFlowGroup
- **Data model object valid to**: All
- **Source file(s)**: `IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js`

### Functional description

Resends selected Issue records to SAP by re-approving eligible items and republishing them to the outbound integration feeds. Only Issues with `ProductActivated = Activated` are resent; inactive Issues are skipped and reported back to the user. The action also refreshes Group Issue Classification data (for standard, merge, and supplement Issues) as part of the resend.

### Functional logic

- Read the current UI selection of Issue nodes.
- Initialize two lists: resent and not resent.
- For each selected Issue:
  - If `ProductActivated = Activated`:
    - Approve the Issue.
    - Republish the Issue to the Issues_Data_Extract and Issues_Data_Extract_Kafka endpoints.
    - Create or update the Group Issue Classification object (for standard, merge, and supplement Issues) and send it to the Group_Issues_Data_Extract and Group_Issues_Data_Extract_Kafka endpoints.
    - Add the Issue name to the resent list.
  - Otherwise, add the Issue name to the not resent list.
- Show an acknowledgement alert that lists which Issues were resent and which were skipped because they are not active.

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
