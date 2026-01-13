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

Backfiles DC Date Conversion

### Functional logic

- Reads/writes attributes including: JANISJournalBackfileContentStart, JANISJournalBackfileContentEnd, JournalBackfileContentStartDate, JournalBackfileContentEndDate.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: Date conversion in data containers

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 23
