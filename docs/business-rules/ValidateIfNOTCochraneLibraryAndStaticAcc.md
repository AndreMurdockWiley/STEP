## ValidateIfNOTCochraneLibraryAndStaticAcc

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: CollectionCategory, OtherProductCollectionSubType, OtherProductCollectionType
- **Source file(s)**: `Conditions/ValidateIfNOTCochraneLibraryAndStaticAcc.js`

### Functional description

Validate If NOT Cochrane Library And Static Access Collection. It primarily works with attribute(s): CollectionCategory, OtherProductCollectionSubType, OtherProductCollectionType. It is triggered from: Business condition (validation configured in STEP).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- If "OtherProductCollectionSubType" == "Evidence Medicine", continue; otherwise error.
- If "OtherProductCollectionType" == "Dynamic", continue; otherwise error.
- If "OtherProductCollectionType" == "Static", continue; otherwise error.
- If "CollectionCategory" == "Access", continue; otherwise error.
- Reads/writes attributes including: OtherProductCollectionSubType, OtherProductCollectionType, CollectionCategory.

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
- **Row(s) (0-based in data block)**: 262
