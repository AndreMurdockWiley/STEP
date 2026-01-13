## BA_ValidateTextAttributesField

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Attribute ID(s)**: CollectionCode, CollectionYear, IssueVolumeNumber, JournalAIMassUpdateHistoryLog, JournalMarketingCopyHeadline, JournalMarketingCopySubjectArea, JournalMarketingCopyUSP1, JournalMarketingCopyUSP2, JournalMarketingCopyUSP3, JournalMarketingCopyUSP4, ProductActivated, ProductDoi, ProductOclcReferenceNumber, ProductSAPMaterialNumber, ProductShortTitle, ProductTitle, ProductUrl, SAPExternalMaterialGroup
- **Attribute name(s)**: Multiple text and URL attributes, Product Activated, Journal AI Mass Update History Log
- **Status**: In Testing
- **Source file(s)**: `Actions/BA_ValidateTextAttributesField.js`

### Functional description

Validate Text Attribute Field

### Functional logic

- Reads/writes attributes including: JournalAIMassUpdateHistoryLog, ProductActivated.

### Errors

- **In-script message**: <b>Please correct the Fields : </b>{errormessage}

### Usage / trigger

- **Configuration**: Journal_Data_Extract_Kafka
  - **Task/Event**: OutBound Integration Endpoint (commented out for testing as of 2/27/2025)
- **Configuration**: Journal_Data_Extract
  - **Task/Event**: OutBound Integration Endpoint (commented out for testing as of 2/27/2025)

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: checkSpacesandLineBreaks, removeDuplicates, hasSpaces, addAttributeIDsToArray

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 154
