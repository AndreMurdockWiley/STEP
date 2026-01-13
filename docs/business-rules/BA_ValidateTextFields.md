## BA_ValidateTextFields

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: CollectionCode, CollectionYear, IssueVolumeNumber, JournalBackfileContentISSN, JournalMarketingCopyHeadline, JournalMarketingCopySubjectArea, JournalMarketingCopyUSP1, JournalMarketingCopyUSP2, JournalMarketingCopyUSP3, JournalMarketingCopyUSP4, ProductDoi, ProductOclcReferenceNumber, ProductSAPMaterialNumber, ProductShortTitle, ProductTitle, ProductUrl, SAPExternalMaterialGroup
- **Attribute name(s)**: Various text and URL attributes across multiple object types
- **Status**: Active
- **Source file(s)**: `Actions/BA_ValidateTextFields.js`

### Functional description

BA_ValidateTextFields

### Functional logic

- Reads/writes attributes including: JournalBackfileContentISSN.

### Errors

- **Configured error**: Please correct the Fields: {list of attribute names with specific issues like 'has leading space', 'has trail space', 'has line break', 'has a space', 'Should have only Numbers and alphabets'}
- **In-script message**: <b>Please correct the Fields : </b>{errormessage}

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: checkSpacesandLineBreaks(), addAttributeIDsToArray(), removeDuplicates(), test() regex, getAttributeGroupByID(), getDataContainerObjects()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 102
