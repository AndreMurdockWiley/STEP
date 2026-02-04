## ValidForCopyToOnline

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalMediaCode, ProductMediaType
- **Source file(s)**: `Conditions/ValidForCopyToOnline.js`

### Functional description

Determines whether the current journal-related record is **eligible for “Copy to Online” processing**. The condition is intended to be true only when the **journal supports both Print and Online** (i.e., it is a dual-format journal) and the **current object represents the Print side**. This allows workflow/STEP validations to gate “copy-to-online” actions so they only run in scenarios where copying from Print to Online is meaningful and permitted.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Resolves the owning **Journal** node based on the current object type:
  - For `JournalDigitalMedia` / `JournalPrintMedia`: uses the direct parent as the Journal.
  - For `JournalDigitalPublicationYear` / `JournalPrintPublicationYear`: uses the grandparent as the Journal.
  - For `JournalDigitalVolumes` / `JournalPrintVolumes`: uses the great-grandparent as the Journal.
- Reads **`ProductMediaType`** from the resolved Journal and **`JournalMediaCode`** from the current object.
- Returns **true** only when:
  - `ProductMediaType` = `Both` (journal is both print and online), **and**
  - `JournalMediaCode` = `Print` (current node is the print representation).
- Returns **false** for all other combinations.

### Errors

—

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 251
