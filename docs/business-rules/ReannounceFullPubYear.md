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

Reannounce Full Pub Year

### Functional logic

- Calls: pubLibrary.createYear.
- Reads/writes attributes including: PHPublicationYear, IssueReportingYear.

### Errors

- **Configured error**: Alert: Year {name} has been deleted since all volumes have been moved

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: PublicationYearUtilityLibrary (pubLibrary)
- **Key functions**: Year reannouncement with volume/issue migration

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 30
