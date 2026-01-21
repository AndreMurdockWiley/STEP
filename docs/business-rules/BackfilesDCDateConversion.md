## BackfilesDCDateConversion

- **Rule type**: Business Action
- **Setup group**: BackfilesUpsertGroup
- **Business area**: BackfilesUpsertGroup
- **Data model object valid to**: Backfiles
- **Product type(s) valid to**: Backfiles
- **Attribute ID(s)**: JANISJournalBackfileContentEnd, JANISJournalBackfileContentStart, JournalBackfileContentEndDate, JournalBackfileContentStartDate
- **Attribute name(s)**: JANIS Journal Backfile Content Start, JANIS Journal Backfile Content End, Journal Backfile Content Start Date, Journal Backfile Content End Date
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `BackfilesUpsertGroup/BackfilesDCDateConversion.js`

### Functional description

Backfiles DC Date Conversion. It primarily works with attribute(s): JANISJournalBackfileContentEnd, JANISJournalBackfileContentStart, JournalBackfileContentEndDate, JournalBackfileContentStartDate. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JANISJournalBackfileContentStart, JANISJournalBackfileContentEnd, JournalBackfileContentStartDate, JournalBackfileContentEndDate.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): BackfilesUpsertGroup/BackfilesDCDateConversion.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: Date conversion in data containers

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 23
