## bcFilterOnSociety

- **Rule type**: Business Condition
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: OrganizationType, Organizations
- **Attribute ID(s)**: OrganizationName, OrganizationUrl, SocietyAcronym
- **Source file(s)**: `Integrations/OutboundIntegrationRules/bcFilterOnSociety.js`, `OutboundIntegrationRules/bcFilterOnSociety.js`

### Functional description

`bcFilterOnSociety` is a lightweight outbound-integration **filter condition** for Organization records. It is used by STEP Integration Endpoints to determine whether an `OrganizationType` / `Organizations` node is eligible to be included in an outbound message. The condition passes only when the Organization has the minimum Society-identifying fields populated (currently `SocietyAcronym` and `OrganizationName`). Records that do not meet this requirement evaluate to **false** and are therefore excluded/filtered out by the integration configuration (no end-user validation message is configured by this rule).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `SocietyAcronym` and `OrganizationName` from the current node.
- If either value is `null`, returns `false` (fails the condition).
- If both values are present, writes informational log entries and returns `true` (passes the condition).
- Does not write any attributes.
- Note: although `OrganizationUrl` and `SocietyCodeRef` appear in the inventory/binds, the current script does not evaluate `OrganizationUrl` and does not use `SocietyCodeRef` (the URL-related logic is commented out).

### Errors

—

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
