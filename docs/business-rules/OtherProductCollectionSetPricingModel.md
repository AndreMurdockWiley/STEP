## OtherProductCollectionSetPricingModel

- **Rule type**: Business Action
- **Business area**: OtherProductCollectionRules
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionPricingModel, OtherProductCollectionType
- **Source file(s)**: `OtherProductCollectionRules/OtherProductCollectionSetPricingModel.js`

### Functional description

This business action automatically assigns the correct pricing model for an Other Product Collection based on the selected collection type. It standardizes pricing-model selection for group-pricing scenarios, reduces manual data entry, and helps keep collection records consistent.

In scope, the rule maps:
- **Group Pricing Non FTE** -> **PMNFTE**
- **Group Pricing FTE** -> **PMFTE**

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory and script.

- Reads `OtherProductCollectionType` from the current object.
- If `OtherProductCollectionType` is **Group Pricing Non FTE**, sets `OtherProductCollectionPricingModel` to LOV ID **PMNFTE**.
- If `OtherProductCollectionType` is **Group Pricing FTE**, sets `OtherProductCollectionPricingModel` to LOV ID **PMFTE**.
- For any other collection type, the rule does not change `OtherProductCollectionPricingModel`.
- Logs the resolved collection type for traceability.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProductCollectionRules/OtherProductCollectionSetPricingModel.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 355
