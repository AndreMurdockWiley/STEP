## SetDefaultPublishingInitiatives

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Product type(s) valid to**: Journal
- **Attribute ID(s)**: JournalEditorialDataPolicy, JournalEditorialORCIdRequirement, JournalWileyEditingServices
- **Attribute name(s)**: Journal Open Science Badges, Journal Registered Reports, Journal Accepts Preprints, Journal Is On Authorea, Journal Is On Publons, Journal CRediT, Journal Embedded Rich Media, Journal Free Format, Journal CME For Reviewers, Journal Transparent Peer Review, Journal Accepted Articles, Journal Image Screening, Journal Wiley Editing Services, Journal Editorial Data Policy, Journal Editorial ORCId Requirement
- **Status**: Active
- **Source file(s)**: `JournalWorkflowGroup/SetDefaultPublishingInitiatives.js`

### Functional description

Sets the Publishing Initiatives attributes values to default No in Journal creation workflow. It primarily works with attribute(s): JournalEditorialDataPolicy, JournalEditorialORCIdRequirement, JournalWileyEditingServices. It is triggered from: Journal Creation Workflow. If validation fails, the user sees an error message such as: "N/A (Business Action).".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalWileyEditingServices, JournalEditorialDataPolicy, JournalEditorialORCIdRequirement.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Journal Creation Workflow
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: setLOVValueByID()
- **Key functions**: JournalWorkflowGroup

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 175
