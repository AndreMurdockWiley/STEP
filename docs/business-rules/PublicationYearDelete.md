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

Publication Year Delete

### Functional logic

- If "IssueState" == "Draft", apply the corresponding branch logic.
- If "IssueState" == "Enriched", apply the corresponding branch logic.
- Calls: pubLibrary.deletePubYear, pubYearLibrary.pubYearDeleteCheck, volumeLibrary.deleteVolume, pubYearLibrary.deletePubYear, issueLibrary.issueDeleteCheck, issueLibrary.deleteIssue.
- Reads/writes attributes including: IssueState, C_IssueState, C_MessageStatus, C_IssueDeletedDate, C_LastUpdated.

### Errors

- **Configured error**: The selected Publication Year contains a Volume which has an Issue with JPCMS and Original Publication Date populated; Issue [name] can't be deleted - The issue has already been sent to SAP
- **In-script message**: The Following Publication Year(s) can't be deleted.
- **In-script message**: can't be deleted

### Usage / trigger

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
