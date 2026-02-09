## PopulateRebilling

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: ProductActivated, ProductMediaType, ProductRenewalSubscriptionType
- **Source file(s)**: `JournalWorkflowGroup/PopulateRebilling.js`

### Functional description

Populate Rebilling Web UI Alert. When a product is activated and the subscription type is (or was just changed to) Open Access, this action checks whether the media type is non-print. If so, it warns the user to review the Rebilling tab; otherwise it acknowledges the save. The change detection uses the previous revision of the product to determine whether the subscription type switched to Open Access.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads ProductActivated, ProductRenewalSubscriptionType, and ProductMediaType from the current node.
- If the product is Activated and subscription type is Open Access, compares the current subscription type to the predecessor revision (if any) to detect a change to Open Access.
- Sets a warning flag when the subscription type is newly Open Access (or there is no predecessor revision).
- If the warning flag is set and media type is not Print, shows a WARNING alert: "Subscription Type is changed to OA. Review Rebilling Tab."
- Otherwise, shows an ACKNOWLEDGMENT alert: "Saved!"

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/PopulateRebilling.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 348
