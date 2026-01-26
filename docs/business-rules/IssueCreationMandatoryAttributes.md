## IssueCreationMandatoryAttributes

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: IssuePublicationType, IssueSupplementNo, IssueType
- **Source file(s)**: `Conditions/IssueCreationMandatoryAttributes.js`

### Functional description

Issue Creation Mandatory Attributes. It primarily works with attribute(s): IssuePublicationType, IssueSupplementNo, IssueType. It is triggered from: Business condition (validation configured in STEP). If validation fails, the user sees an error message such as: "'Supplement No' can't be empty for Supplement Issues".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: IssueSupplementNo, IssueType, IssuePublicationType.

### Errors

- **Configured error**: 'Supplement No' can't be empty for Supplement Issues

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 239
