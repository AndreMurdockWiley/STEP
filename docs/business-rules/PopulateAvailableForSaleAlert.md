## PopulateAvailableForSaleAlert

- **Rule type**: Business Action
- **Business area**: BackfilesUpsertGroup
- **Data model object valid to**: Backfiles
- **Attribute ID(s)**: JournalBackfileAvailForSale
- **Source file(s)**: `BackfilesUpsertGroup/PopulateAvailableForSaleAlert.js`

### Functional description

This rule validates and standardizes the **Backfile Available for Sale** flag (`JournalBackfileAvailForSale`) during Backfiles maintenance. The field is expected to contain only **Y**, **N**, or be left blank. When a user enters lowercase values, the rule normalizes them to uppercase to keep data consistent. If an invalid value is entered, the rule warns the user with guidance on accepted values.

### Functional logic

- Reads `JournalBackfileAvailForSale` from the current Backfiles record.
- If the value is `y` or `Y`, it writes back `Y`.
- If the value is `n` or `N`, it writes back `N`.
- If the value is populated with anything other than `Y`/`N` (case-insensitive), it raises a **WARNING** alert:  
  _"Backfile Available for Sale should be either 'Y' or 'N' or 'Blank'"_.
- If the value is valid (or blank), it shows an **ACKNOWLEDGMENT** alert:  
  _"Backfile successfully saved!"_.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): BackfilesUpsertGroup/PopulateAvailableForSaleAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 222
