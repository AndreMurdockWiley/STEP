## CopyIssnToDataContainer

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: ISSNHistory_DataContainer, JournalIssnHistory, ProductIssn
- **Attribute name(s)**: Product ISSN, Journal ISSN History
- **Status**: Active
- **Source file(s)**: `Actions/CopyIssnToDataContainer.js`

### Functional description

Copy Issn To Data Container

### Functional logic

- Reads/writes attributes including: ProductIssn, JournalIssnHistory.

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getObjectType(), getParent(), getDataContainerByTypeID(), addDataContainer(), createDataContainerObject()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 73
