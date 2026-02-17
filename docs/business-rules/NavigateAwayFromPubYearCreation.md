## NavigateAwayFromPubYearCreation

- **Rule type**: Business Action
- **Setup group**: PubYearNavegationGroup
- **Business area**: PubYearNavegationGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `PubYearGroup/PubYearNavegationGroup/NavigateAwayFromPubYearCreation.js`

### Functional description

Cancels the Publication Year creation flow and returns the user to the appropriate Journal details screen.  
When triggered, the rule informs the user that creation was cancelled by showing the message: **"Publication Year Creation Process cancelled."**

### Functional logic

1. Show an informational alert in the UI: **"Publication Year Creation Process cancelled."**
2. Evaluate the current node object type.
3. If the object type is `JournalPrintMedia`, navigate to `PrintJournalNodeDetails`.
4. If the object type is `JournalDigitalMedia`, navigate to `DigitalJournalNodeDetails`.
5. For any other object type, no additional navigation is performed by this rule.

### Errors

- **Configured error**: Publication Year Creation Process cancelled.

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearNavegationGroup/NavigateAwayFromPubYearCreation.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: showAlert(), navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 180
