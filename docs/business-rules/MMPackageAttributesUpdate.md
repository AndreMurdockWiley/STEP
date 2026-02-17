## MMPackageAttributesUpdate

- **Rule type**: Business Action
- **Business area**: PackageGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalMMPackageID, ProductFinanceBillingModel, ProductOwnershipStatus, ProductProfitCenter, ProductShortTitle, SAPProfitCenter, SocietyPrimaryAffiliated
- **Source file(s)**: `PackageGroup/MMPackageAttributesUpdate.js`

### Functional description

This business action synchronizes key package attributes from a **Journal** to its linked **Multimedia (MM) package**.  
It runs for activated Journals with a populated `JournalMMPackageID`, then updates the referenced MM package with current Journal values (finance billing model, ownership status, short title, and profit center mapping).  
It also refreshes MM package society-group references so that only Journal affiliations marked as **Owner** or **Part-owner** are retained. If no MM package is found for the Journal, the user is shown an error alert.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- **Preconditions**
  - `JournalMMPackageID` is not empty.
  - `ProductActivated` equals `Activated`.
- From the Journal's first media child, read the linked cost center and derive `SAPProfitCenter`.
- Resolve the target MM package using `JournalMMPackageID`.
- If the MM package exists:
  - Remove existing MM package society-group references (`ProductToSocietyGroupReferenceLink`) before rebuild.
  - Update MM package attributes:
    - `ProductProfitCenter` (mapped via `JournalSAPProfitCenter_LOV` from `SAPProfitCenter`)
    - `ProductOwnershipStatus`
    - `ProductShortTitle`
    - `ProductFinanceBillingModel`
  - Recreate society-group references from Journal to MM package only when `SocietyPrimaryAffiliated` is `Owner` or `Part-owner` (duplicate links are ignored).
- If the MM package does not exist, show alert: **"There is no Multimedia for the journal. Please Check"**.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: There is no Multimedia for the journal. Please Check

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/MMPackageAttributesUpdate.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 372
