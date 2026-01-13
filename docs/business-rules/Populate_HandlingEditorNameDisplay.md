## Populate_HandlingEditorNameDisplay

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalHandlingEditorNameDisplay
- **Attribute name(s)**: Journal Handling Editor Name Display
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/Populate_HandlingEditorNameDisplay.js`

### Functional description

Populate Handling Editor Name Display

### Functional logic

- Plugin: SetAttributeValueBusinessAction.
- Reads/writes attributes including: JournalHandlingEditorNameDisplay.
- Parameter "TextValue": Yes
- Parameter "ToAttribute": JournalHandlingEditorNameDisplay

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Key functions**: SetAttributeValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 155
