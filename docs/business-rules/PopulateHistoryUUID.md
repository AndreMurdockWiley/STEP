## PopulateHistoryUUID

- **Rule type**: Business Action
- **Setup group**: BackfilesUpsertGroup
- **Business area**: BackfilesUpsertGroup
- **Data model object valid to**: Backfiles
- **Product type(s) valid to**: Backfiles
- **Attribute ID(s)**: BackfileAutopopulateHistoryUUID, BackfileDCHistoryUUID, JournalBackfileContentISSN, JournalBackfileContentJournalGroupCode, JournalGroupCode, JournalHistoryISSNOnline, JournalHistoryISSNPrint
- **Attribute name(s)**: Journal Backfile Content Journal Group Code, Journal Backfile Content ISSN, Backfile DC History UUID, Backfile Autopopulate History UUID, Journal Group Code, Journal History ISSN Print, Journal History ISSN Online
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `BackfilesUpsertGroup/PopulateHistoryUUID.js`

### Functional description

Populate History UUID in Backfile DC. It primarily works with attribute(s): BackfileAutopopulateHistoryUUID, BackfileDCHistoryUUID, JournalBackfileContentISSN, JournalBackfileContentJournalGroupCode, JournalGroupCode, JournalHistoryISSNOnline, JournalHistoryISSNPrint. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalBackfileContentJournalGroupCode, JournalBackfileContentISSN, BackfileDCHistoryUUID, BackfileAutopopulateHistoryUUID.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): BackfilesUpsertGroup/PopulateHistoryUUID.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: getDataContainerObjects(), queryFor(), execute()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 125
