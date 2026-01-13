## Integrations_Utility_Library

- **Rule type**: Library
- **Setup group**: Integrations
- **Business area**: Integrations
- **Product type(s) valid to**: Journal, OtherProducts, MultiJournal, MultiMedia
- **Attribute ID(s)**: AG_Backfile_JSON_EXTRACT, AG_COLLECTION, AG_Common_Attributes, AG_History_JSON, AG_MultiJournal_Attributes, AG_MultiMedia_Attributes, AG_NonJournals_Export, Collection_Attributes_Extra_Grouping, History_Attributes_Extra_Grouping, Include_MJ_Journal_Attr, Issues_Extract_Grouping, Journal_Attributes_Extra_Grouping, Media_Attributes_Extra_Grouping, TenantID
- **Attribute name(s)**: Various JSON attributes
- **Version**: 1.1
- **Status**: Active
- **Source file(s)**: `Integrations/Integrations_Utility_Library.js`

### Functional description

Integrations JSON Utility Library. It primarily works with attribute(s): AG_Backfile_JSON_EXTRACT, AG_COLLECTION, AG_Common_Attributes, AG_History_JSON, AG_MultiJournal_Attributes, AG_MultiMedia_Attributes, AG_NonJournals_Export, Collection_Attributes_Extra_Grouping, History_Attributes_Extra_Grouping, Include_MJ_Journal_Attr, Issues_Extract_Grouping, Journal_Attributes_Extra_Grouping, Media_Attributes_Extra_Grouping, TenantID.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- Reads/writes attributes including: TenantID.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Integrations/Integrations_Utility_Library.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: initialNodeJSON(), getClassificationRefAsJSON(), getValidAttributes()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 3
