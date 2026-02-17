## MMPackageAttributesUpdate

- **Rule type**: Business Action
- **Business area**: PackageGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalMMPackageID, ProductFinanceBillingModel, ProductOwnershipStatus, ProductProfitCenter, ProductShortTitle, SAPProfitCenter, SocietyPrimaryAffiliated
- **Source file(s)**: `PackageGroup/MMPackageAttributesUpdate.js`

### Functional description

This business action keeps the Multimedia (MM) package aligned with its source Journal record. When a Journal is activated and has an MM Package ID, the rule finds the linked MM package and synchronizes core commercial attributes (profit center, ownership status, short title, and finance billing model). It also refreshes MM society-group references so rights ownership on the MM package reflects the Journal's current affiliation setup. If the MM package cannot be found, the user is alerted.

### Functional logic

1. Precondition checks:
   - `JournalMMPackageID` is not blank.
   - `ProductActivated` equals `Activated`.
2. From the Journal context, the rule reads:
   - the MM Package ID (`JournalMMPackageID`) to locate the target MM product,
   - the Journal's profit center (`SAPProfitCenter`) from the Journal media/cost-center link,
   - society-group references and each reference's `SocietyPrimaryAffiliated` value.
3. If the MM package exists:
   - remove existing MM society-group references,
   - update MM attributes:
     - `ProductProfitCenter` (mapped from the Journal SAP profit center LOV value),
     - `ProductOwnershipStatus`,
     - `ProductShortTitle`,
     - `ProductFinanceBillingModel`,
   - recreate society-group references on the MM package only where `SocietyPrimaryAffiliated` is `Owner` or `Part-owner` (duplicate-reference attempts are safely ignored).
4. If the MM package does not exist for the provided ID, show: `There is no Multimedia for the journal. Please Check`.

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
