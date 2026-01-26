## Check_Mandatory_Handover_Attr

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalGroupCode, ProductMediaType, IDLPrintJournalCode, IDLPrintJournalISSN, IDLDigitalJournalCode, IDLDigitalJournalISSN
- **Source file(s)**: `Conditions/Check_Mandatory_Handover_Attr.js`

### Functional description

Check Mandatory Handover Attr. It primarily works with attribute(s): JournalGroupCode, ProductMediaType, IDLPrintJournalCode, IDLPrintJournalISSN, IDLDigitalJournalCode, IDLDigitalJournalISSN. It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "ProductMediaType" == "Print", continue; otherwise error.
- If "ProductMediaType" == "Print", continue; otherwise error.
- If "ProductMediaType" == "Print", continue; otherwise error.
- If "ProductMediaType" == "Online", continue; otherwise error.
- If "ProductMediaType" == "Online", continue; otherwise error.
- Reads/writes attributes including: JournalGroupCode, ProductMediaType, IDLPrintJournalCode, IDLPrintJournalISSN, IDLDigitalJournalCode, IDLDigitalJournalISSN.

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
- **Row(s) (0-based in data block)**: 238
