## IssueAttributesOnSaveGeneration

- **Rule type**: Business Action
- **Setup group**: IssuesUpsertGroup
- **Business area**: IssuesUpsertGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: IssueFromIssueNumber, IssueSAPMaterialNumber, IssueSupplementNo, IssueToIssueNumber, IssueType
- **Attribute name(s)**: Issue SAP Material Number, Issue Type, Issue From Issue Number, Issue To Issue Number, Issue Supplement No
- **Status**: Active
- **Source file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueAttributesOnSaveGeneration.js`

### Functional description

Issue Attributes On-Save Generation

### Functional logic

- If "IssueType" == "Standard Issue", apply the corresponding branch logic.
- If "IssueType" == "Merged Issue", apply the corresponding branch logic.
- If "IssueType" == "Supplement", apply the corresponding branch logic.
- Calls: issueLibrary.generateIssueUniqueAttributes, issueLibrary.generateIssueDescription.
- Reads/writes attributes including: IssueSAPMaterialNumber, IssueType, IssueFromIssueNumber, IssueToIssueNumber, IssueSupplementNo.

### Errors

- **Configured error**: Various validation errors: 'Please provide Issue Type', 'Please provide From Issue Number for Standard Issue', 'Please provide From Issue Number & To Issue Number for Merged Issue', 'Please provide Supplement No for Supplement Issue'
- **In-script message**: Please provide Issue Type to proceed further
- **In-script message**: Please provide From Issue Number for Standard Issue to proceed further
- **In-script message**: Please provide From Issue Number & To Issue Number for Merged Issue to proceed further
- **In-script message**: Please provide From Issue Number for Merged Issue to proceed further
- **In-script message**: Please provide To Issue Number for Merged Issue to proceed further
- **In-script message**: Please provide Supplement No for Supplement Issue to proceed further

### Usage / trigger

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: Initiate workflow

### Dependencies / key functions

- **Dependencies**: IssueFunctions (issueLibrary)
- **Key functions**: generateIssueUniqueAttributes(), generateIssueDescription(), isInWorkflow(), startWorkflowByID(), showAlert()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 95
