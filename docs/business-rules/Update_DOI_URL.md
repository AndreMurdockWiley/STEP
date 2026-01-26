## Update_DOI_URL

- **Rule type**: Business Action
- **Setup group**: OtherProducts
- **Business area**: OtherProducts
- **Data model object valid to**: OtherProducts
- **Product type(s) valid to**: OtherProducts
- **Attribute ID(s)**: COPY_DOI, COPY_URL, ProductBundleCodeID, ProductDoi, ProductIsbn13, ProductUrl
- **Attribute name(s)**: Product DOI, Product URL, Copy URL, Copy DOI, Product ISBN13
- **Status**: Active
- **Source file(s)**: `OtherProducts/Update_DOI_URL.js`

### Functional description

Update DOI URL. It primarily works with attribute(s): COPY_DOI, COPY_URL, ProductBundleCodeID, ProductDoi, ProductIsbn13, ProductUrl. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductBundleCodeID, ProductDoi, ProductUrl, COPY_URL, COPY_DOI, ProductIsbn13.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/Update_DOI_URL.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getDataContainerObjects(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 90
