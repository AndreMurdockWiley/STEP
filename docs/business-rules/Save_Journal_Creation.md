## Save_Journal_Creation

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All Object Types
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/Save_Journal_Creation.js`

### Functional description

Confirms the journal creation action to the user and then returns them to the Journal Creation screen. The rule displays a success notification and redirects the UI back to the initiation screen for the newly created journal object.

### Functional logic

- Show an informational alert in the UI with the message: "Journal Successfully Created!".
- Navigate the user to the `InitateJournalCreationScreen`, passing the current journal object as the context for the screen.

### Errors

- **Configured error**: INFO: Journal Successfully Created!

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/Save_Journal_Creation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: showAlert, navigate

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 159
