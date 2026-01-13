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

Generic Functions

### Functional logic

- Plugin: JavaScriptBusinessLibrary.
- Reads/writes attributes including: JournalGroupCode, JournalNumberOfVolumes, JournalPublicationYear, JournalMediaNumberOfVolumes.

### Errors

- **In-script message**: Invalid ISSN - Expecting

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: pad(), mediaCodeTransformation(), dateConverter(), getToday(), sendEmail(), getDataContainerObjects(), setValueToKeyAttribute(), issnAuthentication(), queryForObjTypeBelowWithValue(), queryForSingleObjByParentAndType(), getJournal(), getMedia(), copyValue(), wipePublishingAttributes(), removeFromWorkflow()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 17
