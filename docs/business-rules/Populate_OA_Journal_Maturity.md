## Populate_OA_Journal_Maturity

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalEEOContentFlipDate, JournalLaunchYear, JournalOAJournalMaturity, ProductRevenueModel
- **Source file(s)**: `JournalWorkflowGroup/Populate_OA_Journal_Maturity.js`

### Functional description

Calculate and maintain the OA Journal Maturity value for journals. When the revenue model is OA, the rule derives the start year for Gold OA (from the EEO Content Flip Date when available, otherwise from the Launch Year) and classifies the journal as New, Established, or Mature based on how many years have elapsed to the current year. If the revenue model is not OA, the maturity value is cleared. The rule only runs when either a Launch Year or an EEO Content Flip Date is present.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Preconditions: only evaluates when at least one of JournalLaunchYear or JournalEEOContentFlipDate is populated.
- Read ProductRevenueModel; if the value is not "OA", clear JournalOAJournalMaturity and stop.
- Determine the Gold OA start year: use the year portion of JournalEEOContentFlipDate when present; otherwise use JournalLaunchYear.
- Compute the number of years between the current year and the Gold OA start year.
- Set JournalOAJournalMaturity based on the age: New (< 3 years), Established (3-8 years), Mature (> 8 years).

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/Populate_OA_Journal_Maturity.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 350
