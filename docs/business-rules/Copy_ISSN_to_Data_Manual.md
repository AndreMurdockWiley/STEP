## Copy_ISSN_to_Data_Manual

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Attribute ID(s)**: IDLDigitalJournalISSN, IDLPrintJournalISSN, ISSNHistory_DataContainer, JournalIssnHistory, ProductMediaType
- **Attribute name(s)**: Product Media Type, Print Journal ISSN, Digital Journal ISSN, Journal ISSN History, ISSN History Data Container
- **Status**: Active
- **Source file(s)**: `Actions/Copy_ISSN_to_Data_Manual.js`

### Functional description

Copy ISSN to Data Manual

### Functional logic

- If "ProductMediaType" == "Online", apply the corresponding branch logic.
- If "ProductMediaType" == "Print", apply the corresponding branch logic.
- Reads/writes attributes including: ProductMediaType, IDLPrintJournalISSN, JournalIssnHistory, IDLDigitalJournalISSN.

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

- **Key functions**: getDataContainerByTypeID, addDataContainer, createDataContainerObject

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 161
