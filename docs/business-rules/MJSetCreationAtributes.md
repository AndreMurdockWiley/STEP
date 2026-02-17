## MJSetCreationAtributes

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: MultiJournal
- **Product type(s) valid to**: MultiJournal
- **Attribute ID(s)**: ProductStatus
- **Attribute name(s)**: Product Status
- **Status**: Active
- **Source file(s)**: `PackageGroup/MJSetCreationAtributes.js`

### Functional description

This business action standardizes the initial status of a `MultiJournal` record by setting the `ProductStatus` attribute to a predefined status from the journal status list of values. The rule does not validate input or raise a configured user-facing error; it performs a direct status assignment.

### Functional logic

The rule executes a direct attribute update on the current object (`NODE`) with no conditional branching:

- Reads the `ProductStatus` value handle from the current `MultiJournal`.
- Looks up list-of-values `JRNLSTATUS_LOV` using value ID `"P"`.
- Retrieves the corresponding LOV value via `getValue()`.
- Writes that value to `ProductStatus` using `setSimpleValue()`.
- Always overwrites the current `ProductStatus` value when triggered.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/MJSetCreationAtributes.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getListOfValuesValueByID(), getValue(), setSimpleValue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 56
