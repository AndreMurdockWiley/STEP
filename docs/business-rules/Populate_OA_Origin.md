## Populate_OA_Origin

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalEEOContentFlipDate, JournalOAOrigin, ProductRevenueModel
- **Source file(s)**: `JournalWorkflowGroup/Populate_OA_Origin.js`

### Functional description

Populate_OA_Origin derives the journal's OA origin based on the revenue model and the presence of an EEO content flip date. When a journal is OA, it labels the origin as either "Flipped" (if a flip date exists) or "Born Gold" (if no flip date exists). When the journal is not OA, it clears any previously set OA origin.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads ProductRevenueModel and JournalEEOContentFlipDate.
- If ProductRevenueModel is "OA" and JournalEEOContentFlipDate is populated, set JournalOAOrigin to "Flipped".
- If ProductRevenueModel is "OA" and JournalEEOContentFlipDate is blank, set JournalOAOrigin to "Born Gold".
- If ProductRevenueModel is not "OA", clear JournalOAOrigin (set to null).

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/Populate_OA_Origin.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 351
