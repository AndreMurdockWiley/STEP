## PubYearForCopyToOnlineCreationNextButton

- **Rule type**: Business Action
- **Business area**: PubYearNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CopyToOnline, JournalMediaCode, JournalPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearNavegationGroup/PubYearForCopyToOnlineCreationNextButton.js`

### Functional description

Creates a new Publication Year record from the current node and then continues the workflow to the Volume Creation screen. The action sets the CopyToOnline flag on the new year and, when the year is for a Print journal and eligible for copy-to-online, it performs the copy-to-online operation. The user receives an acknowledgement message that the year was created and the process is continuing.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Reads the current node's **JournalPublicationYear** and **JournalMediaCode**, and the parent Journal.
- Creates the new year via `pubLibrary.createYear`.
- Sets **CopyToOnline** on the new year from the validated input parameter.
- If **CopyToOnline** is `"Y"`, the media code is `"Print"`, and the parent journal passes `journalCopyToOnlineValidity`, calls `pubLibrary.yearCopyToOnline` for the new year.
- Shows an acknowledgement alert ("Year <year> has been created. Continuing Process with Volume Creation.") and navigates to **VolumesCreationScreen** with the new year.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): PubYearGroup/PubYearNavegationGroup/PubYearForCopyToOnlineCreationNextButton.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 375
