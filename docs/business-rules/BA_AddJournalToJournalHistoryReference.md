## BA_AddJournalToJournalHistoryReference

- **Rule type**: Business Action
- **Setup group**: JournalWorkflowGroup
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: JournalHistoryProducts, Journal
- **Product type(s) valid to**: Journal, JournalHistoryProducts
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`

### Functional description

Add Journal to Journal History Reference. If validation fails, the user sees an error message such as: "Error: "Please select only one History object at a time", "Cannot link History Journal object [name] to [journal] since [history] is already linked to [source]", "Selected object is not a Journal/Journal History object", "Cannot link more Journal to [name]. Only one Journal is allowed"".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

- **Configured error**: Error: "Please select only one History object at a time", "Cannot link History Journal object [name] to [journal] since [history] is already linked to [source]", "Selected object is not a Journal/Journal History object", "Cannot link more Journal to [name]. Only one Journal is allowed"
- **In-script message**: Please select only one History object at a time.
- **In-script message**: Cannot link History Journal object,
- **In-script message**: Cannot link more Journal to
- **In-script message**: Please select only one Journal.
 Only one Journal is allowed to keep in Journal Reference

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Key functions**: createReference(), queryReferencedBy(), showAlert()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 124
