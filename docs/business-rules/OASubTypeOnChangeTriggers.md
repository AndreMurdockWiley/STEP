## OASubTypeOnChangeTriggers

- **Rule type**: Business Action
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: BundleGroup_BundleCode_DataContainer, JournalLastPriceQuoteContractYear, JournalLastPubYear, JournalMediaCode, JournalMediaRebillingEffectEndDate, JournalOnlineOpen, JournalOpenAccess, JournalTransferredToOnlineOnly, JournalUrlOnlineOpenOrderFormLink, JournalUrlOpenAccessContent, JournalWISPERSStatus, PreviousJournalLastPubYear, PreviousLastPQContractYear, PreviousPublicationType, PreviousRenewalSubscriptionType, PreviousRevenueModel, ProductActivated, ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType, ProductFinancePublicationType, ProductMediaType, ProductRenewalSubscriptionType, ProductRevenueModel, ProductStatus
- **Source file(s)**: `JournalUpsertGroup/OASubTypeOnChangeTriggers.js`

### Functional description

OA Sub Type On Change Triggers

### Functional logic

- If "JournalMediaCode" == "Electronic", continue; otherwise error.
- If "ProductStatus" == "Current publication", continue; otherwise error.
- If "ProductBundleCode" == "Journals Product group TP", continue; otherwise error.
- If "ProductBundleCode" == "Open Access Journals", continue; otherwise error.
- If "ProductActivated" == "Activated", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- If "ProductRenewalSubscriptionType" == "Open Access", apply the corresponding branch logic.
- If "ProductMediaType" == "Both", apply the corresponding branch logic.
- If "ProductMediaType" == "Online", apply the corresponding branch logic.
- Reads/writes attributes including: ProductMediaType, ProductRenewalSubscriptionType, ProductActivated, JournalMediaCode, PreviousRenewalSubscriptionType, PreviousRevenueModel, PreviousJournalLastPubYear, JournalLastPubYear, PreviousLastPQContractYear, JournalLastPriceQuoteContractYear.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 342
