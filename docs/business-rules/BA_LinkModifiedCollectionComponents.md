## BA_LinkModifiedCollectionComponents

- **Rule type**: Action
- **Setup group**: GlobalBusinessRulesRoot
- **Business area**: Collections
- **Data model object valid to**: Product
- **Product type(s) valid to**: OtherProductCollectionOffering, JournalCollectionsOffering
- **Attribute ID(s)**: OtherProductCollectionType, CollectionCategory
- **Attribute name(s)**: Other Product Collection Type, Collection Category
- **Version**: 2
- **Status**: Active

### Functional description

Links recently added and removed components of collections to separate reference types for tracking changes between Main and Approved workspaces. It primarily works with attribute(s): OtherProductCollectionType, CollectionCategory. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic.

- Determines collection type and corresponding reference types, retrieves components from Main workspace (for dynamic collections via queryReferencedBy, for others via queryReferences), retrieves components from Approved workspace within executeInWorkspace, clears existing add/remove reference links, compares arrays to identify removed components (in Approved not in Main) and added components (in Main not in Approved), creates new references for removed and added components under respective reference types. Supports Journal Collections, Database Collections, Dynamic Collections, Static Collections, and Static Access Collections with their specific reference types

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration to determine where it is called.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: GenericFunctions (lib), Collections_Endpoints_JSON_Utility_Lib (utilityLib)
- **Key functions**: getValue, getID, getReferenceTypeByID, queryReferencedBy, queryReferences, executeInWorkspace, getProductByID, clearAllComponentsReferences, filter, includes, createReference

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 147
