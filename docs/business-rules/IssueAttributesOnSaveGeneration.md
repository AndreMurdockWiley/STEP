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

Issue Attributes On-Save Generation. It primarily works with attribute(s): IssueFromIssueNumber, IssueSAPMaterialNumber, IssueSupplementNo, IssueToIssueNumber, IssueType. It is triggered from: VolumeIssueCreationWF (Initiate workflow). If validation fails, the user sees an error message such as: "Various validation errors: 'Please provide Issue Type', 'Please provide From Issue Number for Standard Issue', 'Please provide From Issue Number & To Issue Number for Merged Issue', 'Please provide Supplement No for Supplement Issue'".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

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

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: VolumeIssueCreationWF
  - **Task/Event**: Initiate workflow

### Dependencies / key functions

- **Dependencies**: IssueFunctions (issueLibrary)
- **Key functions**: generateIssueUniqueAttributes(), generateIssueDescription(), isInWorkflow(), startWorkflowByID(), showAlert()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 95
