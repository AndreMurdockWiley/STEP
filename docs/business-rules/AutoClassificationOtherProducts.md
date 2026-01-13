## AutoClassificationOtherProducts

- **Rule type**: Business Action
- **Setup group**: AutoClassifyRules
- **Business area**: AutoClassifyRules
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: ProductBundleCode, ProductBundleCodeID, ProductBundleGroupID
- **Attribute name(s)**: Product Bundle Code ID, Product Bundle Group ID
- **Status**: Active
- **Source file(s)**: `AutoClassifyRules/AutoClassificationOtherProducts.js`

### Functional description

Auto Classification Other Products. It primarily works with attribute(s): ProductBundleCode, ProductBundleCodeID, ProductBundleGroupID.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductBundleCodeID, ProductBundleCode, ProductBundleGroupID.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): AutoClassifyRules/AutoClassificationOtherProducts.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getDataContainerObjects(), charCodeAt(), setParent()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 83
