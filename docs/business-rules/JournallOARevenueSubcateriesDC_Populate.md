## JournallOARevenueSubcateriesDC_Populate

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalOASubcategories, JournalOASubcategoriesEndDate, JournalOASubcategoriesStartDate
- **Source file(s)**: `JournalWorkflowGroup/JournallOARevenueSubcateriesDC_Populate.js`

### Functional description

Populate OA Revenue Subcategories DC

### Functional logic

- Reads/writes attributes including: JournalOASubcategoriesStartDate, JournalOASubcategoriesEndDate, JournalOASubcategories.

### Errors

- **In-script message**: OA Revenue Subcategories Start Date must be populated on OASubcategory. Add the date to proceed.
- **In-script message**: OA Revenue Subcategories End Date must be populated on previous OASubcategory. Add the date to proceed.

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 345
