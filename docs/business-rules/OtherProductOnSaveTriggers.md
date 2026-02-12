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

This business action runs during save processing for Other Product records and uses the **Product Activated** status to decide whether downstream automation should run.  
When a product is marked as **Activated**, the rule automatically triggers the **AutoClassificationOtherProducts** action so the product is classified without manual intervention.  
If the product is not activated, the rule performs no additional action.

### Functional logic

- Reads the `ProductActivated` attribute from the current node on save.
- Evaluates whether the value equals `Activated`.
- If true:
  - Gets the parent node and manager context.
  - Resolves the business action `AutoClassificationOtherProducts`.
  - Executes that action for the current node.
- If false, exits without triggering classification.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/OtherProductsNavegation/OtherProductOnSaveTriggers.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: AutoClassificationOtherProducts
- **Key functions**: Conditional execution of classification rule

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 42
