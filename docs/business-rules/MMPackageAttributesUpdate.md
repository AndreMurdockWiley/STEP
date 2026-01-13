## MMPackageAttributesUpdate

- **Rule type**: Business Action
- **Business area**: PackageGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalMMPackageID, ProductFinanceBillingModel, ProductOwnershipStatus, ProductProfitCenter, ProductShortTitle, SAPProfitCenter, SocietyPrimaryAffiliated
- **Source file(s)**: `PackageGroup/MMPackageAttributesUpdate.js`

### Functional description

MM Package Attributes Update

### Functional logic

- Validate: "ProductActivated" = "Activated".
- If "SocietyPrimaryAffiliated" == "Primary", continue; otherwise error.
- If "SocietyPrimaryAffiliated" == "Owner", continue; otherwise error.
- If "SocietyPrimaryAffiliated" == "Part-owner", continue; otherwise error.
- Reads/writes attributes including: SAPProfitCenter, JournalMMPackageID, ProductProfitCenter, ProductOwnershipStatus, ProductShortTitle, ProductFinanceBillingModel, SocietyPrimaryAffiliated, ProductActivated.

### Errors

- **In-script message**: There is no Multimedia for the journal. Please Check

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 372
