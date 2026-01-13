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

Auto Classification Journal History

### Functional logic

- If "ProductRenewalSubscriptionType" == "Calendar Year", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: JournalGroupCode, ProductRenewalSubscriptionType, JournalHistoryAccessType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryReferencedBy(), charCodeAt(), getProductByID(), setParent()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 74
