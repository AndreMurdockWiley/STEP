## OPSAPFinanceAttributesGenerator

- **Rule type**: Business Action
- **Setup group**: OtherProductsUpsertGroup
- **Business area**: OtherProductsUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: MultiMedia
- **Attribute ID(s)**: ProductBundleCodeID, ProductBundleGroupID, ProductContentCategory, ProductFinanceDivision, ProductOneSourceTaxCode, ProductSAPMaterialNumber, SAPExternalMaterialGroup
- **Attribute name(s)**: SAP Material Number, Content Category, Finance Division, SAP External Material Group, OneSource Tax Code
- **Status**: Active
- **Source file(s)**: `OtherProducts/OtherProductsUpsertGroup/OPSAPFinanceAttributesGenerator.js`

### Functional description

Generates and populates SAP-facing finance attributes for eligible MultiMedia journal products during upsert processing.  
The rule uses bundle group and bundle code inputs to determine the correct OneSource tax code, assigns a new SAP material number from a managed sequential counter, and stamps standard finance defaults (content category, finance division, external material group) so outbound finance data is complete and consistent.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `BundleGroup_BundleCode_DataContainer` rows and retrieves `ProductBundleGroupID` and `ProductBundleCodeID`.
- For bundle groups `TP` or `RP`, derives `ProductOneSourceTaxCode` using bundle code mapping:
  - `ENOW` -> `eJournal`
  - `SNOW` -> `sFreight_Dom`
  - Any other code -> `eBooks`
- Generates `ProductSAPMaterialNumber` via `sequentialMatNoIncrement()` using product `ProductSequentialMatNo` as the sequence source.
- Sets finance defaults on the current product:
  - `ProductContentCategory` = `Publishing Content`
  - `ProductFinanceDivision` = `Research`
  - `SAPExternalMaterialGroup` = `NONJ`
- Writes the derived value to `ProductOneSourceTaxCode` (remains blank when no qualifying `TP`/`RP` bundle row is found).

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/OtherProductsUpsertGroup/OPSAPFinanceAttributesGenerator.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions), OtherProductsFunctions (otherProductsLibrary)
- **Key functions**: getDataContainerObjects(), sequentialMatNoIncrement()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 50
