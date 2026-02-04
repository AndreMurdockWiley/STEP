## ValidForCopyToOnline

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalMediaCode, ProductMediaType
- **Source file(s)**: `Conditions/ValidForCopyToOnline.js`

### Functional description

Determines whether the current object is **eligible for “Copy To Online”** based on the journal’s media configuration.

This condition is intended to be used as a gate/validation in STEP so that “Copy To Online” is only available when:

- The **owning Journal** is configured for **both** media types (`ProductMediaType = "Both"`), and
- The current node represents the **print** side (`JournalMediaCode = "Print"`).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Resolves the owning **Journal** for the current node by walking up the hierarchy based on object type:
  - `JournalDigitalMedia` / `JournalPrintMedia` → parent is Journal
  - `JournalDigitalPublicationYear` / `JournalPrintPublicationYear` → grandparent is Journal
  - `JournalDigitalVolumes` / `JournalPrintVolumes` → great-grandparent is Journal
- Reads `ProductMediaType` from the Journal and `JournalMediaCode` from the current node.
- Returns **true** only when `ProductMediaType == "Both"` **and** `JournalMediaCode == "Print"`; otherwise returns **false**.
- Does not write/update any attributes.

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
