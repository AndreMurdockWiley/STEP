## SetJournalDefaultValues

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalTrueStatus, ProductSubType, JournalStatusOnOL, JournalAccessBasis, JournalRightsDarkArchServices, ProductDivision, ProductLanguage
- **Attribute name(s)**: Journal True Status, Product Sub Type, Journal Status On OL, Journal Access Basis, Journal Rights Dark Arch Services, Product Division, Product Language
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/SetJournalDefaultValues.js`

### Functional description

To set default values to some journal attributes, during journal creation with Journal Handover Form.

### Functional logic

- If "JournalTrueStatus" == "Yes", apply the corresponding branch logic.
- Reads/writes attributes including: JournalTrueStatus, ProductSubType, JournalStatusOnOL, JournalAccessBasis, JournalRightsDarkArchServices, ProductDivision, ProductLanguage.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Key functions**: getValue(), setValue(), addValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 127
