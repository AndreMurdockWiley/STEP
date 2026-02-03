## search_object_using_key

- **Rule type**: Business Action
- **Business area**: Libraries
- **Data model object valid to**: All
- **Source file(s)**: `Libraries/search_object_using_key.js`

### Functional description

`search_object_using_key` is a reusable lookup action that searches STEP for an object by a configured **Object Key** (key type + key value). It returns the matching object when found, and returns `false` when no match exists. This supports rule logic that needs to resolve an incoming identifier (for example from an integration, user entry, or another object) into the corresponding STEP object.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Accepts two inputs:
  - `identifier_key`: the STEP Object Key identifier (the key definition name/ID configured in STEP).
  - `object_key_value`: the value to search for under that key.
- Performs a lookup using STEP’s NodeHome API: `manager.getNodeHome().getObjectByKey(identifier_key, object_key_value)`.
- If the lookup returns no object (`null`/empty), the rule returns `false`.
- If the lookup succeeds, the rule returns the found object reference.
- No message is shown to the user by this rule; any errors would come from STEP runtime (for example, invalid key identifier, missing permissions, or unexpected null manager).

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Libraries/search_object_using_key.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 352
