## PopulateNotPartOfSpecialProdAlert

- **Rule type**: Business Action
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalNotPartOfSpecialProd
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateNotPartOfSpecialProdAlert.js`

### Functional description

PopulateNotPartOfSpecialProdAlert

### Functional logic

- If "JournalNotPartOfSpecialProd" == "y", apply the corresponding branch logic.
- If "JournalNotPartOfSpecialProd" == "n", apply the corresponding branch logic.
- Reads/writes attributes including: JournalNotPartOfSpecialProd.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 332
