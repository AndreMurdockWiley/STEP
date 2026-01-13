## PopulateAvailableForSaleAlert

- **Rule type**: Business Action
- **Business area**: BackfilesUpsertGroup
- **Data model object valid to**: Backfiles
- **Attribute ID(s)**: JournalBackfileAvailForSale
- **Source file(s)**: `BackfilesUpsertGroup/PopulateAvailableForSaleAlert.js`

### Functional description

PopulateAvailableForSaleAlert

### Functional logic

- If "JournalBackfileAvailForSale" == "y", apply the corresponding branch logic.
- If "JournalBackfileAvailForSale" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalBackfileAvailForSale.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 222
