## JournallOARevenueSubcateriesDC_Populate

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: Journal
- **Attribute ID(s)**: JournalOASubcategories, JournalOASubcategoriesEndDate, JournalOASubcategoriesStartDate
- **Source file(s)**: `JournalWorkflowGroup/JournallOARevenueSubcateriesDC_Populate.js`

### Functional description

Populate OA Revenue Subcategories DC. It primarily works with attribute(s): JournalOASubcategories, JournalOASubcategoriesEndDate, JournalOASubcategoriesStartDate. If validation fails, the user sees an error message such as: "OA Revenue Subcategories Start Date must be populated on OASubcategory. Add the date to proceed.".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads/writes attributes including: JournalOASubcategoriesStartDate, JournalOASubcategoriesEndDate, JournalOASubcategories.

### Errors

- **In-script message**: OA Revenue Subcategories Start Date must be populated on OASubcategory. Add the date to proceed.
- **In-script message**: OA Revenue Subcategories End Date must be populated on previous OASubcategory. Add the date to proceed.

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/JournallOARevenueSubcateriesDC_Populate.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 345
