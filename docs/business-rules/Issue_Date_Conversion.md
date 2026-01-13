## Issue_Date_Conversion

- **Rule type**: Business Action
- **Business area**: ConversionGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IssueRunDate, JANISIssueRunDate, JANISProductOriginalPublicationDate, JANISProductRevisedPublicationDate, ProductOriginalPublicationDate, ProductRevisedPublicationDate
- **Source file(s)**: `Actions/Issue_Date_Conversion.js`

### Functional description

Issue Date Conversion

### Functional logic

- Reads/writes attributes including: JANISProductOriginalPublicationDate, ProductOriginalPublicationDate, JANISProductRevisedPublicationDate, ProductRevisedPublicationDate, JANISIssueRunDate, IssueRunDate.

### Errors

—

### Usage / trigger

- **Configuration**: Business action (triggered via Web UI button / workflow event / configured action)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 215
