## WebUI_Update_DOI_URL

- **Rule type**: Business Action
- **Business area**: OtherProductsUpsertGroup
- **Data model object valid to**: OtherProducts
- **Attribute ID(s)**: COPY_DOI, COPY_URL, ProductBundleCodeID, ProductDoi, ProductIsbn13, ProductUrl
- **Source file(s)**: `OtherProducts/OtherProductsUpsertGroup/WebUI_Update_DOI_URL.js`

### Functional description

Ensures **Online Library Book** products (identified by Bundle Code `OLBK`) have a consistent **DOI** and corresponding **Wiley Online Library book URL**. For `OLBK` items, the rule can auto-generate the DOI/URL from `ProductIsbn13`, initialize the audit/compare fields (`COPY_DOI`, `COPY_URL`), and detect when a user manually overrides the DOI and/or URL (showing an informational alert). For non-`OLBK` items, it clears `COPY_DOI` and `COPY_URL`.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- **Determine applicability (bundle code check)**:
  - Read bundle-code data containers and look for `ProductBundleCodeID = "OLBK"`.
  - If **no** `OLBK` bundle code is found, set `COPY_DOI = null` and `COPY_URL = null` and stop.
- **For `OLBK` items**:
  - Read `ProductIsbn13`, `ProductDoi`, `ProductUrl`, `COPY_DOI`, `COPY_URL`.
  - Compute the default DOI as `10.1002/<ProductIsbn13>` and the default URL as `https://www.onlinelibrary.wiley.com/doi/book/<DOI>`.
  - **If `ProductDoi` is empty**:
    - Set `ProductDoi` to the default DOI and set `ProductUrl` to the default URL.
    - Copy the final values into `COPY_DOI` and `COPY_URL`.
  - **Else if `COPY_DOI` is empty and `ProductDoi` is not the default DOI**:
    - Standardize by setting `ProductDoi`/`ProductUrl` to the default DOI/URL.
    - Copy the final values into `COPY_DOI` and `COPY_URL`.
  - **Else (track manual overrides)**:
    - If `ProductDoi` differs from `COPY_DOI`, treat this as a **manual DOI override**:
      - Rebuild `ProductUrl` from the current `ProductDoi` (`…/doi/book/<ProductDoi>`).
      - Set `COPY_DOI = ProductDoi` and show an INFO alert: `"DOI/URL overridden Manually"`.
    - If `ProductUrl` differs from `COPY_URL`, treat this as a **manual URL override**:
      - Keep the entered `ProductUrl`, set `COPY_URL = ProductUrl`, and show the same INFO alert.
    - Otherwise, if DOI changed (but URL was not independently overridden), update `COPY_URL` to the rebuilt URL and show the same INFO alert.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): OtherProducts/OtherProductsUpsertGroup/WebUI_Update_DOI_URL.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 360
