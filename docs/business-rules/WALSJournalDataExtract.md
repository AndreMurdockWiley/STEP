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

WALS Journal Data Extract

### Functional logic

- Reads/writes attributes including: JournalWalsParticipation, JournalWalsParticipationStartDate, template_licenseType, template_LicenseSubType, template_use, template_name.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: JSON.parse, getValue, setValue, getProductByID, getDataContainerByTypeID, forEach, addDataContainer, createDataContainerObject

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 136
