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

Sets the Publishing Initiatives attributes values to default No in Journal creation workflow

### Functional logic

- Reads/writes attributes including: JournalWileyEditingServices, JournalEditorialDataPolicy, JournalEditorialORCIdRequirement.

### Errors

—

### Usage / trigger

- **Configuration**: Journal Creation Workflow
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: setLOVValueByID()
- **Key functions**: JournalWorkflowGroup

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 175
