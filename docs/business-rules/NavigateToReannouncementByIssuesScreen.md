## NavigateToReannouncementByIssuesScreen

- **Rule type**: Business Action
- **Setup group**: ReannouncementGroup
- **Business area**: ReannouncementGroup
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Version**: 1
- **Status**: Active
- **Source file(s)**: `ReannouncementGroup/NavigateToReannouncementByIssuesScreen.js`

### Functional description

Opens the **Reannouncement by Issues** follow-up screen for the record currently selected in the UI.  
This action helps users move directly from an issues-level view to the detailed reannouncement screen (`ReannouncementPubYearByIssuesSubScreen`) for the selected item, without manual searching or re-navigation.

### Functional logic

When the action is triggered:

1. The rule reads the first object from the current UI selection (`UI.getSelection.get(0)`).
2. It calls `UI.navigate("ReannouncementPubYearByIssuesSubScreen", selectedObject)` using that selected object as the navigation context.
3. The target sub-screen opens in the context of that selected object.

No conditional branching, calculations, or data updates are performed in this rule.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ReannouncementGroup/NavigateToReannouncementByIssuesScreen.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: UI.navigate()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 32
