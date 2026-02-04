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

Maintains the **Product DOI** and **Product URL** for Other Products that carry the bundle code **`OLBK`**. For qualifying products, the rule can generate a default DOI/URL from **Product ISBN13** (when no DOI exists) and keeps `COPY_DOI` / `COPY_URL` in sync as “last applied” values so the rule can detect and respect later manual changes. For non-`OLBK` products, the rule clears DOI/URL values to avoid populating book DOI links where they do not apply.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Checks the `BundleGroup_BundleCode_DataContainer` data containers for a `ProductBundleCodeID` value of **`OLBK`**.
- If **no** `OLBK` bundle code is found:
  - Sets `ProductDoi`, `ProductUrl`, `COPY_DOI`, and `COPY_URL` to **null**.
- If an `OLBK` bundle code **is** found:
  - Reads `ProductDoi`, `ProductUrl`, `COPY_DOI`, `COPY_URL`.
  - If `ProductDoi` is **null**:
    - Builds a default DOI from ISBN13: `10.1002/<ProductIsbn13>`.
    - Builds a default URL from the DOI: `https://www.onlinelibrary.wiley.com/doi/book/<DOI>`.
    - Writes `ProductDoi`/`ProductUrl` and copies the same values into `COPY_DOI`/`COPY_URL`.
  - If `ProductDoi` is **not** null:
    - If `COPY_DOI` differs from `ProductDoi`, treats the DOI as updated and sets `ProductUrl` to the standard Wiley “book DOI” URL for that DOI, then updates `COPY_DOI`.
    - If `COPY_URL` differs from `ProductUrl`, treats the URL as manually overridden and preserves the current `ProductUrl` value while updating `COPY_URL`.
    - Otherwise (URL unchanged but DOI changed), recomputes the standard URL from the DOI and updates `COPY_URL` accordingly.

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
