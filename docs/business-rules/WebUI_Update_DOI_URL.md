## WebUI_Update_DOI_URL

- **Rule type**: Business Action
- **Business area**: OtherProductsUpsertGroup
- **Data model object valid to**: OtherProducts
- **Attribute ID(s)**: COPY_DOI, COPY_URL, ProductBundleCodeID, ProductDoi, ProductIsbn13, ProductUrl
- **Source file(s)**: `OtherProducts/OtherProductsUpsertGroup/WebUI_Update_DOI_URL.js`

### Functional description

WebUI_Update_DOI_URL. It primarily works with attribute(s): COPY_DOI, COPY_URL, ProductBundleCodeID, ProductDoi, ProductIsbn13, ProductUrl.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "ProductBundleCodeID" == "OLBK", apply the corresponding branch logic.
- Reads/writes attributes including: ProductBundleCodeID, ProductDoi, ProductUrl, COPY_URL, COPY_DOI, ProductIsbn13.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/OtherProductsUpsertGroup/WebUI_Update_DOI_URL.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 360
