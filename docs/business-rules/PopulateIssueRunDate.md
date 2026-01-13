## PopulateIssueRunDate

- **Rule type**: Business Action
- **Setup group**: IssuesGroup
- **Business area**: IssuesGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: IssueRunDate, IssueStatus, ProductOriginalPublicationDate
- **Attribute name(s)**: Product Original Publication Date, Issue Run Date, Issue Status
- **Status**: Active
- **Source file(s)**: `IssuesGroup/PopulateIssueRunDate.js`

### Functional description

PopulateIssueRunDate. It primarily works with attribute(s): IssueRunDate, IssueStatus, ProductOriginalPublicationDate.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: ProductOriginalPublicationDate, IssueRunDate, IssueStatus.

### Errors

—

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/PopulateIssueRunDate.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: Group Issue Functions (link)
- **Key functions**: getValue, setSimpleValue, setLOVValueByID, approve

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 186
