## BR_I_eCore

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: All
- **Product type(s) valid to**: OtherProducts
- **Attribute ID(s)**: BundleGroup_BundleCode_DataContainer, Error_Description, Error_ISBN13, Error_JSON_Load, Error_ProductFullTitle, Error_Timestamp, Journals_Trigger_Attribute, ProducFirstEditor, ProductActivated, ProductBundleCode, ProductBundleCodeID, ProductBundleGroup, ProductBundleGroupID, ProductBundleSubscriptionType, ProductContentCategory, ProductContentEndDate, ProductContentEndDateCentury, ProductContentPublicationType, ProductContentStartDate, ProductContentStartDateCentury, ProductCopyrightYear, ProductCostCenter, ProductDateMonographPublishedOnline, ProductDoi, ProductDownloadStatus, ProductFinanceDivision, ProductFinanceEntitlementPlatform, ProductFinancePublicationType, ProductFirstAuthor, ProductFullTitle, ProductIPOwningCompany, ProductImprint, ProductIsTaxable, ProductIsbn, ProductIsbn13, ProductMediumCode, ProductMonographEdition, ProductMonographVolume, ProductOclcReferenceNumber, ProductOneSourceTaxCode, ProductOnlineIdentifier, ProductParentPublicationTitleID, ProductPrimaryProcessCode, ProductProcessStatusCode, ProductProductGroup, ProductProductLine, ProductProductTypeCode, ProductProfitCenter, ProductPublicationDate, ProductSAPMaterialNumber, ProductSendToWispers, ProductSubMediumCode, ProductSubscriptionTypeID, ProductUrl, SAPExternalMaterialGroup, SubjectCode, SubjectGroup, SubjectLevel2, SubjectOnlineCode
- **Attribute name(s)**: Product ISBN13, Product ISBN, Product Copyright Year, Product Content Category, Product Content End Date, Product Content Start Date, Product Finance Division, Product SAP Material Number, Product Primary Process Code, Product Process Status Code, Product Full Title, Product Publication Date, and corresponding names
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Integrations/BR_I_eCore.js`

### Functional description

Inbound eCore. It primarily works with attribute(s): BundleGroup_BundleCode_DataContainer, Error_Description, Error_ISBN13, Error_JSON_Load, Error_ProductFullTitle, Error_Timestamp, Journals_Trigger_Attribute, ProducFirstEditor, ProductActivated, ProductBundleCode, ProductBundleCodeID, ProductBundleGroup, ProductBundleGroupID, ProductBundleSubscriptionType, ProductContentCategory, ProductContentEndDate, ProductContentEndDateCentury, ProductContentPublicationType, ProductContentStartDate, ProductContentStartDateCentury, ProductCopyrightYear, ProductCostCenter, ProductDateMonographPublishedOnline, ProductDoi, ProductDownloadStatus, ProductFinanceDivision, ProductFinanceEntitlementPlatform, ProductFinancePublicationType, ProductFirstAuthor, ProductFullTitle, ProductIPOwningCompany, ProductImprint, ProductIsTaxable, ProductIsbn, ProductIsbn13, ProductMediumCode, ProductMonographEdition, ProductMonographVolume, ProductOclcReferenceNumber, ProductOneSourceTaxCode, ProductOnlineIdentifier, ProductParentPublicationTitleID, ProductPrimaryProcessCode, ProductProcessStatusCode, ProductProductGroup, ProductProductLine, ProductProductTypeCode, ProductProfitCenter, ProductPublicationDate, ProductSAPMaterialNumber, ProductSendToWispers, ProductSubMediumCode, ProductSubscriptionTypeID, ProductUrl, SAPExternalMaterialGroup, SubjectCode, SubjectGroup, SubjectLevel2, SubjectOnlineCode. It is triggered from: OtherProductsCreationWF (State-2 initial state, conditional approval based on attribute completeness). If validation fails, the user sees an error message such as: "Creates Error_Record objects with error details, timestamps, and JSON payload when processing fails".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Locate task/state "New_Error".
- Trigger workflow event "toeCore".
- Calls: otherProductsLibrary.sequentialMatNoIncrement.
- Reads/writes attributes including: Error_Description, Error_ISBN13, Error_ProductFullTitle, Error_Timestamp, Error_JSON_Load, ProductIsbn, ProductCopyrightYear, ProductUrl, ProductOclcReferenceNumber, SAPExternalMaterialGroup.

### Errors

- **Configured error**: Creates Error_Record objects with error details, timestamps, and JSON payload when processing fails
- **In-script message**: ERROR IN PROCESSING Inbound eCore :

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: OtherProductsCreationWF
  - **Task/Event**: State-2 initial state, conditional approval based on attribute completeness
- **Configuration**: Error_Review_WF
  - **Task/Event**: toeCore trigger, "to GBPM error State" event
- **Configuration**: Workflow: —
  - **Task/Event**: Workflow State/Task: "New_Error", Workflow Event: "toeCore"

### Dependencies / key functions

- **Dependencies**: GenericFunctions, OtherProductsFunctions
- **Key functions**: JSON.parse(), searchOnAttribute(), setValue(), setLOVValueByID(), createProduct(), createClassificationProductLink(), createReference(), startWorkflowByID(), getDataContainerObjects(), sequentialMatNoIncrement(), dateNorm()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 129
