## NavigateAwayFromVolumeCreationScreen

- **Rule type**: Business Action
- **Business area**: VolumesNavegationGroup
- **Data model object valid to**: All
- **Source file(s)**: `VolumesGroup/VolumesNavegationGroup/NavigateAwayFromVolumeCreationScreen.js`

### Functional description

Cancels the Volume Creation flow and returns the user to the appropriate Publication Year screen based on the current object type.  
When triggered, the rule informs the user that volume creation was cancelled, then routes back to either the Print or Digital publication-year screen.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred from the script).

- Displays an informational alert in the UI: **"Volume Creation Process cancelled."**
- Reads the current node object type (`NODE.getObjectType().getID()`).
- If object type is `JournalPrintPublicationYear`, navigates to `PrintPublicationYearScreen` with the current node.
- Else, if object type is `JournalDigitalPublicationYear`, navigates to `DigitalPublicationYearScreen` with the current node.
- For other object types, no additional navigation is performed by this rule.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): VolumesGroup/VolumesNavegationGroup/NavigateAwayFromVolumeCreationScreen.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 388
