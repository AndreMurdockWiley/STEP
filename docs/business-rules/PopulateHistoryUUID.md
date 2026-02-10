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

This business action populates **Backfile DC History UUID** for each Backfile content data container record when **Backfile Autopopulate History UUID** is set to **Yes**.  
For eligible records, the rule uses the Backfile row's **Journal Group Code** and **ISSN** to search Journal History products. When exactly one Journal History product matches, the rule writes that product ID into **Backfile DC History UUID**.  
If the match is ambiguous (multiple results) or no matching Journal History product is found, the rule clears **Backfile DC History UUID** to avoid storing an incorrect reference. After processing, the rule resets **Backfile Autopopulate History UUID** to **No** so the action only runs again when explicitly requested.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Iterates through all `JournalBackfileContentDataContainer` entries on the current Backfiles record.
- Reads `JournalBackfileContentJournalGroupCode`, `JournalBackfileContentISSN`, `BackfileDCHistoryUUID`, and `BackfileAutopopulateHistoryUUID` from each container row.
- Processes only rows where `BackfileAutopopulateHistoryUUID = "Yes"`.
- Queries `JournalHistoryProducts` where:
  - `JournalGroupCode` equals `JournalBackfileContentJournalGroupCode`, and
  - `JournalHistoryISSNPrint` equals the Backfile ISSN **or** `JournalHistoryISSNOnline` equals the Backfile ISSN.
- If exactly one Journal History product is found, sets `BackfileDCHistoryUUID` to that product ID.
- If zero or multiple products are found, sets `BackfileDCHistoryUUID` to `null`.
- Sets `BackfileAutopopulateHistoryUUID` to `"No"` after processing each row.

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
