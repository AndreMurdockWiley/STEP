## Check_Mandatory_Handover_Attr

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalGroupCode, ProductMediaType, IDLPrintJournalCode, IDLPrintJournalISSN, IDLDigitalJournalCode, IDLDigitalJournalISSN
- **Source file(s)**: `Conditions/Check_Mandatory_Handover_Attr.js`

### Functional description

Check Mandatory Handover Attr

### Functional logic

- If "ProductMediaType" == "Print", continue; otherwise error.
- If "ProductMediaType" == "Print", continue; otherwise error.
- If "ProductMediaType" == "Print", continue; otherwise error.
- If "ProductMediaType" == "Online", continue; otherwise error.
- If "ProductMediaType" == "Online", continue; otherwise error.
- Reads/writes attributes including: JournalGroupCode, ProductMediaType, IDLPrintJournalCode, IDLPrintJournalISSN, IDLDigitalJournalCode, IDLDigitalJournalISSN.

### Errors

—

### Usage / trigger

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 238
