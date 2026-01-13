## WebUI_Update_DOI_URL

- **Rule type**: Business Action
- **Business area**: OtherProductsUpsertGroup
- **Data model object valid to**: OtherProducts
- **Attribute ID(s)**: COPY_DOI, COPY_URL, ProductBundleCodeID, ProductDoi, ProductIsbn13, ProductUrl
- **Source file(s)**: `OtherProducts/OtherProductsUpsertGroup/WebUI_Update_DOI_URL.js`

### Functional description

WebUI_Update_DOI_URL

### Functional logic

- If "ProductBundleCodeID" == "OLBK", apply the corresponding branch logic.
- Reads/writes attributes including: ProductBundleCodeID, ProductDoi, ProductUrl, COPY_URL, COPY_DOI, ProductIsbn13.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 360
