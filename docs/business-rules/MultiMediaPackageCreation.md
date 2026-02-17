## MultiMediaPackageCreation

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalGroupCode, ProductFinanceBillingModel, ProductSAPMaterialNumber, ProductShortTitle, ProductStatus, ProductTitle
- **Attribute name(s)**: Journal Group Code, Journal MM Package ID, Product Status, Product Short Title, Product Finance Billing Model
- **Status**: Active
- **Source file(s)**: `PackageGroup/MultiMediaPackageCreation.js`

### Functional description

When `ProductMediaType = Both`, this business action automatically creates a new **MultiMedia package** from the `MM_InitialCreate` template. It then captures the newly created package ID back on the originating record (`JournalMMPackageID`) and populates core commercial metadata on the new package (status, short title, billing model, SAP material number, and display name/title). The result is a consistently initialized multimedia package ready for downstream classification and operational use.

### Functional logic

- **Precondition**: Runs only when `ProductMediaType` equals `Both`.
- Reads source values from the current node, including `JournalGroupCode`, `ProductShortTitle`, `ProductFinanceBillingModel`, and `ProductTitle`.
- Creates a new product of type `MultiMedia` under `MM_InitialCreate`.
- Writes the generated package ID to `JournalMMPackageID` on the source node.
- Normalizes `JournalGroupCode` to 4 characters using `genericFunctions.pad(...)` when needed.
- Sets values on the new MultiMedia package:
  - `ProductStatus` = `Current publication`
  - `ProductShortTitle` = source `ProductShortTitle`
  - `ProductFinanceBillingModel` = source `ProductFinanceBillingModel`
  - `ProductSAPMaterialNumber` = padded `JournalGroupCode` + `C`
  - Product name = source `ProductTitle`
- Executes follow-up business action `AutoClassificationMultiMediaPackages` on the new package.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/MultiMediaPackageCreation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: createProduct(), pad(), setSimpleValue(), setName(), execute()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 88
