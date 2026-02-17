## NavigateToPubYearReannouncementScreen

- **Rule type**: Business Action
- **Business area**: ReannouncementGroup
- **Data model object valid to**: All
- **Source file(s)**: `ReannouncementGroup/NavigateToPubYearReannouncementScreen.js`

### Functional description

Launches the Publication Year Reannouncement workflow from the current selection in STEP.  
When a user runs this action, STEP confirms the process start and opens the Publication Year Reannouncement screen for the selected record so the user can continue reannouncement activities in the correct business context.

### Functional logic

1. The action displays an informational message to the user: **"Publication Year Reannouncement Process initiated."**
2. The action reads the first object in the current UI selection.
3. STEP navigates the user to **`ReannouncementPubYearScreen`** and passes the selected object as the screen context.
4. The rule contains no additional branching or validation logic; it acts as a navigation handoff into the Publication Year Reannouncement experience.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ReannouncementGroup/NavigateToPubYearReannouncementScreen.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 383
