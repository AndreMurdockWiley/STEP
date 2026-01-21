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

ISBN13 Search Action for API. It primarily works with attribute(s): BundleGroup_BundleCode_DataContainer, ProductBundleCode, ProductBundleCodeID, ProductBundleGroup, ProductBundleGroupID, ProductBundleSubscriptionType, ProductDownloadStatus, ProductFullTitle, ProductIsbn13, ProductPrimaryProcessCode, ProductProcessStatusCode, ProductSubscriptionTypeID, SubjectCode, SubjectGroup, SubjectLevel2, SubjectOnlineCode. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductIsbn13, ProductPrimaryProcessCode, ProductProcessStatusCode, ProductDownloadStatus, ProductFullTitle, ProductBundleCodeID, ProductBundleGroupID, ProductSubscriptionTypeID, ProductBundleCode, ProductBundleGroup.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: gateway.get(), JSON.parse(), setValue(), setLOVValueByID(), createClassificationProductLink(), dataNorm()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 79
