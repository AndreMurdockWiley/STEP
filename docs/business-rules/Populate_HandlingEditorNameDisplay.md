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

Populate Handling Editor Name Display. It primarily works with attribute(s): JournalHandlingEditorNameDisplay.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: SetAttributeValueBusinessAction.
- Reads/writes attributes including: JournalHandlingEditorNameDisplay.
- Parameter "TextValue": Yes
- Parameter "ToAttribute": JournalHandlingEditorNameDisplay

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/Populate_HandlingEditorNameDisplay.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: SetAttributeValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 155
