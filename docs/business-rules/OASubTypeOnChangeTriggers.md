## OASubTypeOnChangeTriggers

- **Rule type**: Business Action
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: BundleGroup_BundleCode_DataContainer, JournalLastPriceQuoteContractYear, JournalLastPubYear, JournalMediaCode, JournalMediaRebillingEffectEndDate, JournalOnlineOpen, JournalOpenAccess, JournalTransferredToOnlineOnly, JournalUrlOnlineOpenOrderFormLink, JournalUrlOpenAccessContent, JournalWISPERSStatus, PreviousJournalLastPubYear, PreviousLastPQContractYear, PreviousPublicationType, PreviousRenewalSubscriptionType, PreviousRevenueModel, ProductActivated, ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType, ProductFinancePublicationType, ProductMediaType, ProductRenewalSubscriptionType, ProductRevenueModel, ProductStatus
- **Source file(s)**: `JournalUpsertGroup/OASubTypeOnChangeTriggers.js`

### Functional description

This business action aligns Journal and Journal Media records when an **activated** Journal is set to **Open Access** renewal subscription type. It preserves key "before change" values (such as prior renewal subscription type, revenue model, publication type, last publication year, and last price quote contract year), then applies the Open Access target state across product-level and media-level attributes.

In practice, the rule updates OA indicators, finance publication type, rebilling timing, and bundle data containers so the Journal is consistently represented as an OA title in downstream processes. The logic also compares current data to the **Approved** workspace snapshot to store prior-state values only when a true transition occurred. This is a Business Action (data update rule), so it does not present a dedicated validation error message to end users.

### Functional logic

The rule executes as update logic (not validation). Its behavior can be summarized as follows:

- **Entry gate**: Runs only when `ProductActivated = "Activated"`.
- **OA transition gate**: Main transformation logic runs when `ProductRenewalSubscriptionType = "Open Access"`.

- **Capture prior subscription state**:
  - On the first non-print child media record, reads the Journal's approved version.
  - If the approved `ProductRenewalSubscriptionType` was not Open Access, writes that value to `PreviousRenewalSubscriptionType`.

- **Electronic media updates during OA transition**:
  - Copies current values into history fields:
    - `JournalLastPubYear` -> `PreviousJournalLastPubYear`
    - `JournalLastPriceQuoteContractYear` -> `PreviousLastPQContractYear`
  - Reads approved `ProductRevenueModel`; if it was not `OA`, stores it in `PreviousRevenueModel`.
  - If approved renewal subscription type was not Open Access, stores current `ProductFinancePublicationType` in `PreviousPublicationType` and sets `JournalMediaRebillingEffectEndDate` to **31-Dec of next calendar year**.
  - Sets OA state flags:
    - `JournalOpenAccess = Y`
    - `JournalOnlineOpen = N`
  - Forces `ProductFinancePublicationType` to LOV value `JA`.

- **Media-status handling for mixed media journals**:
  - If parent `ProductMediaType = "Both"` and any non-electronic child is `ProductStatus = "Current publication"`, sets `JournalTransferredToOnlineOnly = Y` on non-print media children.

- **Journal-level OA updates**:
  - Sets `ProductRevenueModel` to LOV value `OA`.
  - Clears `JournalUrlOnlineOpenOrderFormLink`.

- **Bundle data container maintenance**:
  - For `ProductMediaType` = `Online` or `Both`, iterates `BundleGroup_BundleCode_DataContainer` on the Journal:
    - If bundle code is `Journals Product group TP`, clears `ProductBundleGroup`.
    - Tracks whether bundle code `Open Access Journals` already exists.
  - If missing (and approved renewal subscription type was not Open Access), creates an `Open Access Journals` container with:
    - `ProductBundleGroup = RP` (Renewal Paid)
    - `ProductBundleSubscriptionType = N/A`
  - On electronic media, if no bundle container exists (and approved renewal subscription type was not Open Access), creates:
    - `ProductBundleCode = Journals Product group TP`
    - `ProductBundleGroup = Renewal Paid`
    - `ProductBundleSubscriptionType = Not Applicable`

- **Partial approvals**:
  - Performs partial approval for:
    - `PreviousRenewalSubscriptionType`
    - `PreviousRevenueModel`
    - `ProductRevenueModel`
    - `ProductRenewalSubscriptionType`
  - Applies these approvals to the parent Journal and any media children updated in this rule run.

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
