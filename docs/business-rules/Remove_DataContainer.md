## Remove_DataContainer

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalMarketingInitiativesDataContainer
- **Status**: Active
- **Source file(s)**: `Actions/Remove_DataContainer.js`

### Functional description

Removes the JournalMarketingInitiativesDataContainer from the current object when the business action is invoked, clearing any marketing-initiative data stored in that container. It is triggered from: Business action (triggered via Web UI / workflow event). No user-facing validation message is configured.

### Functional logic

The rule performs a simple, unconditional delete of the marketing initiatives data container:

- Retrieve the data container by type ID `JournalMarketingInitiativesDataContainer` from the current object.
- Call `deleteLocal()` on that container to remove it from the object.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerByTypeID(), deleteLocal()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 60
