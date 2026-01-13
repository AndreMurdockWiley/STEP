## Approve_And_Send_Object

- **Rule type**: Library
- **Setup group**: Integrations
- **Business area**: Integrations
- **Product type(s) valid to**: Journal, JournalPrintMedia, JournalDigitalMedia, JournalPrintIssues, JournalDigitalIssues, OtherProducts, PartnerJournal
- **Attribute ID(s)**: DynamicCollectionFlag, Journals_Trigger_Attribute, MessageStatus, OtherProductCollectionType
- **Attribute name(s)**: Message Status, Journals Trigger Attribute
- **Version**: 1.2
- **Status**: Active
- **Source file(s)**: `Integrations/Approve_And_Send_Object.js`

### Functional description

Approve And Send Object. It primarily works with attribute(s): DynamicCollectionFlag, Journals_Trigger_Attribute, MessageStatus, OtherProductCollectionType. If validation fails, the user sees an error message such as: "ERROR DURING APPROVAL".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary.
- If "OtherProductCollectionType" == "Dynamic", continue; otherwise error.
- Reads/writes attributes including: OtherProductCollectionType, DynamicCollectionFlag, MessageStatus, Journals_Trigger_Attribute.

### Errors

- **In-script message**: ERROR DURING APPROVAL
- **In-script message**: ERROR DURING APPROVAL NODE:
- **In-script message**: ERROR DURING APPROVAL TRIGGER:

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Integrations/Approve_And_Send_Object.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: approveAndTriggerObj(), approveObj(), triggerObj(), partialApproveProductLinkReference()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 6
