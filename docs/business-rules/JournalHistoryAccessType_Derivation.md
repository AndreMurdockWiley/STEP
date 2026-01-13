## JournalHistoryAccessType_Derivation

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **MDD reference ID**: Journal_History_Reference
- **Attribute ID(s)**: JournalHistoryAccessType, JournalHistorySequenceNumber, ProductRenewalSubscriptionType
- **Attribute name(s)**: Product Renewal Subscription Type, Journal History Sequence Number, Journal History Access Type
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/JournalHistoryAccessType_Derivation.js`

### Functional description

Journal History Access Type Derivation. It primarily works with attribute(s): JournalHistoryAccessType, JournalHistorySequenceNumber, ProductRenewalSubscriptionType.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalHistorySequenceNumber" == "1", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Calendar Year", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: ProductRenewalSubscriptionType, JournalHistorySequenceNumber, JournalHistoryAccessType.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/JournalHistoryAccessType_Derivation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getReferences(), getTarget(), getSimpleValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 168
