## OtherProductCollectionSetPricingModel

- **Rule type**: Business Action
- **Business area**: OtherProductCollectionRules
- **Data model object valid to**: All
- **Attribute ID(s)**: OtherProductCollectionPricingModel, OtherProductCollectionType
- **Source file(s)**: `OtherProductCollectionRules/OtherProductCollectionSetPricingModel.js`

### Functional description

Other Product Collection Set Pricing Model

### Functional logic

- If "OtherProductCollectionType" == "Group Pricing Non FTE", apply the corresponding branch logic.
- If "OtherProductCollectionType" == "Group Pricing FTE", apply the corresponding branch logic.
- Reads/writes attributes including: OtherProductCollectionType, OtherProductCollectionPricingModel.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 355
