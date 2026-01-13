## JournalIssnAuthentication

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalMediaCode, JournalTrueStatus, ProductMediaType
- **Source file(s)**: `Conditions/JournalIssnAuthentication.js`

### Functional description

Journal ISSN Authentication. It primarily works with attribute(s): JournalMediaCode, JournalTrueStatus, ProductMediaType. It is triggered from: Business condition (validation configured in STEP). If validation fails, the user sees an error message such as: "Invalid ISSN - Expecting".

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalMediaCode" == "Print", continue; otherwise error.
- If "JournalTrueStatus" == "No", apply the corresponding branch logic.
- If "ProductMediaType" == "Print", apply the corresponding branch logic.
- If "ProductMediaType" == "Both", apply the corresponding branch logic.
- Reads/writes attributes including: JournalTrueStatus, ProductMediaType, JournalMediaCode.

### Errors

- **In-script message**: Invalid ISSN - Expecting

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 242
