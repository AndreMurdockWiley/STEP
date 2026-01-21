## bcFilterOnSociety

- **Rule type**: Business Condition
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: OrganizationType, Organizations
- **Attribute ID(s)**: OrganizationName, OrganizationUrl, SocietyAcronym
- **Source file(s)**: `Integrations/OutboundIntegrationRules/bcFilterOnSociety.js`, `OutboundIntegrationRules/bcFilterOnSociety.js`

### Functional description

bcFilterOnSociety. It primarily works with attribute(s): OrganizationName, OrganizationUrl, SocietyAcronym. It is triggered from: Integration rule (configured in STEP Integration Endpoints). If validation fails, the user sees an error message such as: "help me please".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: SocietyAcronym, OrganizationName, OrganizationUrl.

### Errors

- **Configured error**: help me please

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 308, 371
