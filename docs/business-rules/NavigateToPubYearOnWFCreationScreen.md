## NavigateToPubYearOnWFCreationScreen

- **Rule type**: Business Action
- **Business area**: PubYearWorkFlowGroup
- **Data model object valid to**: All
- **Source file(s)**: `PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js`

### Functional description

This business action is used in the Publication Year workflow setup to take the user directly into the Publication Year creation experience from the Web UI. When executed, it confirms that the creation process has started and then opens the Publication Year creation screen for the currently selected object.

### Functional logic

This section summarizes the implemented logic in `PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js`.

- Runs as a Web UI business action with `NODE` (current object) and `UI` context binds.
- Displays an informational alert to the user: **"Publication Year Creation Process initiated."**
- Retrieves the first object from the current UI selection (`UI.getSelection().get(0)`).
- Navigates to **`PublicationYearCreationScreen`**, passing that selected object as the screen context.
- The script contains no conditional branching or explicit validation/error handling in this rule body.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 381
