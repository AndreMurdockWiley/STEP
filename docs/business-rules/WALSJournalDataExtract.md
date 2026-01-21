## WALSJournalDataExtract

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal (AllObjectTypesValid="true")
- **Attribute ID(s)**: JournalWalsParticipation, JournalWalsParticipationStartDate, LicenseTemplate, template_LicenseSubType, template_licenseType, template_name, template_use
- **Attribute name(s)**: Journal Wals Participation, Journal Wals Participation Start Date, License Type, License Sub Type, Use, Name
- **Status**: Active
- **Source file(s)**: `Integrations/WALSJournalDataExtract.js`

### Functional description

WALS Journal Data Extract. It primarily works with attribute(s): JournalWalsParticipation, JournalWalsParticipationStartDate, LicenseTemplate, template_LicenseSubType, template_licenseType, template_name, template_use. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalWalsParticipation, JournalWalsParticipationStartDate, template_licenseType, template_LicenseSubType, template_use, template_name.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: JSON.parse, getValue, setValue, getProductByID, getDataContainerByTypeID, forEach, addDataContainer, createDataContainerObject

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 136
