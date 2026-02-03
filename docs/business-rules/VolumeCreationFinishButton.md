## VolumeCreationFinishButton

- **Rule type**: Business Action
- **Business area**: VolumesNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CopyToOnline, JournalMediaNumberOfVolumes, JournalNumberOfVolumes, JournalStartingVolume
- **Source file(s)**: `VolumesGroup/VolumesNavegationGroup/VolumeCreationFinishButton.js`

### Functional description

Creates volumes and completes the Volume Creation Process for a Publication Year. When the user clicks **Create Volumes and Finish Process** on the **VolumesCreationScreen**, the rule saves the current Publication Year, creates the requested number of Volume objects under it (based on the starting volume number and volume count entered on the screen), optionally creates corresponding “online” (electronic) volumes when **CopyToOnline** is set to **Yes**, then clears the temporary “volume creation” input fields on the parent Journal Media and returns the user to the appropriate Publication Year screen with a success message.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- **Inputs (read)**:
  - From the current Publication Year (`NODE`): `CopyToOnline`, `JournalNumberOfVolumes` (how many volumes to create), `JournalMediaNumberOfVolumes` (starting volume number as entered on the screen).
  - From the parent Journal Media (`NODE.getParent()`): `JournalStartingVolume` (refreshed during the loop to determine the next volume number; typically maintained by surrounding workflow/rules).
- **Volume creation loop**:
  - Repeat `JournalNumberOfVolumes` times:
    - Create (or reuse if it already exists) a Volume under the current Publication Year by calling `volumeLibrary.createVolume(NODE, startingVolumeNo)`.
    - Refresh `startingVolumeNo` from the parent Journal Media’s `JournalStartingVolume` for the next iteration.
    - If `CopyToOnline == "Yes"`, call `volumeLibrary.volumeCopyToOnline(volume)` to create (or reuse) the matching electronic volume for the same publication year and volume number.
- **Cleanup (write)**:
  - Clear placeholder fields on the parent Journal Media by calling `genericFunctions.wipePublishingAttributes(journalMedia)` (wipes `JournalNumberOfVolumes`, `JournalPublicationYear`, `JournalMediaNumberOfVolumes`).
- **User feedback + navigation**:
  - Show an acknowledgement alert: “Volumes succesfully created!” and “Created X volumes.”
  - Navigate back to `PrintPublicationYearScreen` or `DigitalPublicationYearScreen` based on the current node’s object type (`JournalPrintPublicationYear` vs `JournalDigitalPublicationYear`).

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This business action is executed from the Web UI on the **VolumesCreationScreen** via the button **Create Volumes and Finish Process** (configured with `SaveBeforeExecuting=true`) and is shown/hidden based on the business condition `JournalOnWorkflowCheck`.

### Dependencies / key functions

- **Dependencies**: `GenericFunctions` (genericFunctions), `VolumeFunctions` (volumeLibrary)
- **Key functions**: `createVolume()`, `volumeCopyToOnline()`, `wipePublishingAttributes()`

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 389
