## Issue_Date_Conversion

- **Rule type**: Business Action
- **Business area**: ConversionGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: IssueRunDate, JANISIssueRunDate, JANISProductOriginalPublicationDate, JANISProductRevisedPublicationDate, ProductOriginalPublicationDate, ProductRevisedPublicationDate
- **Source file(s)**: `Actions/Issue_Date_Conversion.js`

### Functional description

Issue Date Conversion. It primarily works with attribute(s): IssueRunDate, JANISIssueRunDate, JANISProductOriginalPublicationDate, JANISProductRevisedPublicationDate, ProductOriginalPublicationDate, ProductRevisedPublicationDate. It is triggered from: Business action (triggered via Web UI / workflow event). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JANISProductOriginalPublicationDate, ProductOriginalPublicationDate, JANISProductRevisedPublicationDate, ProductRevisedPublicationDate, JANISIssueRunDate, IssueRunDate.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business action (triggered via Web UI / workflow event)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 215
