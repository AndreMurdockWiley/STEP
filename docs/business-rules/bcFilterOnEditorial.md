## bcFilterOnEditorial

- **Rule type**: Business Condition
- **Business area**: Outbound_Integration_Rules
- **Data model object valid to**: EditorialContact
- **Attribute ID(s)**: EditorialContactEmail, EditorialContactFirstName, EditorialContactLastName
- **Source file(s)**: `Integrations/OutboundIntegrationRules/bcFilterOnEditorial.js`, `OutboundIntegrationRules/bcFilterOnEditorial.js`

### Functional description

Determines whether an `EditorialContact` record is eligible to be included in outbound integrations. The condition returns **true** only for editorial contacts that have the minimum required contact details populated (email, first name, last name) and that are **not** associated to certain excluded parent editorial role nodes (e.g., managing/editorial leadership and other internal roles).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- **Reads** `EditorialContactEmail`, `EditorialContactFirstName`, `EditorialContactLastName` from the current `EditorialContact`.
- **Reads** the parent node ID (`node.getParent().getID()`) to identify the editorial role/category the contact is under.
- **Returns false** when any of the three required attributes is `null`.
- **Returns false** when the parent node ID is one of the explicitly excluded IDs:
  - `JournalAssociateManagingEditor`
  - `JournalOperationsAssistant`
  - `JournalManagingEditor`
  - `JournalCATContact`
  - `JournalMarketingPortfolioLead`
  - `JournalEditorialSeniorEditorialDirector`
  - `JournalEditorInChief`
  - `JournalInternalAdvertisingContact`
  - `JournalEditorialPublisher`
  - `JournalEditorialPublishingDirector`
  - `JournalCompEditorialEvaluationTeamLead`
  - `JournalPartnerPublishingDirector`
  - `JournalPartnerPublishingManager`
  - `JournalPartnerSolutionsDirector`
  - `JournalPeerReviewPerformanceDirector`
  - `JournalPeerReviewPerformanceLead`
  - `JournalPeerReviewPerformanceManager`
  - `JournalPublishingDevelopmentDirector`
  - `JournalPublishingDevelopmentManager`
  - `JournalPublishingVP`
  - `JournalStrategicContentAcquisitionLead`
  - `JournalStratContentAcquisitionManager`
- **Returns true** otherwise.
- **Notes/limitations**:
  - The rule checks only for `null` values; empty strings (e.g., `""`) are treated as populated and will pass the condition.
  - The rule does not validate email format.
  - The rule does not write any attributes; it only logs values for troubleshooting.

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
- **Row(s) (0-based in data block)**: 306, 369
