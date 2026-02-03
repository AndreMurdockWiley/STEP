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

Calls an external integration endpoint (configured via a STEP Gateway binding) to **search/enrich an OtherProducts record by `ProductIsbn13`**. The action submits the product’s ISBN-13 to the endpoint (`requestType=ISBN13_SEARCH`, `application=STIBO`) and then uses the JSON response to populate STEP attributes and relationships, including:

- Updating the product’s **title/name** (`ProductFullTitle` and the node name).
- Deriving **process-related codes** from returned status + PPC code (`ProductPrimaryProcessCode`, `ProductProcessStatusCode`).
- Populating additional mapped attributes via the `NJLOOKUPTABLE` lookup mapping (simple values vs. LOV values).
- Creating/adding **Bundle** rows in `BundleGroup_BundleCode_DataContainer` (bundle code/group/subscription type).
- Linking the product to **Subject** classifications (and updating subject attributes) when subject codes are returned.

The action does not define a custom user-facing validation message; errors surface only if the gateway call/JSON parsing fails or if STEP rejects an attempted attribute write (e.g., invalid LOV ID).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `ProductIsbn13` from the current product and performs a **GET** request through the configured Gateway with query parameters `requestType=ISBN13_SEARCH`, `application=STIBO`, and `ISBN13=<ProductIsbn13>`.
- Parses the JSON response and iterates over the returned `NJData` payload, skipping a predefined list of response keys that should not be mapped into STEP.
- For response field **`PPCCode`**:
  - Reads the accompanying `Status` value from the payload.
  - Writes `ProductPrimaryProcessCode` as a concatenated string `"<Status>-<PPCCode>"`.
  - Writes `ProductProcessStatusCode` as an LOV selection using the same concatenated ID.
- For response field **`FullTitle`**:
  - Sets the product node name to the returned title.
  - Writes `ProductFullTitle` to the same value.
- For other scalar response fields:
  - Looks up the target STEP attribute ID via lookup table `NJLOOKUPTABLE` using the response key name.
  - Writes the mapped attribute either as a simple value or as an LOV value depending on configuration (certain keys are treated as LOV-backed).
  - Normalizes select date fields (`ContentStartDate`, `ContentEndDate`, `PublicationDate`) before writing.
- For response objects containing **Bundle** data:
  - Reads bundle code/group/subscription values and, when not already present, adds a new row to `BundleGroup_BundleCode_DataContainer`.
  - Sets `ProductBundleCode`, `ProductBundleGroup`, and `ProductBundleSubscriptionType` on the new data container row using LOV IDs.
- For response objects containing **Subject** data:
  - Builds a subject classification ID as `SC_<SubjectCode>`, finds the corresponding classification, and creates a `ProductToSubjectHierarchyLink` from the product to the subject (ignoring “already exists” cases).
  - Updates subject attributes `SubjectCode`, `SubjectOnlineCode`, `SubjectLevel2`, and `SubjectGroup` on the classification object.

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
