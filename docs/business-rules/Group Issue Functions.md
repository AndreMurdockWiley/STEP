## Group Issue Functions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalPrintIssues, JournalDigitalIssues
- **Attribute ID(s)**: C_GroupIssue_UUID, C_IssueState, C_JournalID, C_MessageStatus, C_Name, C_PubYearID, C_VolumeID, D_ID, D_JournalMediaID, D_PubYearID, D_VolumeID, GroupIssueID, IssueFromIssueNumber, IssueState, IssueSupplementNo, IssueToIssueNumber, IssueType, IssueVolumeNumber, JournalGroupCode, P_ID, P_JournalMediaID, P_PubYearID, P_VolumeID, ProductPublicationYear
- **Attribute name(s)**: Issue State, Classification Issue State, Message Status, Group Issue ID
- **Version**: 1.1
- **Status**: Active
- **Source file(s)**: `Libraries/Group Issue Functions.js`

### Functional description

Group Issue Functions

### Functional logic

- Plugin: JavaScriptBusinessLibrary.
- If "IssueType" == "Standard Issue", apply the corresponding branch logic.
- If "IssueType" == "Merged Issue", apply the corresponding branch logic.
- If "IssueType" == "Supplement", apply the corresponding branch logic.
- If "IssueType" == "Special Issue", apply the corresponding branch logic.
- If "IssueState" == "Draft", apply the corresponding branch logic.
- If "IssueState" == "Draft", apply the corresponding branch logic.
- Reads/writes attributes including: IssueState, C_IssueState, IssueType, JournalGroupCode, ProductPublicationYear, IssueVolumeNumber, IssueFromIssueNumber, GroupIssueID, IssueToIssueNumber, IssueSupplementNo.

### Errors

—

### Usage / trigger

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: State-11 (approval)

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: setGroupIssueState(), createAndUpdateGroupIssues(), updateSIClassification(), updateMIClassification(), updateSUPIClassification(), copyValuesToClass(), queryForSingleObj(), copyValuesBasedOnAttributeGroup(), setUUIDForIssues()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 16
