## PublicationYearDelete

- **Rule type**: Business Action
- **Setup group**: PubYearGroup
- **Business area**: PubYearGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: C_IssueDeletedDate, C_IssueState, C_LastUpdated, C_MessageStatus, IssueState
- **Attribute name(s)**: Issue State, Classification Issue State, Classification Message Status, Classification Issue Deleted Date, Classification Last Updated, Issue Status
- **Status**: Active
- **Source file(s)**: `PubYearGroup/PublicationYearDelete.js`

### Functional description

Validates and processes deletion of selected Publication Year records. The action blocks deletion when the Publication Year fails the delete check (for example, when a contained volume has an issue with JPCMS and Original Publication Date populated). When deletion is allowed, it cascades through volumes and issues, updating linked classification issue records (message status, deleted date, last updated) and publishing required updates to outbound integrations before removing the Publication Year hierarchy.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- For each selected Publication Year, run the delete eligibility check (pubYearDeleteCheck).
- If the Publication Year is not eligible, collect its name and show a UI alert listing the blocked Publication Year(s) and the reason.
- If eligible, traverse child volumes and issues:
  - For each issue, locate the linked classification issue record and evaluate the issue state (Draft, Enriched, Sent to SAP).
  - Clear classification attributes for the relevant print/digital attribute group.
  - Set C_MessageStatus to DELETE or UPDATE based on the issue state and the presence of related issue variants.
  - Stamp C_IssueDeletedDate and C_LastUpdated when appropriate, approve the classification record, and republish to Group_Issues_Data_Extract and Group_Issues_Data_Extract_Kafka when required.
  - Prevent deletion when the related issue has been sent to SAP and notify the user.
- Delete the issue product record, then delete the containing volume, and finally delete the Publication Year.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: The Following Publication Year(s) can't be deleted.
- **In-script message**: can't be deleted

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Group_Issues_Data_Extract
  - **Task/Event**: —
- **Configuration**: Group_Issues_Data_Extract_Kafka
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: PublicationYearUtilityLibrary (pubLibrary), VolumeFunctions (volumeLibrary), PublicationYearFunctions (pubYearLibrary), IssueFunctions (issueLibrary)
- **Key functions**: pubYearDeleteCheck, deleteVolume, deletePubYear, issueDelete, queryForSingleObj, deleteValuesBasedOnAttributeGroup, getProductClassificationLinks, approveNode, getCurrentDate, republish

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 193
