## BA_AuthorServicesJournalDataExtract

- **Rule type**: Business Action
- **Business area**: Integrations
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalAuthorServicesEndDate, JournalAuthorServicesNeedsOAPayment, JournalAuthorServicesParticipation, JournalAuthorServicesStartDate
- **Source file(s)**: `Integrations/BA_AuthorServicesJournalDataExtract.js`

### Functional description

Author Services Journal Data Extract. It primarily works with attribute(s): JournalAuthorServicesEndDate, JournalAuthorServicesNeedsOAPayment, JournalAuthorServicesParticipation, JournalAuthorServicesStartDate. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalAuthorServicesParticipation, JournalAuthorServicesStartDate, JournalAuthorServicesNeedsOAPayment, JournalAuthorServicesEndDate.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: Error encountered while processing the Journal Object for Author Service ID:
- **In-script message**: Error: masterID is not included in the transmitted message.
- **In-script message**: Error encountered while processing Journal Object associated with masterId:
- **In-script message**: Error processing Journal Object with masterId:

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 286
