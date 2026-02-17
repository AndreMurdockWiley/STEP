## OPRecieveDataFromCoreHub

- **Rule type**: Business Action
- **Setup group**: OtherProductsWorkflowGroup
- **Business area**: OtherProductsWorkflowGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `OtherProducts/OtherProductsWorkflowGroup/OPRecieveDataFromCoreHub.js`

### Functional description

`OPRecieveDataFromCoreHub` is an orchestration-style business action in the Other Products workflow. The rule itself does not contain custom transformation logic; instead, it delegates processing to referenced business actions that enrich product data used by downstream processes.

### Functional logic

The rule is implemented through `ReferenceOtherBABusinessAction` plugins and executes the referenced business actions in configured order:

1. Invoke `Update_DOI_URL` to run DOI URL update logic maintained in that referenced action.
2. Invoke `OPSAPFinanceAttributesGenerator` to run SAP finance attribute generation logic maintained in that referenced action.

No additional inline conditions, validations, or calculations are defined directly in `OPRecieveDataFromCoreHub`; behavior is determined by the referenced actions above.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/OtherProductsWorkflowGroup/OPRecieveDataFromCoreHub.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: ReferenceOtherBABusinessAction

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 54
