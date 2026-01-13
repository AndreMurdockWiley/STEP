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

Populate History UUID in Backfile DC

### Functional logic

- Reads/writes attributes including: JournalBackfileContentJournalGroupCode, JournalBackfileContentISSN, BackfileDCHistoryUUID, BackfileAutopopulateHistoryUUID.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Key functions**: getDataContainerObjects(), queryFor(), execute()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 125
