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

Copy Issn To Data Container. It primarily works with attribute(s): ISSNHistory_DataContainer, JournalIssnHistory, ProductIssn. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductIssn, JournalIssnHistory.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getObjectType(), getParent(), getDataContainerByTypeID(), addDataContainer(), createDataContainerObject()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 73
