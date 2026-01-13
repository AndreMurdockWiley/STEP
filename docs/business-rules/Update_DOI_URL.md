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

Update DOI URL

### Functional logic

- If "ProductBundleCodeID" == "OLBK", apply the corresponding branch logic.
- Reads/writes attributes including: ProductBundleCodeID, ProductDoi, ProductUrl, COPY_URL, COPY_DOI, ProductIsbn13.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: getDataContainerObjects(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 90
