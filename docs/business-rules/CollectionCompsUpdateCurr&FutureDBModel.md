## CollectionCompsUpdateCurr&FutureDBModel

- **Rule type**: Business Action
- **Setup group**: CollectionUpsertGroup
- **Business area**: CollectionUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: CollectionCode, CollectionType, JournalInCurrentDatabaseModel, JournalInFutureDatabaseModel
- **Attribute name(s)**: Collection Code, Journal In Current Database Model, Journal In Future Database Model
- **Status**: Active
- **Source file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionCompsUpdateCurr&FutureDBModel.js`

### Functional description

Collection Component Update Curr & Future DB Model

### Functional logic

- If "CollectionCode" == "DB2025", continue; otherwise error.
- If "CollectionCode" == "DB2026", continue; otherwise error.
- Reads/writes attributes including: CollectionCode, CollectionType, JournalInCurrentDatabaseModel, JournalInFutureDatabaseModel.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferences(), getProductByID(), queryFor(), setValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 76
