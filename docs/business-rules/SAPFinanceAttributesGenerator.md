## SAPFinanceAttributesGenerator

- **Rule type**: Business Action
- **Setup group**: JournalUpsertGroup
- **Business area**: JournalUpsertGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: All (JournalPrintMedia, JournalDigitalMedia)
- **Attribute ID(s)**: IssueTemplateMaterialNumber, IssueTemplateTitle, JournalFinanceHigherLevelMediaProduct, JournalFinanceJournalIdCodeProductlevel, JournalGroupCode, JournalIssueTemplateCreation, JournalMediaCode, ProductOneSourceTaxCode, ProductSAPMaterialNumber, ProductTitle, SAPExternalMaterialGroup
- **Attribute name(s)**: Journal Group Code, SAP Material Number, Journal Media Code, Journal Finance Journal ID Code
- **Status**: Active
- **Source file(s)**: `JournalUpsertGroup/SAPFinanceAttributesGenerator.js`

### Functional description

SAP Finance Attributes Generator

### Functional logic

- Reads/writes attributes including: JournalGroupCode, JournalMediaCode, ProductSAPMaterialNumber, JournalFinanceJournalIdCodeProductlevel, JournalIssueTemplateCreation, JournalFinanceHigherLevelMediaProduct, SAPExternalMaterialGroup, IssueTemplateMaterialNumber, IssueTemplateTitle, ProductTitle.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

- **Dependencies**: GenericFunctions (genericFunctions)
- **Key functions**: pad(), mediaCodeTransformation(), getChildren()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 59
