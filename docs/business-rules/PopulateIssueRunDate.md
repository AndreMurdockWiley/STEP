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

`PopulateIssueRunDate` standardizes issue records by deriving operational issue values from the publication date. When the action runs, it copies **Product Original Publication Date** to **Issue Run Date**, sets **Issue Status** to LOV value **`P`**, and then approves the issue record.

From a business perspective, this rule keeps issue scheduling/status data synchronized with the original publication milestone so downstream issue handling starts from a consistent state. This is a data-population action (not a validation rule) and does not define user-facing error messaging.

### Functional logic

The rule executes a direct, unconditional update sequence on the current Issue node:

1. Read **`ProductOriginalPublicationDate`** from the current issue.
2. Write that same value into **`IssueRunDate`**.
3. Set **`IssueStatus`** to LOV ID **`P`**.
4. Approve the issue (`node.approve()`), persisting the updates.

There are no conditional branches, validations, or explicit exception messages in this script; values are applied as-is.

### Errors

- **Configured error**: N/A (Business Action).

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
