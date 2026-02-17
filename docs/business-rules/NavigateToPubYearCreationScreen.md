## NavigateToPubYearCreationScreen

- **Rule type**: Business Action
- **Business area**: PubYearNavegationGroup
- **Data model object valid to**: All
- **Source file(s)**: `PubYearGroup/PubYearNavegationGroup/NavigateToPubYearCreationScreen.js`

### Functional description

Starts the Publication Year creation flow from the current object in STEP.  
When executed, the action informs the user that the creation process has started and then opens the Publication Year Creation screen in the same UI session.

### Functional logic

The business action executes a direct UI navigation sequence:

1. Display an informational alert to the user: **"Publication Year Creation Process initiated."**
2. Navigate to **`PublicationYearCreationScreen`**, passing the current node (`NODE`) as the navigation context.

There is no conditional branching or validation logic in this rule implementation; the action always performs the same two steps when triggered.

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
