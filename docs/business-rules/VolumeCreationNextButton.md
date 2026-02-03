## VolumeCreationNextButton

- **Rule type**: Business Action
- **Business area**: VolumesNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CopyToOnline, CreateIssueTypeIDL, JournalMediaNumberOfVolumes, JournalNumberOfVolumes, JournalStartingVolume
- **Source file(s)**: `VolumesGroup/VolumesNavegationGroup/VolumeCreationNextButton.js`

### Functional description

Creates one or more Volume objects for the current Journal **Publication Year** and then moves the user forward to Issue Creation. The action uses the user-entered volume parameters (how many volumes to create and the starting volume number), optionally mirrors newly-created Print volumes to the corresponding Electronic structure when **CopyToOnline** is enabled, and prepares each created Volume for the next step by setting a default Issue type placeholder (**CreateIssueTypeIDL**).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads the following inputs from the current Publication Year (the object the button is executed on):
  - `JournalNumberOfVolumes` (how many Volume records to create)
  - `JournalMediaNumberOfVolumes` (starting volume number for the first created Volume)
  - `CopyToOnline` (whether created Print volumes should also exist Online/Electronic)
- For each volume to be created:
  - Creates (or reuses, if already present) a Volume under the Publication Year using `VolumeFunctions.createVolume(...)`.
    - The created object type depends on the Publication Year media code (Print vs Electronic).
    - The Volume is named `Volume <n>` and the volume number is stored in `IssueVolumeNumber`.
    - The Volume is approved as part of the creation process.
  - Refreshes the next volume number from the parent Journal Media’s `JournalStartingVolume` (used as the subsequent iteration’s input).
  - Sets the newly created Volume’s `CreateIssueTypeIDL` to `Standard Issue` to seed the upcoming Issue Creation step.
  - If `CopyToOnline = Yes`, calls `VolumeFunctions.volumeCopyToOnline(volume)` to ensure an equivalent Volume exists under the Electronic Publication Year for the same publication year.
- Clears volume-creation “input/placeholder” fields on the parent Journal Media via `GenericFunctions.wipePublishingAttributes(...)` (wipes `JournalNumberOfVolumes`, `JournalPublicationYear`, and `JournalMediaNumberOfVolumes`).
- Shows an acknowledgement message (`Created <n> volumes. Continuing Process with Issue Creation.`) and navigates to `IssuesCreationMainScreen`.

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
