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

Processes an inbound WALS journal message received via a STEP Integration Endpoint and synchronizes WALS participation details on the target Journal. The rule identifies the Journal using `data.isPartOf.masterId`, updates the Journal-level WALS participation flag and start date, and then replaces the Journal’s `LicenseTemplate` data container rows with the set of license templates provided in the message.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Parses the inbound JSON payload and reads the target Journal identifier from `data.isPartOf.masterId`.
- Retrieves the Journal product by that ID; if the Journal is not found, no updates are made (the rule only logs processing information).
- Updates **Journal Wals Participation** (`JournalWalsParticipation`):
  - If `data.walsParticipation` is `true`, sets the attribute to `Yes`.
  - If `data.walsParticipation` is `false`, sets the attribute to `No`.
  - If `data.walsParticipation` is missing/null, clears the existing attribute value (if present).
- Updates **Journal Wals Participation Start Date** (`JournalWalsParticipationStartDate`):
  - If `data.walsParticipationStartDate` is provided, normalizes it to `YYYY-MM-DD` and sets the attribute.
  - If the date is missing/null, clears the existing attribute value (if present).
- Rebuilds the **License Template** data container (`LicenseTemplate`) as a full refresh:
  - Deletes all existing `LicenseTemplate` rows on the Journal.
  - For each entry in `data.licenseTemplates`, creates a new `LicenseTemplate` row and maps `template.licenseType`, `template.licenseSubType`, `template.use`, and `template.name` into `template_licenseType`, `template_LicenseSubType`, `template_use`, and `template_name`.

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
