## isbn13_search_action

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: OtherProducts
- **Product type(s) valid to**: OtherProducts
- **Attribute ID(s)**: BundleGroup_BundleCode_DataContainer, ProductBundleCode, ProductBundleCodeID, ProductBundleGroup, ProductBundleGroupID, ProductBundleSubscriptionType, ProductDownloadStatus, ProductFullTitle, ProductIsbn13, ProductPrimaryProcessCode, ProductProcessStatusCode, ProductSubscriptionTypeID, SubjectCode, SubjectGroup, SubjectLevel2, SubjectOnlineCode
- **Attribute name(s)**: Product ISBN13, Product ISBN, Product Primary Process Code, Product Process Status Code, Product Full Title
- **Status**: Active
- **Source file(s)**: `Integrations/isbn13_search_action.js`

### Functional description

ISBN13 Search Action for API. It primarily works with attribute(s): BundleGroup_BundleCode_DataContainer, ProductBundleCode, ProductBundleCodeID, ProductBundleGroup, ProductBundleGroupID, ProductBundleSubscriptionType, ProductDownloadStatus, ProductFullTitle, ProductIsbn13, ProductPrimaryProcessCode, ProductProcessStatusCode, ProductSubscriptionTypeID, SubjectCode, SubjectGroup, SubjectLevel2, SubjectOnlineCode.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Validate: "ProductIsbn" = "".
- Reads/writes attributes including: ProductIsbn13, ProductPrimaryProcessCode, ProductProcessStatusCode, ProductDownloadStatus, ProductFullTitle, ProductBundleCodeID, ProductBundleGroupID, ProductSubscriptionTypeID, ProductBundleCode, ProductBundleGroup.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Integrations/isbn13_search_action.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: gateway.get(), JSON.parse(), setValue(), setLOVValueByID(), createClassificationProductLink(), dataNorm()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 79
