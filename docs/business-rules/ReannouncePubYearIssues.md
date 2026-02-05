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

Reassigns selected issue records to a target volume within the same publication year based on the Issue Volume Number provided by the user. The action validates that the requested volume exists under the publication year; if it does, the issue is reparented to that volume and a success acknowledgement is shown. If the volume does not exist, the action stops and displays an error message indicating the missing volume and publication year.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Captures the Issue Volume Number parameter (IssueVolumeNumber) from the UI context.
- For each selected issue, resolves its publication year by navigating to the issue's parent volume and then to the volume's parent (publication year).
- Scans all volumes under that publication year to find a volume whose IssueVolumeNumber matches the user input.
- When a match is found, reparents the issue to the matching volume and marks the reannouncement as successful.
- If no matching volume is found, shows an error alert with the entered volume number and publication year name, then stops processing.
- After successful processing, shows an acknowledgement alert confirming the reannouncement.

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
