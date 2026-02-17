## NavigateToPubYearCreationScreen

- **Rule type**: Business Action
- **Business area**: PubYearNavegationGroup
- **Data model object valid to**: All
- **Source file(s)**: `PubYearGroup/PubYearNavegationGroup/NavigateToPubYearCreationScreen.js`

### Functional description

Starts the Publication Year creation flow for the current object. When the action is executed, the user is informed that the creation process has started and is taken to the Publication Year Creation screen in the same object context.

### Functional logic

The rule executes a direct UI navigation sequence with no validation or branching logic:

1. Uses the bound STEP UI context and current object (`NODE`).
2. Displays an informational alert to the user: **"Publication Year Creation Process initiated."**
3. Navigates to `PublicationYearCreationScreen`, passing the current object so the target screen opens in the same business context.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearNavegationGroup/NavigateToPubYearCreationScreen.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 374
