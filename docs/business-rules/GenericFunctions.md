## GenericFunctions

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: All
- **Attribute ID(s)**: JournalGroupCode, JournalMediaNumberOfVolumes, JournalNumberOfVolumes, JournalPublicationYear
- **Attribute name(s)**: Various dates, media codes, backfile dates
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `Libraries/GenericFunctions.js`

### Functional description

Generic Functions. It primarily works with attribute(s): JournalGroupCode, JournalMediaNumberOfVolumes, JournalNumberOfVolumes, JournalPublicationYear. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalGroupCode, JournalNumberOfVolumes, JournalPublicationYear, JournalMediaNumberOfVolumes.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: Invalid ISSN - Expecting

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Libraries/GenericFunctions.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: pad(), mediaCodeTransformation(), dateConverter(), getToday(), sendEmail(), getDataContainerObjects(), setValueToKeyAttribute(), issnAuthentication(), queryForObjTypeBelowWithValue(), queryForSingleObjByParentAndType(), getJournal(), getMedia(), copyValue(), wipePublishingAttributes(), removeFromWorkflow()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 17
