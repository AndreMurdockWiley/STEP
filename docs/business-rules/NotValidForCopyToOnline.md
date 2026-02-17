## NotValidForCopyToOnline

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalMediaCode, ProductMediaType
- **Source file(s)**: `Conditions/NotValidForCopyToOnline.js`

### Functional description

This business condition prevents records from being treated as valid for **Copy To Online** when they represent the **print** variant of a journal that is configured for **both** print and digital media. In practice, it checks `JournalMediaCode` against the journal-level `ProductMediaType` so that print entries are blocked from online copy scenarios when `ProductMediaType` is `Both`.

### Functional logic

The condition resolves the relevant journal context, compares media flags, and returns a pass/fail result used by STEP validation.

- Determines the journal node from the current object type:
  - `JournalDigitalMedia` / `JournalPrintMedia` -> parent
  - `JournalDigitalPublicationYear` / `JournalPrintPublicationYear` -> grandparent
  - `JournalDigitalVolumes` / `JournalPrintVolumes` -> great-grandparent
- Reads `ProductMediaType` from the resolved journal node.
- Reads `JournalMediaCode` from the current node.
- Returns `false` (condition fails) only when:
  - `ProductMediaType = "Both"` and
  - `JournalMediaCode = "Print"`
- Returns `true` for all other combinations.
- This rule reads attributes only; it does not write any values.

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
- **Row(s) (0-based in data block)**: 245
