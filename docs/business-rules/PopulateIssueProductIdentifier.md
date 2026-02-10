## PopulateIssueProductIdentifier

- **Rule type**: Business Action
- **Setup group**: IssuesGroup
- **Business area**: IssuesGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: IssueProductIdentifier
- **Attribute name(s)**: Issue Product Identifier
- **Status**: Active
- **Source file(s)**: `IssuesGroup/PopulateIssueProductIdentifier.js`

### Functional description

Ensures each Journal Issue record has an internal issue-level product identifier by copying the current issue object's STEP ID into **Issue Product Identifier**.  
This creates a consistent system-generated identifier for both **JournalDigitalIssues** and **JournalPrintIssues**, supporting downstream integrations and matching processes that rely on a stable issue key.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads the current issue object's ID (`ID` bind).
- Accesses **IssueProductIdentifier** on the current node.
- Writes/overwrites **IssueProductIdentifier** with the current object ID using `setSimpleValue(ID)`.
- Applies the same behavior for both valid object types: **JournalDigitalIssues** and **JournalPrintIssues**.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/PopulateIssueProductIdentifier.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getID, getValue, setSimpleValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 137
