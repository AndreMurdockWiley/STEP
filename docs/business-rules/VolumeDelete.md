## VolumeDelete

- **Rule type**: Business Action
- **Business area**: VolumesDeleteGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: C_IssueDeletedDate, C_IssueState, C_LastUpdated, C_MessageStatus, IssueState
- **Source file(s)**: `VolumesGroup/VolumesDeleteGroup/VolumeDelete.js`

### Functional description

Deletes one or more selected **Volume** records and, when allowed, deletes their child **Issue** records. Before deleting, the rule validates that the volume is eligible for deletion (for example, preventing deletion when an issue under the volume has JPCMS and Original Publication Date populated). When deletion is permitted, the rule also updates the related “Group Issue” classification record so downstream integrations can process the change (via message status, delete date, and last-updated timestamp). If one or more selected volumes are not eligible, the user is shown an alert listing the volume(s) that cannot be deleted.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- For each selected Volume, run `volumeDeleteCheck` to confirm deletion is allowed.
- If a Volume fails validation:
  - Add the Volume name to an error list.
  - After processing all selections, show an alert: **“The Following Volume(s) can't be deleted”**, with body text indicating the volume has an Issue with JPCMS and Original Publication Date populated.
- If a Volume passes validation:
  - Iterate each child Issue and attempt to delete it.
  - For each Issue being deleted, read the Issue’s `IssueState` and determine whether it is **Draft** or **Enriched**.
  - Locate the related “Group Issue” classification node (via the `JournalGroupIssueRef` classification product link) and remove the mapped Issue attribute values from the relevant attribute group:
    - Print Issue: `AG_Group_Issue_Print_Attributes`
    - Digital Issue: `AG_Group_Issue_Digital_Attributes`
  - Update integration/audit fields on the Group Issue classification node to reflect the deletion action:
    - Set `C_MessageStatus` to `DELETE` when the Group Issue should be deleted downstream, or `UPDATE` when the Group Issue should remain but must be updated downstream.
    - Set `C_IssueDeletedDate` to the current timestamp when marking a Group Issue for deletion.
    - Set `C_LastUpdated` to the current timestamp when sending updates/deletes.
    - Approve the Group Issue classification node to persist changes.
    - Republish to outbound integration endpoints for Enriched-state scenarios and for Draft scenarios that require an UPDATE.
  - If an Issue is Enriched and the linked counterpart Issue has state **“Sent to SAP”**, block the delete for that Issue and show an alert: **“Issue <name> can't be deleted”** (body: **“The issue has already been sent to SAP”**).
  - If Issue deletion proceeds, delete the Issue product node and then delete the Volume once all child Issues have been processed.
- Attributes read/written by this rule include: `IssueState`, `C_IssueState`, `C_MessageStatus`, `C_IssueDeletedDate`, `C_LastUpdated`.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: The Following Volume(s) can't be deleted.
- **In-script message**: can't be deleted

### Usage / trigger

Usage information was not provided in the inventory workbook for this rule. A trigger location could not be inferred automatically; review STEP configuration for the source file(s): VolumesGroup/VolumesDeleteGroup/VolumeDelete.js.

- No usage/trigger details were extracted.

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 387
