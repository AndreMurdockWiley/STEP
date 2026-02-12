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

This business action acts as an activation trigger for Other Products.  
When **Product Activated** is set to **Activated**, the rule immediately calls the downstream classification action (**AutoClassificationOtherProducts**) so the product is automatically placed under the correct Other Products structure.  
If the product is not activated, the rule exits without making changes.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads the **ProductActivated** attribute from the current product node.
- Checks whether **ProductActivated = "Activated"**.
- If activated:
  - Gets the parent node and manager context.
  - Resolves business action **AutoClassificationOtherProducts** from Business Rule Home.
  - Executes that action for the current node (`businessAction.execute(NODE)`), delegating the actual auto-classification.
- If not activated, no downstream action is executed.

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
