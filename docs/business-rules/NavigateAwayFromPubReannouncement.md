## NavigateAwayFromPubReannouncement

- **Rule type**: Business Action
- **Business area**: ReannouncementGroup
- **Data model object valid to**: All
- **Source file(s)**: `ReannouncementGroup/NavigateAwayFromPubReannouncement.js`

### Functional description

Cancels the Publication Year Reannouncement flow and returns the user to the parent journal details page. The rule provides immediate user feedback by showing an informational message that the reannouncement process was cancelled.

### Functional logic

This rule executes as a UI navigation action and applies parent-type-based branching:

1. Show an informational alert to the user: **"Publication Year Reannouncement Process cancelled."**
2. Read the current object's parent and evaluate the parent object type ID.
3. If the parent type is `JournalPrintMedia`, navigate to `PrintJournalNodeDetails` for that parent.
4. Else, if the parent type is `JournalDigitalMedia`, navigate to `DigitalJournalNodeDetails` for that parent.
5. If the parent is any other type, no additional navigation is triggered by this rule.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ReannouncementGroup/NavigateAwayFromPubReannouncement.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 382
