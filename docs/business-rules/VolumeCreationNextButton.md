## VolumeCreationNextButton

- **Rule type**: Business Action
- **Business area**: VolumesNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CopyToOnline, CreateIssueTypeIDL, JournalMediaNumberOfVolumes, JournalNumberOfVolumes, JournalStartingVolume
- **Source file(s)**: `VolumesGroup/VolumesNavegationGroup/VolumeCreationNextButton.js`

### Functional description

When a user clicks **Next** on the Volume Creation screen, this action creates the requested number of Volume records for the current Journal/Media node, prepares each created Volume for downstream **Issue Creation**, and then advances the user into the Issue Creation flow. It uses the starting volume number and volume count entered on the screen, optionally performs “Copy to Online” on each created Volume, clears the temporary volume-creation publishing attributes on the parent, and navigates to the Issue Creation main screen with a confirmation message.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads `CopyToOnline` (from the current node) to decide whether to copy each created Volume to Online.
- Reads `JournalNumberOfVolumes` to determine how many Volume objects to create.
- Reads `JournalMediaNumberOfVolumes` as the initial starting volume number for the first Volume to create.
- For each Volume to be created:
  - Calls `volumeLibrary.createVolume(NODE, startingVol)` to create the Volume.
  - Reads `JournalStartingVolume` from the parent (Journal/Media) and uses it as the next `startingVol` for the next iteration (i.e., the “next” volume number is maintained on the parent during creation).
  - Sets `CreateIssueTypeIDL` on the created Volume to `"Standard Issue"` (placeholder value used by the Issue Creation step).
  - If `CopyToOnline` is `"Yes"`, calls `volumeLibrary.volumeCopyToOnline(volume)` for the created Volume.
- Calls `genericFunctions.wipePublishingAttributes(journalMedia)` to clear the placeholder publishing attributes on the parent so the next volume-creation run starts clean.
- Shows an acknowledgement alert ("Created X volumes. Continuing Process with Issue Creation.") and navigates to `IssuesCreationMainScreen`.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): VolumesGroup/VolumesNavegationGroup/VolumeCreationNextButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 390
