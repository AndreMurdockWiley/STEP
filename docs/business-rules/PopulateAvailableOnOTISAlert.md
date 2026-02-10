## PopulateAvailableOnOTISAlert

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalAvailableOnOtis
- **Attribute name(s)**: Journal Available On OTIS
- **Status**: Deprecated
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateAvailableOnOTISAlert.js`

### Functional description

This business action validates and standardizes the **Journal Available On OTIS** value (`JournalAvailableOnOtis`) during UI save processing for journal media records. It accepts **Y**, **N**, or blank. Lowercase user input (`y`/`n`) is automatically normalized to uppercase (`Y`/`N`) so data is stored consistently. If a non-blank value other than Y/N is entered, the rule shows a warning message to guide the user.

### Functional logic

The rule executes against the current journal media object and applies the following logic:

- Reads `JournalAvailableOnOtis` from the current object.
- If the value is `y` or `Y`, writes back `Y`.
- If the value is `n` or `N`, writes back `N`.
- If the value is blank/null, leaves the attribute unchanged (blank is allowed).
- If the value is non-blank and not one of the accepted Y/N values, flags it as invalid.
- Shows a UI alert:
  - **WARNING**: `Available On OTIS should be either 'Y' or 'N' or 'Blank'` (invalid non-blank value).
  - **ACKNOWLEDGMENT**: `Saved!` (valid value or blank).

### Errors

- **Configured error**: WARNING: Available On OTIS should be either 'Y' or 'N' or 'Blank'

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulateAvailableOnOTISAlert.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getValue, getSimpleValue, setSimpleValue, showAlert

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 190
