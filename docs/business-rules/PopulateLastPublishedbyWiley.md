## PopulateLastPublishedbyWiley

- **Rule type**: Business Action
- **Setup group**: JournalMediaWorkflowGroup
- **Business area**: JournalMediaWorkflowGroup
- **Data model object valid to**: JournalPrintMedia, JournalDigitalMedia
- **Product type(s) valid to**: JournalPrintMedia, JournalDigitalMedia
- **Attribute ID(s)**: JournalLastPubYear, LastPublishedbyWiley, ProductStatus
- **Attribute name(s)**: Product Status, Journal Last Pub Year, Last Published by Wiley
- **Status**: Active
- **Source file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/PopulateLastPublishedbyWiley.js`

### Functional description

This business action derives and updates the journal-level **Last Published by Wiley** value based on sibling media records under the same parent journal. It evaluates each media record's **Product Status** and **Journal Last Pub Year**, then writes the resulting year (or blank) to **Last Published by Wiley** on the journal.

In business terms, the rule captures the most relevant "last year published by Wiley" from active/eligible media formats so downstream users and processes can reference a single consolidated value at journal level.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Starts from the current media child (print or digital), then reads its parent journal and sibling media records.
- Identifies sibling records of type **JournalDigitalMedia** and **JournalPrintMedia**.
- Reads, for each identified media sibling:
  - **ProductStatus**
  - **JournalLastPubYear**
- Treats a media record as eligible only when **ProductStatus** is one of: `S`, `C`, `M`, or `A`.
- Applies derivation rules:
  - If both digital and print exist **and both are eligible**:
    - Use digital **JournalLastPubYear** when present.
    - Otherwise use print **JournalLastPubYear**.
  - If only digital exists and is eligible, use digital **JournalLastPubYear**.
  - If only print exists and is eligible, use print **JournalLastPubYear**.
  - If both exist but one/both are not eligible, derive no year (`null`).
- Writes the derived result to parent journal attribute **LastPublishedbyWiley**.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): JournalMediaGroup/JournalMediaWorkflowGroup/PopulateLastPublishedbyWiley.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: updateLastPubYearByWileyForChild, getParent, getChildren, getValue, setSimpleValue

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 191
