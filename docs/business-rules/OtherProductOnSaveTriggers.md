## OtherProductOnSaveTriggers

- **Rule type**: Business Action
- **Setup group**: OtherProductsNavegation
- **Business area**: OtherProductsNavegation
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ProductActivated
- **Attribute name(s)**: Product Activated
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `OtherProducts/OtherProductsNavegation/OtherProductOnSaveTriggers.js`

### Functional description

Other Product On Save Triggers

### Functional logic

- If "ProductActivated" == "Activated", apply the corresponding branch logic.
- Reads/writes attributes including: ProductActivated.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: AutoClassificationOtherProducts
- **Key functions**: Conditional execution of classification rule

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 42
