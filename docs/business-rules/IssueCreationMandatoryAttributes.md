## IssueCreationMandatoryAttributes

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: IssuePublicationType, IssueSupplementNo, IssueType
- **Source file(s)**: `Conditions/IssueCreationMandatoryAttributes.js`

### Functional description

Issue Creation Mandatory Attributes

### Functional logic

- Reads/writes attributes including: IssueSupplementNo, IssueType, IssuePublicationType.

### Errors

- **In-script message**: 'Supplement No' can't be empty for Supplement Issues

### Usage / trigger

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 239
