## PackageWFSAPCreateTransition

- **Rule type**: Business Action
- **Setup group**: PackageGroup
- **Business area**: PackageGroup
- **Data model object valid to**: MultiJournal
- **Product type(s) valid to**: MultiJournal
- **Status**: Active
- **Source file(s)**: `PackageGroup/PackageWFSAPCreateTransition.js`

### Functional description

MJ Package WF SAP Create Transition is an orchestration business action used during the SAP Create workflow transition for MultiJournal package records. Its purpose is to prepare a newly created package for downstream processing by coordinating standard initialization actions (title population, creation attribute setup, and sequential material number handling).

### Functional logic

The rule is implemented as a chained orchestration using `ReferenceOtherBABusinessAction` and executes the following referenced business actions in sequence:

1. `CopyPackageNameToTitle`  
   Copies the package name into the title field to align display and naming conventions.
2. `MJSetCreationAtributes`  
   Applies creation-time package attributes required for the initial state.
3. `MJSequentialMatNoIncrement`  
   Assigns or increments the sequential material number used for SAP/package tracking.

The transition rule itself contains no standalone validation branch; any data checks or failures are handled by the referenced actions.

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
