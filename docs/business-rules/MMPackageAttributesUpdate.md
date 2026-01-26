## MMPackageAttributesUpdate

- **Rule type**: Business Action
- **Business area**: PackageGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalMMPackageID, ProductFinanceBillingModel, ProductOwnershipStatus, ProductProfitCenter, ProductShortTitle, SAPProfitCenter, SocietyPrimaryAffiliated
- **Source file(s)**: `PackageGroup/MMPackageAttributesUpdate.js`

### Functional description

MM Package Attributes Update. It primarily works with attribute(s): JournalMMPackageID, ProductFinanceBillingModel, ProductOwnershipStatus, ProductProfitCenter, ProductShortTitle, SAPProfitCenter, SocietyPrimaryAffiliated. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Validate: "ProductActivated" = "Activated".
- If "SocietyPrimaryAffiliated" == "Primary", continue; otherwise error.
- If "SocietyPrimaryAffiliated" == "Owner", continue; otherwise error.
- If "SocietyPrimaryAffiliated" == "Part-owner", continue; otherwise error.
- Reads/writes attributes including: SAPProfitCenter, JournalMMPackageID, ProductProfitCenter, ProductOwnershipStatus, ProductShortTitle, ProductFinanceBillingModel, SocietyPrimaryAffiliated, ProductActivated.

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
