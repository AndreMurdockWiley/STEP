## SendOPCollectionToHeaderEnrichment

- **Rule type**: Business Action
- **Business area**: OtherProductCollectionRules
- **Data model object valid to**: All
- **Source file(s)**: `OtherProductCollectionRules/SendOPCollectionToHeaderEnrichment.js`

### Functional description

Dispatches header-level enrichment for Other Product Collections by invoking the shared business actions that populate key header attributes. Specifically, it copies the collection name into the title and assigns the pricing model. This rule itself contains no validations; any errors shown to users originate from the referenced business actions.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Invokes the referenced business action `CopyOtherProductCollectionNameToTitle` to copy the collection name into the title attribute.
- Invokes the referenced business action `OtherProductCollectionSetPricingModel` to set the pricing model for the collection header.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProductCollectionRules/SendOPCollectionToHeaderEnrichment.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 357
