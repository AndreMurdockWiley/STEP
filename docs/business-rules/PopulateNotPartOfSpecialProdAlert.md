## PopulateNotPartOfSpecialProdAlert

- **Rule type**: Business Action
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalNotPartOfSpecialProd
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateNotPartOfSpecialProdAlert.js`

### Functional description

Normalizes the JournalNotPartOfSpecialProd flag to a consistent uppercase value and warns the user when an unexpected value is entered. When the attribute is present, the action coerces "y"/"n" variants to "Y"/"N". If the value is something else (other than blank), it does not change the attribute and displays a warning so the user can correct the entry.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read JournalNotPartOfSpecialProd from the current JournalPrintMedia or JournalDigitalMedia node.
- If the value is "y" or "Y", overwrite the attribute with "Y".
- If the value is "n" or "N", overwrite the attribute with "N".
- If the value is any other non-blank value, leave the attribute unchanged and show a warning: "Not part of Special Prod should be either 'Y' or 'N' or 'Blank'".

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulateNotPartOfSpecialProdAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 332
