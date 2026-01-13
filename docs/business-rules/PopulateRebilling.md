## PopulateRebilling

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductActivated, ProductMediaType, ProductRenewalSubscriptionType
- **Source file(s)**: `JournalWorkflowGroup/PopulateRebilling.js`

### Functional description

Populate Rebilling Web UI Alert

### Functional logic

- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- Reads/writes attributes including: ProductMediaType, ProductRenewalSubscriptionType, ProductActivated.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 348
