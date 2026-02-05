## ReannounceFullPubYear

- **Rule type**: Business Action
- **Setup group**: ReannouncementGroup
- **Business area**: ReannouncementGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: JournalPrintPublicationYear, JournalDigitalPublicationYear
- **Attribute ID(s)**: IssueReportingYear, PHPublicationYear
- **Attribute name(s)**: PH Publication Year, Issue Reporting Year
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `ReannouncementGroup/ReannounceFullPubYear.js`

### Functional description

Reannounce a full publication year by moving all volumes (and their issues) to a target year on the parent journal media. The target year is taken from **PH Publication Year** on the current year node. During the move, each issue is updated to the new **Issue Reporting Year**. After the move, the original year is deleted if empty, and the user is shown an acknowledgement and returned to the parent journal details screen.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Read **PH Publication Year** from the current year node and create (or retrieve) the target year under the parent journal media.
- For each volume under the current year:
  - Update all child issues to the new **Issue Reporting Year**.
  - Move the volume to the target year.
  - Approve the current year node (ensures the move is committed).
- If the current year has no remaining volumes after the move, delete and approve the deletion.
- Show a success alert and navigate back to the parent journal media details page (print or digital).

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ReannouncementGroup/ReannounceFullPubYear.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: PublicationYearUtilityLibrary (pubLibrary)
- **Key functions**: Year reannouncement with volume/issue migration

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 30
