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

Populate MM Package Journal Ref Attributes

### Functional logic

- Validate: "ProductMediaType" = "Both".
- If "SocietyPrimaryAffiliated" == "Primary", continue; otherwise error.
- If "SocietyPrimaryAffiliated" == "Owner", continue; otherwise error.
- If "SocietyPrimaryAffiliated" == "Part-owner", continue; otherwise error.
- Reads/writes attributes including: SAPProfitCenter, JournalMMPackageID, ProductProfitCenter, ProductOwnershipStatus, ProductActivated, SocietyPrimaryAffiliated, ProductMediaType.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: queryClassificationProductLinks(), queryReferences(), getProductByID(), createReference()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 57
