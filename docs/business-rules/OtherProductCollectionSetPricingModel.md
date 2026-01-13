## OtherProductCollectionSetPricingModel

- **Rule type**: Business Action
- **Business area**: OtherProductCollectionRules
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionPricingModel, OtherProductCollectionType
- **Source file(s)**: `OtherProductCollectionRules/OtherProductCollectionSetPricingModel.js`

### Functional description

Other Product Collection Set Pricing Model. It primarily works with attribute(s): OtherProductCollectionPricingModel, OtherProductCollectionType.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "OtherProductCollectionType" == "Group Pricing Non FTE", apply the corresponding branch logic.
- If "OtherProductCollectionType" == "Group Pricing FTE", apply the corresponding branch logic.
- Reads/writes attributes including: OtherProductCollectionType, OtherProductCollectionPricingModel.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProductCollectionRules/OtherProductCollectionSetPricingModel.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 355
