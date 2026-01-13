## BC_ValidateTextFields

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionCode, CollectionYear, IssueVolumeNumber, JournalBackfileContentISSN, JournalMarketingCopyHeadline, JournalMarketingCopySubjectArea, JournalMarketingCopyUSP1, JournalMarketingCopyUSP2, JournalMarketingCopyUSP3, JournalMarketingCopyUSP4, ProductDoi, ProductOclcReferenceNumber, ProductSAPMaterialNumber, ProductShortTitle, ProductTitle, ProductUrl, SAPExternalMaterialGroup
- **Source file(s)**: `Conditions/BC_ValidateTextFields.js`

### Functional description

BC_ValidateTextFields

### Functional logic

- Reads/writes attributes including: JournalBackfileContentISSN.

### Errors

- **In-script message**: Please correct the Fields :

### Usage / trigger

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 230
