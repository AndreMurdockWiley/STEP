## Polulate_Journal Maturity

- **Rule type**: Business Action
- **Business area**: JournalWorkflowGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalLaunchYear, JournalMaturity
- **Source file(s)**: `JournalWorkflowGroup/Polulate_Journal Maturity.js`

### Functional description

Automatically classifies a journal's maturity based on how many years have passed since its launch year.  
When `JournalLaunchYear` is available, the rule calculates journal age using the current calendar year and writes the derived category to `JournalMaturity`.  
This is a Business Action (not a validation rule), so no user-facing error message is configured.

### Functional logic

- **Precondition check**: The rule runs only when `JournalLaunchYear` has a value (not null/blank). If no launch year is present, the action is skipped.
- **Age calculation**: `Journal age = current year - JournalLaunchYear`.
- **Maturity mapping**:
  - If journal age is **less than 3 years** → set `JournalMaturity` to **`New`**
  - If journal age is **3 to 8 years (inclusive)** → set `JournalMaturity` to **`Established`**
  - If journal age is **greater than 8 years** → set `JournalMaturity` to **`Mature`**
- **Attribute impact**: Reads `JournalLaunchYear` and updates `JournalMaturity` on the current object.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalWorkflowGroup/Polulate_Journal Maturity.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 347
