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

On journal creation/upsert, this rule defaults the Journal Primary Portfolio attribute to a baseline value so the record is not left blank. It ensures newly created journals start with the classification "Not Classified" until a specific portfolio is assigned.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: SetAttributeValueBusinessAction.
- Writes JournalPrimaryPortfolio with the fixed text value "Not Classified".
- No source attribute, workflow, or workflow variable is used; the value is constant.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/Populate_PrimaryPortfolio_Creation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: SetAttributeValueBusinessAction

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 93
