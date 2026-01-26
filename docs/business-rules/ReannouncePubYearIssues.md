## ReannouncePubYearIssues

- **Rule type**: Business Action
- **Setup group**: ReannouncementGroup
- **Business area**: ReannouncementGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Attribute ID(s)**: IssueVolumeNumber
- **Attribute name(s)**: Issue Volume Number
- **Status**: Active
- **Source file(s)**: `ReannouncementGroup/ReannouncePubYearIssues.js`

### Functional description

Reannounce Pub Year Issues. It primarily works with attribute(s): IssueVolumeNumber. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: IssueVolumeNumber.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ReannouncementGroup/ReannouncePubYearIssues.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: PublicationYearFunctions (pubLibrary)
- **Key functions**: getSelection(), getParent(), getChildren(), setParent(), showAlert()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 63
