## PopulateMMPackageJournalRefAttributes

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalMMPackageID, ProductActivated, ProductOwnershipStatus, ProductProfitCenter, SAPProfitCenter, SocietyPrimaryAffiliated
- **Attribute name(s)**: Product Profit Center, Product Ownership Status, Product Activated, Journal MM Package ID
- **Status**: Active
- **Source file(s)**: `PackageGroup/PopulateMMPackageJournalRefAttributes.js`

### Functional description

Populate multimedia package journal reference attributes for journals that support both media types. The rule uses the package's JournalMMPackageID to find the multimedia product, derives the SAP profit center from the package's cost center link, and copies ownership and activation values from the parent journal. It also mirrors owner or part-owner society group references from the journal onto the multimedia package, skipping references that already exist.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Precondition: ProductMediaType = "Both".
- Get the parent journal of the current package and the first ProductToCostCenterReferenceLink; read SAPProfitCenter from the linked classification.
- Resolve the multimedia product using JournalMMPackageID.
- Set ProductProfitCenter on the multimedia product using JournalSAPProfitCenter_LOV with the SAPProfitCenter id.
- Copy ProductOwnershipStatus from the journal to the multimedia product.
- Set ProductActivated on the multimedia product to "Activated".
- For each journal ProductToSocietyGroupReferenceLink, if SocietyPrimaryAffiliated is "Owner" or "Part-owner", create the same reference on the multimedia product; ignore duplicates.
- Reads/writes attributes including: JournalMMPackageID, ProductMediaType, SAPProfitCenter, ProductProfitCenter, ProductOwnershipStatus, ProductActivated, SocietyPrimaryAffiliated.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/PopulateMMPackageJournalRefAttributes.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryClassificationProductLinks(), queryReferences(), getProductByID(), createReference()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 57
