## PackageWFSAPCreateTransition

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: MultiJournal
- **Product type(s) valid to**: MultiJournal
- **Status**: Active
- **Source file(s)**: `PackageGroup/PackageWFSAPCreateTransition.js`

### Functional description

MJ Package WF SAP Create Transition. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: ReferenceOtherBABusinessAction.
- Parameter "ReferencedBA": MJSequentialMatNoIncrement

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PackageGroup/PackageWFSAPCreateTransition.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: ReferenceOtherBABusinessAction

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 87
