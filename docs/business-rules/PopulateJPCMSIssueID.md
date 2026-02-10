## PopulateJPCMSIssueID

- **Rule type**: Business Action
- **Setup group**: IssuesGroup
- **Business area**: IssuesGroup
- **Data model object valid to**: JournalDigitalIssues, JournalPrintIssues
- **Product type(s) valid to**: JournalDigitalIssues, JournalPrintIssues
- **Attribute ID(s)**: IDLIssueDOI, IssueDoi, IssueFromIssueNumber, IssueJpcmsId, IssueVolumeNumber, JournalGroupCode, JournalTrueStatus
- **Attribute name(s)**: Journal True Status, Journal Group Code, Issue Volume Number, Issue From Issue Number, Issue JPCMS ID, IDL Issue DOI, Issue DOI
- **Status**: Active
- **Source file(s)**: `IssuesGroup/PopulateJPCMSIssueID.js`

### Functional description

This business action populates issue-level identifiers for non-true journals to support consistent downstream publishing and integration processing. When the issue belongs to a journal with **Journal True Status = "No"**, the rule builds a standardized **Issue JPCMS ID** from Journal Group Code, Volume Number, and Issue Number, and also copies **IDL Issue DOI** into **Issue DOI** so both DOI fields stay aligned.

### Functional logic

- Reads **JournalTrueStatus**.
- If **JournalTrueStatus = "No"**:
  - Reads **JournalGroupCode**, **IssueVolumeNumber**, and **IssueFromIssueNumber**.
  - Sets **IssueJpcmsId** using the format:  
    `JournalGroupCode + "." + IssueVolumeNumber + ":" + IssueFromIssueNumber + ".ISS"`.
  - Reads **IDLIssueDOI** and writes the same value to **IssueDoi**.
- If **JournalTrueStatus** is not `"No"`, no updates are made by this rule.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): IssuesGroup/PopulateJPCMSIssueID.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: Group Issue Functions (link)
- **Key functions**: getValue, setSimpleValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 184
