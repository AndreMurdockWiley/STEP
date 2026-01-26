## AutoClassificationJournalHistory

- **Rule type**: Business Action
- **Setup group**: AutoClassifyRules
- **Business area**: AutoClassifyRules
- **Data model object valid to**: JournalHistoryProducts
- **Product type(s) valid to**: JournalHistoryProducts
- **Attribute ID(s)**: JournalGroupCode, JournalHistoryAccessType, ProductRenewalSubscriptionType
- **Attribute name(s)**: Journal Group Code, Product Renewal Subscription Type, Journal History Access Type
- **Status**: Active
- **Source file(s)**: `AutoClassifyRules/AutoClassificationJournalHistory.js`

### Functional description

Auto Classification Journal History. It primarily works with attribute(s): JournalGroupCode, JournalHistoryAccessType, ProductRenewalSubscriptionType. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalGroupCode, ProductRenewalSubscriptionType, JournalHistoryAccessType.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): AutoClassifyRules/AutoClassificationJournalHistory.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferencedBy(), charCodeAt(), getProductByID(), setParent()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 74
