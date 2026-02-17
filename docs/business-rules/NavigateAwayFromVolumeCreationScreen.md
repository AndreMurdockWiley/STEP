## NavigateAwayFromVolumeCreationScreen

- **Rule type**: Business Action
- **Business area**: VolumesNavegationGroup
- **Data model object valid to**: All
- **Source file(s)**: `VolumesGroup/VolumesNavegationGroup/NavigateAwayFromVolumeCreationScreen.js`

### Functional description

This rule handles the user action to leave the Volume Creation screen. It confirms that the process was cancelled and returns the user to the appropriate Publication Year screen so they can continue working in the correct context.

### Functional logic

When executed, the rule performs the following steps:

1. Shows an informational alert: **"Volume Creation Process cancelled."**
2. Checks the current node object type (`NODE.getObjectType().getID()`).
3. If the object type is `JournalPrintPublicationYear`, navigates to `PrintPublicationYearScreen` using the current node context.
4. If the object type is `JournalDigitalPublicationYear`, navigates to `DigitalPublicationYearScreen` using the current node context.
5. For other object types, no additional navigation is explicitly defined in this rule.

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
