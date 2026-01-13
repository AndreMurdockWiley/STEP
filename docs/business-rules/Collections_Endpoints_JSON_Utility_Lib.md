## Collections_Endpoints_JSON_Utility_Lib

- **Rule type**: Library
- **Setup group**: Integrations
- **Business area**: Integrations
- **Product type(s) valid to**: JournalCollectionsOffering, OtherProductCollectionOffering
- **Attribute ID(s)**: AG_Backfile_JSON_EXTRACT, AG_COLLECTION, AG_Common_Attributes, AG_History_JSON, AG_MultiJournal_Attributes, AG_MultiMedia_Attributes, AG_NonJournals_Export, Collection_Attributes_Extra_Grouping, History_Attributes_Extra_Grouping, Include_MJ_Journal_Attr, Issues_Extract_Grouping, Journal_Attributes_Extra_Grouping, Media_Attributes_Extra_Grouping
- **Attribute name(s)**: Collection attributes
- **Version**: 1.2
- **Status**: Active
- **Source file(s)**: `Integrations/Collections_Endpoints_JSON_Utility_Lib.js`

### Functional description

Collections Integrations JSON Utility Library. It primarily works with attribute(s): AG_Backfile_JSON_EXTRACT, AG_COLLECTION, AG_Common_Attributes, AG_History_JSON, AG_MultiJournal_Attributes, AG_MultiMedia_Attributes, AG_NonJournals_Export, Collection_Attributes_Extra_Grouping, History_Attributes_Extra_Grouping, Include_MJ_Journal_Attr, Issues_Extract_Grouping, Journal_Attributes_Extra_Grouping, Media_Attributes_Extra_Grouping. If validation fails, the user sees an error message such as: "Error in getReferencesAsJSON function:".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.

### Errors

- **In-script message**: Error in getReferencesAsJSON function:
- **In-script message**: Error in getReferencesAsJSON_ModifiedComponents function:
- **In-script message**: clearModifiedComponentsReferences failed:
- **In-script message**: Error in getReferencesToValuesAsJSON function:
- **In-script message**: Error in getReferencedByToValuesAsJSONCollection function:
- **In-script message**: Error in getReferencedByToValuesAsJSONHistory function:

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Integrations/Collections_Endpoints_JSON_Utility_Lib.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: currentNodeInitialJSON(), getReferencesAsJSON_ModifiedComponents(), clearAllComponentsReferences()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 4
