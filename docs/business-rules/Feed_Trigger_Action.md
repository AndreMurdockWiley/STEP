## Feed_Trigger_Action

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: All
- **Product type(s) valid to**: AllObjectTypesValid="true"
- **Attribute ID(s)**: JournalIssueTemplateCreation, MessageStatus, ProductTitle
- **Attribute name(s)**: Journal Issue Template Creation, Message Status, Product Title, Other Product Collection Type, Collection Category
- **Version**: 2
- **Status**: Active
- **Source file(s)**: `Integrations/Feed_Trigger_Action.js`

### Functional description

Feed Trigger Action. It primarily works with attribute(s): JournalIssueTemplateCreation, MessageStatus, ProductTitle. If validation fails, the user sees an error message such as: "References are more than 13500".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductTitle, JournalIssueTemplateCreation, MessageStatus, OtherProductCollectionType, CollectionCategory.

### Errors

- **Configured error**: References are more than 13500

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Integrations/Feed_Trigger_Action.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: Approve_And_Send_Object (myFunc), GenericFunctions (genericlib)
- **Key functions**: updateIssueTempCreation, approveAndTriggerObj, republish, partialApproveProductLinkReference, getReferences, queryReferencedBy

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 140
