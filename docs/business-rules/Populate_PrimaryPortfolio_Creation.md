## Populate_PrimaryPortfolio_Creation

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Product type(s) valid to**: Not specified
- **Attribute ID(s)**: JournalPrimaryPortfolio
- **Attribute name(s)**: Journal Primary Portfolio
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/Populate_PrimaryPortfolio_Creation.js`

### Functional description

Populate PrimaryPortfolio Creation

### Functional logic

- Plugin: SetAttributeValueBusinessAction.
- Reads/writes attributes including: JournalPrimaryPortfolio.
- Parameter "TextValue": Not Classified
- Parameter "ToAttribute": JournalPrimaryPortfolio

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: SetAttributeValueBusinessAction

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 93
