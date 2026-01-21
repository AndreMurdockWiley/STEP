## Auto_Populate_Bundle_Code

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: BundleGroup_BundleCode_DataContainer, ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType
- **Attribute name(s)**: Product Bundle Code, Product Bundle Group, Product Bundle Subscription Type
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/Auto_Populate_Bundle_Code.js`

### Functional description

Auto Populate Bundle Code. It primarily works with attribute(s): BundleGroup_BundleCode_DataContainer, ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductBundleCode, ProductBundleGroup, ProductBundleSubscriptionType.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalUpsertGroup/Auto_Populate_Bundle_Code.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getDataContainerByTypeID(), addDataContainer(), createDataContainerObject(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 71
