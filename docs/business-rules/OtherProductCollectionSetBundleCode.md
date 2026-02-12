## OtherProductCollectionSetBundleCode

- **Rule type**: Action
- **Setup group**: OtherProductCollectionRules
- **Business area**: Collection Management
- **Data model object valid to**: Product
- **Product type(s) valid to**: All
- **Attribute ID(s)**: OtherProductCollectionType
- **Attribute name(s)**: Other Product Collection Type
- **Status**: Active
- **Source file(s)**: `OtherProductCollectionRules/OtherProductCollectionSetBundleCode.js`

### Functional description

This rule is a control point for products that belong to **dynamic** "Other Product Collections."  
It evaluates the **Other Product Collection Type** attribute and only qualifies products where the value is **Dynamic**.  
At present, the rule does not perform any update or enrichment action after qualification; it is effectively a ready-to-extend business action shell for future bundle-code logic.

### Functional logic

- Read **OtherProductCollectionType** on the current product.
- Compare the value to the constant **"Dynamic"**.
- Continue only when the comparison matches (`=`).
- No action steps are configured in the rule body, so the current runtime effect is **no data change** even when the precondition is met.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProductCollectionRules/OtherProductCollectionSetBundleCode.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: None (empty rule body)

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 105, 116
