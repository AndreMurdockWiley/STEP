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

To set default values to some journal attributes, during journal creation with Journal Handover Form. It primarily works with attribute(s): JournalTrueStatus, ProductSubType, JournalStatusOnOL, JournalAccessBasis, JournalRightsDarkArchServices, ProductDivision, ProductLanguage.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalTrueStatus" == "Yes", apply the corresponding branch logic.
- Reads/writes attributes including: JournalTrueStatus, ProductSubType, JournalStatusOnOL, JournalAccessBasis, JournalRightsDarkArchServices, ProductDivision, ProductLanguage.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/SetJournalDefaultValues.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: getValue(), setValue(), addValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 127
