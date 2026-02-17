## NavigateToReannouncementByVolumeScreen

- **Rule type**: Business Action
- **Business area**: ReannouncementGroup
- **Data model object valid to**: All
- **Source file(s)**: `ReannouncementGroup/NavigateToReannouncementByVolumeScreen.js`

### Functional description

This business action starts the volume reannouncement workflow in the STEP Web UI. When triggered, it informs the user that the process has started and opens the **Reannouncement by Volumes** sub-screen for the selected object.

### Functional logic

1. Display an informational alert to the user: **"Volumes Reannouncement Process initiated."**
2. Read the current UI selection and take the first selected node (`UI.getSelection().get(0)`).
3. Navigate to the target screen: `ReannouncementPubYearByVolumesSubScreen`, passing that selected node as the context parameter.

The rule contains no additional branching, validation checks, or error-handling logic in the source implementation.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): ReannouncementGroup/NavigateToReannouncementByVolumeScreen.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 384
