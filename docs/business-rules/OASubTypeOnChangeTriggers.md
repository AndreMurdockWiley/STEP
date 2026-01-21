## OASubTypeOnChangeTriggers

- **Rule type**: Business Action
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: BundleGroup_BundleCode_DataContainer, JournalLastPriceQuoteContractYear, JournalLastPubYear, JournalMediaCode, JournalMediaRebillingEffectEndDate, JournalOnlineOpen, JournalOpenAccess, JournalTransferredToOnlineOnly, JournalUrlOnlineOpenOrderFormLink, JournalUrlOpenAccessContent, JournalWISPERSStatus, PreviousJournalLastPubYear, PreviousLastPQContractYear, PreviousPublicationType, PreviousRenewalSubscriptionType, PreviousRevenueModel, ProductActivated, ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType, ProductFinancePublicationType, ProductMediaType, ProductRenewalSubscriptionType, ProductRevenueModel, ProductStatus
- **Source file(s)**: `JournalUpsertGroup/OASubTypeOnChangeTriggers.js`

### Functional description

OA Sub Type On Change Triggers. It primarily works with attribute(s): BundleGroup_BundleCode_DataContainer, JournalLastPriceQuoteContractYear, JournalLastPubYear, JournalMediaCode, JournalMediaRebillingEffectEndDate, JournalOnlineOpen, JournalOpenAccess, JournalTransferredToOnlineOnly, JournalUrlOnlineOpenOrderFormLink, JournalUrlOpenAccessContent, JournalWISPERSStatus, PreviousJournalLastPubYear, PreviousLastPQContractYear, PreviousPublicationType, PreviousRenewalSubscriptionType, PreviousRevenueModel, ProductActivated, ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType, ProductFinancePublicationType, ProductMediaType, ProductRenewalSubscriptionType, ProductRevenueModel, ProductStatus. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

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

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/OASubTypeOnChangeTriggers.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 342
