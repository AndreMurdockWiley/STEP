## BA_triggerOIEPCollReport

- **Rule type**: Business Action
- **Setup group**: Actions
- **Business area**: Actions
- **Data model object valid to**: All
- **Attribute ID(s)**: DigitalJournalCode
- **Attribute name(s)**: Digital Journal Code
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Actions/BA_triggerOIEPCollReport.js`

### Functional description

BA_triggerOIEPCollReport. It primarily works with attribute(s): DigitalJournalCode. It is triggered from: oiep_CollectionStandardReport (Republish events for collections and journals). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. No detailed logic statement was found in the inventory for this rule; review the source file and STEP configuration for the exact branching and parameterization.

- No further functional logic details were extracted.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: oiep_CollectionStandardReport
  - **Task/Event**: Republish events for collections and journals

### Dependencies / key functions

- **Key functions**: getSelection(), getReferences(), republish()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 131
