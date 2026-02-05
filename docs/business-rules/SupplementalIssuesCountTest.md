## SupplementalIssuesCountTest

- **Rule type**: Function
- **Business area**: Functions
- **Data model object valid to**: All
- **Source file(s)**: `Functions/SupplementalIssuesCountTest.js`

### Functional description

Determines whether the current issue should be counted as a supplemental issue by checking its Issue Type. The function returns an integer flag that can be summed or otherwise used downstream to calculate supplemental-issue counts.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads the IssueType attribute from the current node.
- Compares IssueType to the "SU" (Supplement) value using an exact match.
- Returns an integer indicator for counting (1 when IssueType is SU, otherwise 0).
- Plugin: JavaScriptBusinessFunctionWithBinds.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): Functions/SupplementalIssuesCountTest.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 284
