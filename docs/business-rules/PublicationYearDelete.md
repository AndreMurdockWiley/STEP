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

Publication Year Delete. It primarily works with attribute(s): C_IssueDeletedDate, C_IssueState, C_LastUpdated, C_MessageStatus, IssueState. It is triggered from: Group_Issues_Data_Extract. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: IssueState, C_IssueState, C_MessageStatus, C_IssueDeletedDate, C_LastUpdated.

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
