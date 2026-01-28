## STEP Web UI analysis (single-file report)

Source: `WebUI.xml`

### Summary

- **Total BusinessAction call-sites found**: 103
- **Unique BusinessActions**: 76
- **Screens containing BusinessActions**: 47
- **Workflow mappings found (ScreenMapping/WorkflowCondition)**: 24
- **Workflow references found (components with `Workflow` parameter)**: 9

### Table of contents

- [Workflows](#workflows)
- [Screens](#screens)
- [BusinessAction calls by screen](#businessaction-calls-by-screen)
- [BusinessAction calls by BusinessAction](#businessaction-calls-by-businessaction)

### Workflows

#### `CollectionCreationWF`

- **Screens involved (Web UI)**: 3
- **Business actions exposed (Web UI)**: 1
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 2
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow, collection lifecycle flow.

**States / tasks referenced (best-effort)**

- `State-3`
- `State-5`

**Web UI screens and actions**

- **Screen**: `CollectionWorkflowComponentsTaskList` (TaskList)
  - **`BA_Collection_Submit_From_Workflow`** (BusinessActionWithWebUIBindToolBar) — Submit — `CollectionGroup/BA_Collection_Submit_From_Workflow.js`
- **Screen**: `CollectionWorkflowHeaderTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `Error_Review_WF`

- **Screens involved (Web UI)**: 7
- **Business actions exposed (Web UI)**: 0
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 6
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a error review/rework flow.

**States / tasks referenced (best-effort)**

- `ESBErrors`
- `GBPM`
- `JPCMS`
- `PDH`
- `SAP`
- `WOL`

**Web UI screens and actions**

- **Screen**: `Error_Task_ESB` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `Error_Task_GBPM` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `Error_Task_JPCMS` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `Error_Task_PDH` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `Error_Task_SAP` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `Error_Task_WOL` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `JournalCreationWFV3Backup`

- **Screens involved (Web UI)**: 6
- **Business actions exposed (Web UI)**: 10
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 5
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow, journal lifecycle flow.

**States / tasks referenced (best-effort)**

- `Journal_Baseline`
- `Journal_Complete`
- `State-13`
- `State-7`

**Web UI screens and actions**

- **Screen**: `JournalCreationBaselineWorkflowTaskLIst` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `JournalCreationWorkflowMediaEnrichment` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `JournalCreationWorkflowTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `JournalNodeDetails` (NodeDetails)
  - **`BA_AddEditorialContactsToJournals`** (BusinessActionWithWebUIBindToolBar) — Add Reference — `Actions/BA_AddEditorialContactsToJournals.js`
  - **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal History — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
  - **`BA_CreateJournalHistoryAndReference`** (BusinessActionWithWebUIBindToolBar) — Create Journal History — `JournalWorkflowGroup/BA_CreateJournalHistoryAndReference.js`
  - **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`
  - **`JournalHistoryApprove`** (BusinessActionWithWebUIBindToolBar) — Save and Approve Journal History — `JournalHistoryGroup/JournalHistoryApprove.js`
  - **`JournalHistorySend`** (BusinessActionWithWebUIBindToolBar) — Send Journal History — `JournalHistoryGroup/JournalHistorySend.js`
  - **`JournalSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalWorkflowGroup/JournalSaveAction.js`
  - **`Send_Journal_Transition_Refs`** (BusinessActionWithWebUIBindToolBar) — Send Referenced Journal — `Actions/Send_Journal_Transition_Refs.js`
  - **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`
- **Screen**: `JournalWorkflowReadyForPubYearTaskList` (TaskList)
  - **`NavigateToPubYearOnWFCreationScreen`** (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process — `PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js`
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `OtherProductCollectionCreationWF`

- **Screens involved (Web UI)**: 3
- **Business actions exposed (Web UI)**: 0
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 2
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow, collection lifecycle flow.

**States / tasks referenced (best-effort)**

- `State-3`
- `State-5`

**Web UI screens and actions**

- **Screen**: `OtherProductCollectionComponentTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `OtherProductCollectionHeaderTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `OtherProductsCreationWF`

- **Screens involved (Web UI)**: 3
- **Business actions exposed (Web UI)**: 0
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 2
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow.

**States / tasks referenced (best-effort)**

- `State-3`
- `State-4`

**Web UI screens and actions**

- **Screen**: `OtherProductsDataNotFoundTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `OtherProductsWFEnrichmentScreen` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `PackageCreationWF`

- **Screens involved (Web UI)**: 2
- **Business actions exposed (Web UI)**: 0
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 1
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow, package lifecycle flow.

**States / tasks referenced (best-effort)**

- `State-3`

**Web UI screens and actions**

- **Screen**: `MJPackageCreationEnrichmentTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `ReviveSoftDeleteWorkflow`

- **Screens involved (Web UI)**: 4
- **Business actions exposed (Web UI)**: 2
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 3
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a soft-delete review/approval flow, revival (undo soft-delete) review/approval flow, general workflow orchestration.

**States / tasks referenced (best-effort)**

- `AddReference`
- `Review`

**Web UI screens and actions**

- **Screen**: `JournalHistoryReviveDeleteWFScreen` (NodeDetails)
  - **`BA_ApproveRevivalButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveRevivalButton.js`
  - **`BA_RejectRevivalButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectRevivalButton.js`
- **Screen**: `ReviveSoftDeleteAddReferenceWFTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `ReviveSoftDeleteReviewWFTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `SoftDeleteWorkflow`

- **Screens involved (Web UI)**: 2
- **Business actions exposed (Web UI)**: 2
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 1
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a soft-delete review/approval flow, general workflow orchestration.

**States / tasks referenced (best-effort)**

- `Review`

**Web UI screens and actions**

- **Screen**: `JournalHistorySoftDeleteWFScreen` (NodeDetails)
  - **`BA_ApproveSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveSoftDeleteButton.js`
  - **`BA_RejectSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectSoftDeleteButton.js`
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

#### `VolumeIssueCreationWF`

- **Screens involved (Web UI)**: 3
- **Business actions exposed (Web UI)**: 1
- **Workflow mappings (ScreenMapping/WorkflowCondition)**: 2
- **Workflow parameter references (components)**: 1

From naming alone, this appears to be a creation/initiation flow, issue lifecycle flow.

**States / tasks referenced (best-effort)**

- `State-8`
- `State-9`

**Web UI screens and actions**

- **Screen**: `IssueWorkflowMediaTaskList` (TaskList)
  - **`IssueDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Issue(s) — `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`
- **Screen**: `IssueWorkflowNonJPCMSTaskList` (TaskList)
  - No BusinessAction calls were detected on this screen.
- **Screen**: `homepage` (HomePage)
  - No BusinessAction calls were detected on this screen.

**Functional / business perspective (starter)**

Use this section to explain what the workflow accomplishes end-to-end from a business perspective (who initiates it, what gets validated, what approvals happen, what integrations fire, and what the success criteria are). The “Web UI screens and actions” list above shows what users can do in each step.

**Notes (fill in)**

- **Why this workflow was built**:
- **Primary users / roles**:
- **Entry criteria**:
- **Key validations / business rules**:
- **Exit criteria / definition of done**:
- **Downstream integrations / consumers**:

### Screens

#### `AdvancedSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`BA_ExportCollections`** (BusinessActionWithWebUIBindToolBar) — Export Collection Standard Report — `Actions/BA_ExportCollections.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `AllCollectionsPowerSearchScreen`

- **Screen type**: PowerSearch
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `AssetFolderScreen`

- **Screen type**: AssetFolderScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Attribute_Details_Screen`

- **Screen type**: AttributeManagementScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `AttributeSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `BackfilesDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`BackfileSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `BackfilesUpsertGroup/BackfileSaveButton.js`
- **`BackfilesSAPFinanceAttributesGenerator`** (BusinessActionWithWebUIBindButton) — Generate Attributes — `BackfilesUpsertGroup/BackfilesSAPFinanceAttributesGenerator.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `BackgroundProcessesScreen`

- **Screen type**: BackgroundProcessesScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `BackgroundProcessNodeDetails`

- **Screen type**: BackgroundProcessNodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `CollectionForwardingSwitchScreen`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `CollectionMassCreationSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `CollectionNodeDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`CollectionCopy`** (BusinessActionWithWebUIBindButton) — Copy Collection — `CollectionGroup/CollectionUpsertGroup/CollectionCopy.js`
- **`CollectionSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `CollectionGroup/CollectionUpsertGroup/CollectionSaveAction.js`
- **`CollectionValidFromPopulate`** (BusinessActionWithWebUIBindButton) — Populate Dates — `CollectionGroup/CollectionValidFromPopulate.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `CollectionSearch`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`BA_ExportCollections`** (BusinessActionWithWebUIBindToolBar) — Export Collection Standard Report — `Actions/BA_ExportCollections.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `CollectionWorkflowComponentsTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `CollectionCreationWF`

**Business actions on this screen**

- **`BA_Collection_Submit_From_Workflow`** (BusinessActionWithWebUIBindToolBar) — Submit — `CollectionGroup/BA_Collection_Submit_From_Workflow.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `CollectionWorkflowHeaderTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `CollectionCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DataConvValidationAdvSearch`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DataImport`

- **Screen type**: DataImport
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DemoTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DigitalIssueNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`IssueAttributesOnSaveGeneration`** (BusinessActionWithWebUIBindButton) — Generate Unique Attributes — `IssuesGroup/IssuesUpsertGroup/IssueAttributesOnSaveGeneration.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DigitalJournalNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`JournalMediaSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalMediaGroup/JournalMediaWorkflowGroup/JournalMediaSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`
- **`UpdateDigitalISSNKey`** (BusinessActionWithWebUIBindButton) — Update ISSN — `JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DigitalPublicationYearScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DigitalVolumesScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayChildrenScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayIssuesOnPubYear`

- **Screen type**: ChildrenOfTypes
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayJournalGroupCodeVerification`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayJournalsUnderSubjCodeScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayL2SubjectHierarchyChildrenScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayOLCodeSubHierarchyScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayPubYearChildrenScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

- **`AdHocVolumeCreation`** (BusinessActionWithWebUIBindToolBar) — Create Volume — `VolumesGroup/VolumesUpsertGroup/AdHocVolumeCreation.js`
- **`VolumeCopyToOnline`** (BusinessActionWithWebUIBindToolBar) — Copy to Online Volumes — `VolumesGroup/VolumesUpsertGroup/VolumeCopyToOnline.js`
- **`VolumeDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Volumes — `VolumesGroup/VolumesDeleteGroup/VolumeDelete.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplaySocietyEntityScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplaySubCodeSubHierarchyScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `DisplayVolumeChildrenScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

- **`AdHocIssueCreation`** (BusinessActionWithWebUIBindToolBar) — Create Issues — `IssuesGroup/IssuesUpsertGroup/AdHocIssueCreation.js`
- **`AdHocIssueCreationWithCopyToOnline`** (BusinessActionWithWebUIBindToolBar) — Create Issues — `IssuesGroup/IssuesUpsertGroup/AdHocIssueCreationWithCopyToOnline.js`
- **`IssueCopy`** (BusinessActionWithWebUIBindToolBar) — Copy Issue — `IssuesGroup/IssuesUpsertGroup/IssueCopy.js`
- **`IssueDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Issues — `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`
- **`IssueDeleteBoth`** (BusinessActionWithWebUIBindToolBar) — Delete Issues — `IssuesGroup/IssuesDeleteGroup/IssueDeleteBoth.js`
- **`IssueMergeCreation`** (BusinessActionWithWebUIBindToolBar) — Merge Issues — `IssuesGroup/IssuesUpsertGroup/IssueMergeCreation.js`
- **`IssueMergeCreationWithCopyToOnline`** (BusinessActionWithWebUIBindToolBar) — Merge Issues — `IssuesGroup/IssuesUpsertGroup/IssueMergeCreationWithCopyToOnline.js`
- **`IssuePubSequenceUpdate`** (BusinessActionWithWebUIBindToolBar) — Update Publication Sequence — `IssuesGroup/IssuesUpsertGroup/IssuePubSequenceUpdate.js`
- **`IssueStatusMassUpdate`** (BusinessActionWithWebUIBindToolBar) — Update Issue Status — `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdate.js`
- **`IssueStatusMassUpdateBoth`** (BusinessActionWithWebUIBindToolBar) — Update Issue Status — `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdateBoth.js`
- **`ReSendIssuesToSap`** (BusinessActionWithWebUIBindToolBar) — Send to SAP — `IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `EditorialContactEntityRootScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `EditorialContactNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`BA_EditorialContactOnSave`** (BusinessActionWithWebUIBindButton) — Save — `Actions/BA_EditorialContactOnSave.js`
- **`BA_TriggerECJournals`** (BusinessActionWithWebUIBindToolBar) — Send — `Actions/BA_TriggerECJournals.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `EditorialContactsHierarchyScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `EditorialContactTypeHierarchyScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Details_Screen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Task_ESB`

- **Screen type**: TaskList
- **Workflows referenced**: `Error_Review_WF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Task_GBPM`

- **Screen type**: TaskList
- **Workflows referenced**: `Error_Review_WF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Task_JPCMS`

- **Screen type**: TaskList
- **Workflows referenced**: `Error_Review_WF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Task_PDH`

- **Screen type**: TaskList
- **Workflows referenced**: `Error_Review_WF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Task_SAP`

- **Screen type**: TaskList
- **Workflows referenced**: `Error_Review_WF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Task_Screen`

- **Screen type**: TaskList
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Error_Task_WOL`

- **Screen type**: TaskList
- **Workflows referenced**: `Error_Review_WF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ErrorWorkflowFowarding`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ExternalDataPartnersNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ForwardingSwitchScreen`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ForwardSwitchScreenRevivalWF`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `GroupIssueSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `HelpAndTraining`

- **Screen type**: HomePage
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `homepage`

- **Screen type**: HomePage
- **Workflows referenced**: `CollectionCreationWF`, `Error_Review_WF`, `JournalCreationWFV3Backup`, `OtherProductCollectionCreationWF`, `OtherProductsCreationWF`, `PackageCreationWF`, `ReviveSoftDeleteWorkflow`, `SoftDeleteWorkflow`, `VolumeIssueCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `InitiateCollectionIntoWorkflow`

- **Screen type**: InitiateItem
- **Workflows referenced**: —

**Business actions on this screen**

- **`CollectionInitiateSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `CollectionGroup/CollectionInitiateSaveButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `InitiateJournalCreationScreen2`

- **Screen type**: InitiateItem
- **Workflows referenced**: —

**Business actions on this screen**

- **`Journal_WF_Save_Button`** (BusinessActionWithWebUIBindButton) — Save — `JournalWorkflowGroup/Journal_WF_Save_Button.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `InitiateMJPackageCreationScreen`

- **Screen type**: InitiateItem
- **Workflows referenced**: —

**Business actions on this screen**

- **`MultiJournalWFSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `PackageGroup/MultiJournalWFSaveButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `InitiateOtherProductCollection`

- **Screen type**: InitiateItem
- **Workflows referenced**: —

**Business actions on this screen**

- **`CollectionInitiateSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `CollectionGroup/CollectionInitiateSaveButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `InitiateOtherProductWFScreen`

- **Screen type**: InitiateItem
- **Workflows referenced**: —

**Business actions on this screen**

- **`OtherProductInitiateSaveButton`** (BusinessActionWithWebUIBindButton) — Search — `OtherProducts/OtherProductsNavegation/OtherProductInitiateSaveButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ISISubjectCategoryHierarchyScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ISISubjectCategoryIndexDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ISISubjectCateogryDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `IssuesCreationMainScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`IssueCreationFinishButton`** (BusinessActionWithWebUIBindButton) — Create Issues and Finish Process — `IssuesGroup/IssuesNavegationGroup/IssueCreationFinishButton.js`
- **`NavigateAwayFromIssueCreationScreen`** (BusinessActionWithWebUIBindButton) — Cancel — `IssuesGroup/IssuesNavegationGroup/NavigateAwayFromIssueCreationScreen.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `IssuesCreationSubScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `IssueSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `IssueWorkflowJPCMSTaskScreen`

- **Screen type**: TaskList
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `IssueWorkflowMediaTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `VolumeIssueCreationWF`

**Business actions on this screen**

- **`IssueDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Issue(s) — `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `IssueWorkflowNonJPCMSTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `VolumeIssueCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Journal Creation Screen`

- **Screen type**: CreateObjectInWorkflow
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalChildrenScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalCollectionsSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`MassCreateStandardCollections`** (BusinessActionWithWebUIBindToolBar) — Mass Create Standard Collections — `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalCreationBaselineWorkflowTaskLIst`

- **Screen type**: TaskList
- **Workflows referenced**: `JournalCreationWFV3Backup`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalCreationWorkflowMediaEnrichment`

- **Screen type**: TaskList
- **Workflows referenced**: `JournalCreationWFV3Backup`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalCreationWorkflowTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `JournalCreationWFV3Backup`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalGroupCodeNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalGroupIssueChildrenScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalGroupStartScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalHistoryDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **`BA_InitiateSoftDelete`** (BusinessActionWithWebUIBindButton) — Initiate Soft Delete — `Actions/BA_InitiateSoftDelete.js`
- **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`
- **`JournalHistoryAttributeGenerationButton`** (BusinessActionWithWebUIBindButton) — Generate Attributes — `JournalHistoryGroup/JournalHistoryAttributeGenerationButton.js`
- **`JournalHistorySaveButton`** (BusinessActionWithWebUIBindButton) — Save — `JournalHistoryGroup/JournalHistorySaveButton.js`
- **`Send_Journal_Transition_Refs`** (BusinessActionWithWebUIBindToolBar) — Send Referenced History — `Actions/Send_Journal_Transition_Refs.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalHistoryReviveDeleteWFScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: `ReviveSoftDeleteWorkflow`

**Business actions on this screen**

- **`BA_ApproveRevivalButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveRevivalButton.js`
- **`BA_RejectRevivalButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectRevivalButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalHistoryReviveReferenceWFScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalHistorySearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalHistorySoftDeleteDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`BA_ReviveSoftDelete`** (BusinessActionWithWebUIBindButton) — Revive Object — `Actions/BA_ReviveSoftDelete.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalHistorySoftDeleteWFScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: `SoftDeleteWorkflow`

**Business actions on this screen**

- **`BA_ApproveSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveSoftDeleteButton.js`
- **`BA_RejectSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectSoftDeleteButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalLevelChildren`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalMassCreationScreen`

- **Screen type**: MassCreationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalMediaChildrenScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

- **`AdHocPublicationYearCreation`** (BusinessActionWithWebUIBindToolBar) — Create Publication Year — `PubYearGroup/PubYearUpsertGroup/AdHocPublicationYearCreation.js`
- **`NavigateToPubYearCreationScreen`** (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process — `PubYearGroup/PubYearNavegationGroup/NavigateToPubYearCreationScreen.js`
- **`PublicationYearDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Publication Years — `PubYearGroup/PublicationYearDelete.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalMediaSearch`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalNetworkMassImportScreen`

- **Screen type**: DataImport
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: `JournalCreationWFV3Backup`

**Business actions on this screen**

- **`BA_AddEditorialContactsToJournals`** (BusinessActionWithWebUIBindToolBar) — Add Reference — `Actions/BA_AddEditorialContactsToJournals.js`
- **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal History — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **`BA_CreateJournalHistoryAndReference`** (BusinessActionWithWebUIBindToolBar) — Create Journal History — `JournalWorkflowGroup/BA_CreateJournalHistoryAndReference.js`
- **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`
- **`JournalHistoryApprove`** (BusinessActionWithWebUIBindToolBar) — Save and Approve Journal History — `JournalHistoryGroup/JournalHistoryApprove.js`
- **`JournalHistorySend`** (BusinessActionWithWebUIBindToolBar) — Send Journal History — `JournalHistoryGroup/JournalHistorySend.js`
- **`JournalSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalWorkflowGroup/JournalSaveAction.js`
- **`Send_Journal_Transition_Refs`** (BusinessActionWithWebUIBindToolBar) — Send Referenced Journal — `Actions/Send_Journal_Transition_Refs.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalRightsDataReport`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Journals Search Screen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`SendJournal`** (BusinessActionWithWebUIBindToolBar) — Send — `JournalWorkflowGroup/SendJournal.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalsAIImportScreen`

- **Screen type**: DataImport
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalsEditorialDataReportScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`SendJournal`** (BusinessActionWithWebUIBindToolBar) — Send — `JournalWorkflowGroup/SendJournal.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalsEditorialReportsSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`SendJournal`** (BusinessActionWithWebUIBindToolBar) — Send — `JournalWorkflowGroup/SendJournal.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalWorkflowForwardingScreen`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JournalWorkflowReadyForPubYearTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `JournalCreationWFV3Backup`

**Business actions on this screen**

- **`NavigateToPubYearOnWFCreationScreen`** (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process — `PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `JPCMSAdvancedSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`ReSendIssuesToSap`** (BusinessActionWithWebUIBindToolBar) — Send — `IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `login`

- **Screen type**: LoginScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `main`

- **Screen type**: Main
- **Workflows referenced**: —

**Business actions on this screen**

- **`BA_ExportUserInventory`** (BusinessActionWithWebUIBindToolBar) — Export — `Actions/BA_ExportUserInventory.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ManualNoOfIssueCreationScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`CreateIssuesFromVolume`** (BusinessActionWithWebUIBindButton) — Create Issues

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ManualNoOfIssueCreationSubScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ManualPublicationYearCreationScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`CreatePubYearVolumeButton`** (BusinessActionWithWebUIBindButton) — Next Step
- **`NavigateAwayFromPubYearCreation`** (BusinessActionWithWebUIBindButton) — Cancel — `PubYearGroup/PubYearNavegationGroup/NavigateAwayFromPubYearCreation.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MassCreatePubYearScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`AutomaticPubYearVolumesIssuesCreation`** (BusinessActionWithWebUIBindToolBar) — Auto Create Pub Year/Volumes/Issues — `PubYearGroup/PubYearUpsertGroup/AutomaticPubYearVolumesIssuesCreation.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MassCreateStandardCollections`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

- **`MassCreateStandardCollections`** (BusinessActionWithWebUIBindToolBar) — Mass Create ST Collections — `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MJPackageCreationEnrichmentTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `PackageCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MJPackageWFForwardingScreen`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiJournalNodeDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`CopyPackageNameToTitle`** (BusinessActionWithWebUIBindButton) — Save — `PackageGroup/CopyPackageNameToTitle.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiJournalSearch`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiMediaPackageNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiMediaSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiNodeViewer`

- **Screen type**: MultiNodeViewer
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiRevisionScreenBackfiles`

- **Screen type**: MultiRevisionScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiRevisionScreenCollections`

- **Screen type**: MultiRevisionScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiRevisionScreenJournals`

- **Screen type**: MultiRevisionScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiRevisionScreenOtherProdCollections`

- **Screen type**: MultiRevisionScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiRevisionScreenPartnerJournals`

- **Screen type**: MultiRevisionScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiRevisionScreenVolumeIssues`

- **Screen type**: MultiRevisionScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `MultiSelectionScreen`

- **Screen type**: MultiSelectionScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `Name and ID`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `NodeListBrowser`

- **Screen type**: NodeListBrowser
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ObjectDeleteWFTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductCollectionComponentTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `OtherProductCollectionCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductCollectionForwardSwitchScreen`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductCollectionHeaderTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `OtherProductCollectionCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductCollectionNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`OtherProductCollectionSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `OtherProductCollectionRules/OtherProductCollectionSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductCollectionSearch`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsDataNotFoundTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `OtherProductsCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsForwardingScreen`

- **Screen type**: ForwardingSwitchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`OtherProductsSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `OtherProducts/OtherProductsSaveButton.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsOCLCSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsProductReportScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsSAPFinanceReportScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsSearch`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `OtherProductsWFEnrichmentScreen`

- **Screen type**: TaskList
- **Workflows referenced**: `OtherProductsCreationWF`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PartnerJournalImportConfigurationScreen`

- **Screen type**: DataImport
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PartnerJournalNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`PartnerJournalSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `PartnerJournalsGroup/PartnerJournalSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PartnerJournalSearchScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PrintIssueNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`IssueAttributesOnSaveGeneration`** (BusinessActionWithWebUIBindButton) — Generate Unique Attributes — `IssuesGroup/IssuesUpsertGroup/IssueAttributesOnSaveGeneration.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PrintJournalNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`JournalMediaSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalMediaGroup/JournalMediaWorkflowGroup/JournalMediaSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`
- **`UpdatePrintISSNKey`** (BusinessActionWithWebUIBindButton) — Update ISSN — `JournalMediaGroup/JournalMediaUpsertGroup/UpdatePrintISSNKey.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PrintPublicationYearScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PrintVolumesScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ProductLineHierarchyScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ProductLinesDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ProductOfferingDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ProductOfferingHierarchyScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ProductPlatformDetailsScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ProductPlatformHierarchyScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `PublicationYearCreationScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`NavigateAwayFromPubYearCreation`** (BusinessActionWithWebUIBindButton) — Cancel — `PubYearGroup/PubYearNavegationGroup/NavigateAwayFromPubYearCreation.js`
- **`PublicationYearCreationFinishButton`** (BusinessActionWithWebUIBindButton) — Create Publication Year and Finish Process — `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationFinishButton.js`
- **`PublicationYearCreationNextButton`** (BusinessActionWithWebUIBindButton) — Create Publication Year and Continue with Volume Creation — `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationNextButton.js`
- **`PubYearForCopyToOnlineCreationNextButton`** (BusinessActionWithWebUIBindButton) — Create Publication Year and Continue with Volume Creation — `PubYearGroup/PubYearNavegationGroup/PubYearForCopyToOnlineCreationNextButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ReannouncementPubYearByIssuesSubScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

- **`ReannouncePubYearIssues`** (BusinessActionWithWebUIBindToolBar) — Reannounce Selection — `ReannouncementGroup/ReannouncePubYearIssues.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ReannouncementPubYearByVolumesSubScreen`

- **Screen type**: Children
- **Workflows referenced**: —

**Business actions on this screen**

- **`NavigateToReannouncementByIssuesScreen`** (BusinessActionWithWebUIBindToolBar) — Reannounce Specific Issues — `ReannouncementGroup/NavigateToReannouncementByIssuesScreen.js`
- **`ReannouncePubYearVolumes`** (BusinessActionWithWebUIBindToolBar) — Reannounce Selection — `ReannouncementGroup/ReannouncePubYearVolumes.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ReannouncementPubYearScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`NavigateAwayFromPubReannouncement`** (BusinessActionWithWebUIBindButton) — Cancel — `ReannouncementGroup/NavigateAwayFromPubReannouncement.js`
- **`ReannounceFullPubYear`** (BusinessActionWithWebUIBindButton) — Reannounce All — `ReannouncementGroup/ReannounceFullPubYear.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `RecentlyCreatedIssueScreen`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ReviveSoftDeleteAddReferenceWFTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `ReviveSoftDeleteWorkflow`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `ReviveSoftDeleteReviewWFTaskList`

- **Screen type**: TaskList
- **Workflows referenced**: `ReviveSoftDeleteWorkflow`

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `SAPCostCenterDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `SAPCostCenterHierarchyScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `SocietyEntityNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `SocietySearch`

- **Screen type**: AdvancedSearchScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `SubjectHierarchyClassficationScreen`

- **Screen type**: ClassificationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `TrainingArtifactImport`

- **Screen type**: DataImport
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `userdetails`

- **Screen type**: UserDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `VolumeAndIssueCreationScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `VolumeGroupCreationScreen`

- **Screen type**: MassCreationScreen
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `VolumeNodeDetails`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

—

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

#### `VolumesCreationScreen`

- **Screen type**: NodeDetails
- **Workflows referenced**: —

**Business actions on this screen**

- **`NavigateAwayFromVolumeCreationScreen`** (BusinessActionWithWebUIBindButton) — Cancel — `VolumesGroup/VolumesNavegationGroup/NavigateAwayFromVolumeCreationScreen.js`
- **`VolumeCreationFinishButton`** (BusinessActionWithWebUIBindButton) — Create Volumes and Finish Process — `VolumesGroup/VolumesNavegationGroup/VolumeCreationFinishButton.js`
- **`VolumeCreationNextButton`** (BusinessActionWithWebUIBindButton) — Create Volumes and Continue with Issue Creation — `VolumesGroup/VolumesNavegationGroup/VolumeCreationNextButton.js`

**Functional / business perspective (starter)**

This screen exposes the actions and workflow controls needed to complete a specific step of the business process. The items above indicate what users can execute from this page; use these to describe why the page exists and what “done” looks like for the user.

**Notes (fill in)**

- **Why this screen exists**:
- **Who uses it**:
- **Key decisions / validations**:
- **Downstream impacts**:

### BusinessAction calls by screen

#### `AdvancedSearchScreen (AdvancedSearchScreen)`

- **`BA_ExportCollections`** (BusinessActionWithWebUIBindToolBar) — Export Collection Standard Report — `Actions/BA_ExportCollections.js`

#### `BackfilesDetailsScreen (NodeDetails)`

- **`BackfileSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `BackfilesUpsertGroup/BackfileSaveButton.js`
- **`BackfilesSAPFinanceAttributesGenerator`** (BusinessActionWithWebUIBindButton) — Generate Attributes — `BackfilesUpsertGroup/BackfilesSAPFinanceAttributesGenerator.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `CollectionNodeDetailsScreen (NodeDetails)`

- **`CollectionCopy`** (BusinessActionWithWebUIBindButton) — Copy Collection — `CollectionGroup/CollectionUpsertGroup/CollectionCopy.js`
- **`CollectionSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `CollectionGroup/CollectionUpsertGroup/CollectionSaveAction.js`
- **`CollectionValidFromPopulate`** (BusinessActionWithWebUIBindButton) — Populate Dates — `CollectionGroup/CollectionValidFromPopulate.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `CollectionSearch (AdvancedSearchScreen)`

- **`BA_ExportCollections`** (BusinessActionWithWebUIBindToolBar) — Export Collection Standard Report — `Actions/BA_ExportCollections.js`

#### `CollectionWorkflowComponentsTaskList (TaskList)`

- **`BA_Collection_Submit_From_Workflow`** (BusinessActionWithWebUIBindToolBar) — Submit — `CollectionGroup/BA_Collection_Submit_From_Workflow.js`

#### `DigitalIssueNodeDetails (NodeDetails)`

- **`IssueAttributesOnSaveGeneration`** (BusinessActionWithWebUIBindButton) — Generate Unique Attributes — `IssuesGroup/IssuesUpsertGroup/IssueAttributesOnSaveGeneration.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `DigitalJournalNodeDetails (NodeDetails)`

- **`JournalMediaSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalMediaGroup/JournalMediaWorkflowGroup/JournalMediaSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`
- **`UpdateDigitalISSNKey`** (BusinessActionWithWebUIBindButton) — Update ISSN — `JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js`

#### `DisplayPubYearChildrenScreen (Children)`

- **`AdHocVolumeCreation`** (BusinessActionWithWebUIBindToolBar) — Create Volume — `VolumesGroup/VolumesUpsertGroup/AdHocVolumeCreation.js`
- **`VolumeCopyToOnline`** (BusinessActionWithWebUIBindToolBar) — Copy to Online Volumes — `VolumesGroup/VolumesUpsertGroup/VolumeCopyToOnline.js`
- **`VolumeDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Volumes — `VolumesGroup/VolumesDeleteGroup/VolumeDelete.js`

#### `DisplayVolumeChildrenScreen (Children)`

- **`AdHocIssueCreation`** (BusinessActionWithWebUIBindToolBar) — Create Issues — `IssuesGroup/IssuesUpsertGroup/AdHocIssueCreation.js`
- **`AdHocIssueCreationWithCopyToOnline`** (BusinessActionWithWebUIBindToolBar) — Create Issues — `IssuesGroup/IssuesUpsertGroup/AdHocIssueCreationWithCopyToOnline.js`
- **`IssueCopy`** (BusinessActionWithWebUIBindToolBar) — Copy Issue — `IssuesGroup/IssuesUpsertGroup/IssueCopy.js`
- **`IssueDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Issues — `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`
- **`IssueDeleteBoth`** (BusinessActionWithWebUIBindToolBar) — Delete Issues — `IssuesGroup/IssuesDeleteGroup/IssueDeleteBoth.js`
- **`IssueMergeCreation`** (BusinessActionWithWebUIBindToolBar) — Merge Issues — `IssuesGroup/IssuesUpsertGroup/IssueMergeCreation.js`
- **`IssueMergeCreationWithCopyToOnline`** (BusinessActionWithWebUIBindToolBar) — Merge Issues — `IssuesGroup/IssuesUpsertGroup/IssueMergeCreationWithCopyToOnline.js`
- **`IssuePubSequenceUpdate`** (BusinessActionWithWebUIBindToolBar) — Update Publication Sequence — `IssuesGroup/IssuesUpsertGroup/IssuePubSequenceUpdate.js`
- **`IssueStatusMassUpdate`** (BusinessActionWithWebUIBindToolBar) — Update Issue Status — `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdate.js`
- **`IssueStatusMassUpdateBoth`** (BusinessActionWithWebUIBindToolBar) — Update Issue Status — `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdateBoth.js`
- **`ReSendIssuesToSap`** (BusinessActionWithWebUIBindToolBar) — Send to SAP — `IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js`

#### `EditorialContactNodeDetails (NodeDetails)`

- **`BA_EditorialContactOnSave`** (BusinessActionWithWebUIBindButton) — Save — `Actions/BA_EditorialContactOnSave.js`
- **`BA_TriggerECJournals`** (BusinessActionWithWebUIBindToolBar) — Send — `Actions/BA_TriggerECJournals.js`

#### `InitiateCollectionIntoWorkflow (InitiateItem)`

- **`CollectionInitiateSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `CollectionGroup/CollectionInitiateSaveButton.js`

#### `InitiateJournalCreationScreen2 (InitiateItem)`

- **`Journal_WF_Save_Button`** (BusinessActionWithWebUIBindButton) — Save — `JournalWorkflowGroup/Journal_WF_Save_Button.js`

#### `InitiateMJPackageCreationScreen (InitiateItem)`

- **`MultiJournalWFSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `PackageGroup/MultiJournalWFSaveButton.js`

#### `InitiateOtherProductCollection (InitiateItem)`

- **`CollectionInitiateSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `CollectionGroup/CollectionInitiateSaveButton.js`

#### `InitiateOtherProductWFScreen (InitiateItem)`

- **`OtherProductInitiateSaveButton`** (BusinessActionWithWebUIBindButton) — Search — `OtherProducts/OtherProductsNavegation/OtherProductInitiateSaveButton.js`

#### `IssuesCreationMainScreen (NodeDetails)`

- **`IssueCreationFinishButton`** (BusinessActionWithWebUIBindButton) — Create Issues and Finish Process — `IssuesGroup/IssuesNavegationGroup/IssueCreationFinishButton.js`
- **`NavigateAwayFromIssueCreationScreen`** (BusinessActionWithWebUIBindButton) — Cancel — `IssuesGroup/IssuesNavegationGroup/NavigateAwayFromIssueCreationScreen.js`

#### `IssueWorkflowMediaTaskList (TaskList)`

- **`IssueDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Issue(s) — `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`

#### `JournalCollectionsSearchScreen (AdvancedSearchScreen)`

- **`MassCreateStandardCollections`** (BusinessActionWithWebUIBindToolBar) — Mass Create Standard Collections — `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`

#### `JournalHistoryDetailsScreen (NodeDetails)`

- **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **`BA_InitiateSoftDelete`** (BusinessActionWithWebUIBindButton) — Initiate Soft Delete — `Actions/BA_InitiateSoftDelete.js`
- **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`
- **`JournalHistoryAttributeGenerationButton`** (BusinessActionWithWebUIBindButton) — Generate Attributes — `JournalHistoryGroup/JournalHistoryAttributeGenerationButton.js`
- **`JournalHistorySaveButton`** (BusinessActionWithWebUIBindButton) — Save — `JournalHistoryGroup/JournalHistorySaveButton.js`
- **`Send_Journal_Transition_Refs`** (BusinessActionWithWebUIBindToolBar) — Send Referenced History — `Actions/Send_Journal_Transition_Refs.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `JournalHistoryReviveDeleteWFScreen (NodeDetails)`

- **`BA_ApproveRevivalButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveRevivalButton.js`
- **`BA_RejectRevivalButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectRevivalButton.js`

#### `JournalHistoryReviveReferenceWFScreen (NodeDetails)`

- **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`

#### `JournalHistorySoftDeleteDetailsScreen (NodeDetails)`

- **`BA_ReviveSoftDelete`** (BusinessActionWithWebUIBindButton) — Revive Object — `Actions/BA_ReviveSoftDelete.js`

#### `JournalHistorySoftDeleteWFScreen (NodeDetails)`

- **`BA_ApproveSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Approve — `Actions/BA_ApproveSoftDeleteButton.js`
- **`BA_RejectSoftDeleteButton`** (BusinessActionWithWebUIBindButton) — Reject — `Actions/BA_RejectSoftDeleteButton.js`

#### `JournalMediaChildrenScreen (Children)`

- **`AdHocPublicationYearCreation`** (BusinessActionWithWebUIBindToolBar) — Create Publication Year — `PubYearGroup/PubYearUpsertGroup/AdHocPublicationYearCreation.js`
- **`NavigateToPubYearCreationScreen`** (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process — `PubYearGroup/PubYearNavegationGroup/NavigateToPubYearCreationScreen.js`
- **`PublicationYearDelete`** (BusinessActionWithWebUIBindToolBar) — Delete Publication Years — `PubYearGroup/PublicationYearDelete.js`

#### `JournalNodeDetails (NodeDetails)`

- **`BA_AddEditorialContactsToJournals`** (BusinessActionWithWebUIBindToolBar) — Add Reference — `Actions/BA_AddEditorialContactsToJournals.js`
- **`BA_AddJournalToJournalHistoryReference`** (BusinessActionWithWebUIBindToolBar) — Add Journal History — `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **`BA_CreateJournalHistoryAndReference`** (BusinessActionWithWebUIBindToolBar) — Create Journal History — `JournalWorkflowGroup/BA_CreateJournalHistoryAndReference.js`
- **`BA_RemoveLink`** (BusinessActionWithWebUIBindToolBar) — Remove Reference — `Actions/BA_RemoveLink.js`
- **`JournalHistoryApprove`** (BusinessActionWithWebUIBindToolBar) — Save and Approve Journal History — `JournalHistoryGroup/JournalHistoryApprove.js`
- **`JournalHistorySend`** (BusinessActionWithWebUIBindToolBar) — Send Journal History — `JournalHistoryGroup/JournalHistorySend.js`
- **`JournalSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalWorkflowGroup/JournalSaveAction.js`
- **`Send_Journal_Transition_Refs`** (BusinessActionWithWebUIBindToolBar) — Send Referenced Journal — `Actions/Send_Journal_Transition_Refs.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `Journals Search Screen (AdvancedSearchScreen)`

- **`SendJournal`** (BusinessActionWithWebUIBindToolBar) — Send — `JournalWorkflowGroup/SendJournal.js`

#### `JournalsEditorialDataReportScreen (AdvancedSearchScreen)`

- **`SendJournal`** (BusinessActionWithWebUIBindToolBar) — Send — `JournalWorkflowGroup/SendJournal.js`

#### `JournalsEditorialReportsSearchScreen (AdvancedSearchScreen)`

- **`SendJournal`** (BusinessActionWithWebUIBindToolBar) — Send — `JournalWorkflowGroup/SendJournal.js`

#### `JournalWorkflowReadyForPubYearTaskList (TaskList)`

- **`NavigateToPubYearOnWFCreationScreen`** (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process — `PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js`

#### `JPCMSAdvancedSearchScreen (AdvancedSearchScreen)`

- **`ReSendIssuesToSap`** (BusinessActionWithWebUIBindToolBar) — Send — `IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js`

#### `main (Main)`

- **`BA_ExportUserInventory`** (BusinessActionWithWebUIBindToolBar) — Export — `Actions/BA_ExportUserInventory.js`

#### `ManualNoOfIssueCreationScreen (NodeDetails)`

- **`CreateIssuesFromVolume`** (BusinessActionWithWebUIBindButton) — Create Issues

#### `ManualPublicationYearCreationScreen (NodeDetails)`

- **`CreatePubYearVolumeButton`** (BusinessActionWithWebUIBindButton) — Next Step
- **`NavigateAwayFromPubYearCreation`** (BusinessActionWithWebUIBindButton) — Cancel — `PubYearGroup/PubYearNavegationGroup/NavigateAwayFromPubYearCreation.js`

#### `MassCreatePubYearScreen (AdvancedSearchScreen)`

- **`AutomaticPubYearVolumesIssuesCreation`** (BusinessActionWithWebUIBindToolBar) — Auto Create Pub Year/Volumes/Issues — `PubYearGroup/PubYearUpsertGroup/AutomaticPubYearVolumesIssuesCreation.js`

#### `MassCreateStandardCollections (AdvancedSearchScreen)`

- **`MassCreateStandardCollections`** (BusinessActionWithWebUIBindToolBar) — Mass Create ST Collections — `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`

#### `MultiJournalNodeDetailsScreen (NodeDetails)`

- **`CopyPackageNameToTitle`** (BusinessActionWithWebUIBindButton) — Save — `PackageGroup/CopyPackageNameToTitle.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `MultiMediaPackageNodeDetails (NodeDetails)`

- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `OtherProductCollectionNodeDetails (NodeDetails)`

- **`OtherProductCollectionSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `OtherProductCollectionRules/OtherProductCollectionSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `OtherProductsNodeDetails (NodeDetails)`

- **`OtherProductsSaveButton`** (BusinessActionWithWebUIBindButton) — Save — `OtherProducts/OtherProductsSaveButton.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `PartnerJournalNodeDetails (NodeDetails)`

- **`PartnerJournalSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `PartnerJournalsGroup/PartnerJournalSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `PrintIssueNodeDetails (NodeDetails)`

- **`IssueAttributesOnSaveGeneration`** (BusinessActionWithWebUIBindButton) — Generate Unique Attributes — `IssuesGroup/IssuesUpsertGroup/IssueAttributesOnSaveGeneration.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`

#### `PrintJournalNodeDetails (NodeDetails)`

- **`JournalMediaSaveAction`** (BusinessActionWithWebUIBindButton) — Save — `JournalMediaGroup/JournalMediaWorkflowGroup/JournalMediaSaveAction.js`
- **`Test_Trigger_Rule_Update_withMessage`** (BusinessActionWithWebUIBindButton) — Send — `Integrations/Test_Trigger_Rule_Update_withMessage.js`
- **`UpdatePrintISSNKey`** (BusinessActionWithWebUIBindButton) — Update ISSN — `JournalMediaGroup/JournalMediaUpsertGroup/UpdatePrintISSNKey.js`

#### `PublicationYearCreationScreen (NodeDetails)`

- **`NavigateAwayFromPubYearCreation`** (BusinessActionWithWebUIBindButton) — Cancel — `PubYearGroup/PubYearNavegationGroup/NavigateAwayFromPubYearCreation.js`
- **`PublicationYearCreationFinishButton`** (BusinessActionWithWebUIBindButton) — Create Publication Year and Finish Process — `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationFinishButton.js`
- **`PublicationYearCreationNextButton`** (BusinessActionWithWebUIBindButton) — Create Publication Year and Continue with Volume Creation — `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationNextButton.js`
- **`PubYearForCopyToOnlineCreationNextButton`** (BusinessActionWithWebUIBindButton) — Create Publication Year and Continue with Volume Creation — `PubYearGroup/PubYearNavegationGroup/PubYearForCopyToOnlineCreationNextButton.js`

#### `ReannouncementPubYearByIssuesSubScreen (Children)`

- **`ReannouncePubYearIssues`** (BusinessActionWithWebUIBindToolBar) — Reannounce Selection — `ReannouncementGroup/ReannouncePubYearIssues.js`

#### `ReannouncementPubYearByVolumesSubScreen (Children)`

- **`NavigateToReannouncementByIssuesScreen`** (BusinessActionWithWebUIBindToolBar) — Reannounce Specific Issues — `ReannouncementGroup/NavigateToReannouncementByIssuesScreen.js`
- **`ReannouncePubYearVolumes`** (BusinessActionWithWebUIBindToolBar) — Reannounce Selection — `ReannouncementGroup/ReannouncePubYearVolumes.js`

#### `ReannouncementPubYearScreen (NodeDetails)`

- **`NavigateAwayFromPubReannouncement`** (BusinessActionWithWebUIBindButton) — Cancel — `ReannouncementGroup/NavigateAwayFromPubReannouncement.js`
- **`ReannounceFullPubYear`** (BusinessActionWithWebUIBindButton) — Reannounce All — `ReannouncementGroup/ReannounceFullPubYear.js`

#### `VolumesCreationScreen (NodeDetails)`

- **`NavigateAwayFromVolumeCreationScreen`** (BusinessActionWithWebUIBindButton) — Cancel — `VolumesGroup/VolumesNavegationGroup/NavigateAwayFromVolumeCreationScreen.js`
- **`VolumeCreationFinishButton`** (BusinessActionWithWebUIBindButton) — Create Volumes and Finish Process — `VolumesGroup/VolumesNavegationGroup/VolumeCreationFinishButton.js`
- **`VolumeCreationNextButton`** (BusinessActionWithWebUIBindButton) — Create Volumes and Continue with Issue Creation — `VolumesGroup/VolumesNavegationGroup/VolumeCreationNextButton.js`

### BusinessAction calls by BusinessAction

#### `AdHocIssueCreation`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/AdHocIssueCreation.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Create Issues

#### `AdHocIssueCreationWithCopyToOnline`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/AdHocIssueCreationWithCopyToOnline.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Create Issues

#### `AdHocPublicationYearCreation`

- **Implementation file(s)**: `PubYearGroup/PubYearUpsertGroup/AdHocPublicationYearCreation.js`
- **Screen**: `JournalMediaChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Create Publication Year

#### `AdHocVolumeCreation`

- **Implementation file(s)**: `VolumesGroup/VolumesUpsertGroup/AdHocVolumeCreation.js`
- **Screen**: `DisplayPubYearChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Create Volume

#### `AutomaticPubYearVolumesIssuesCreation`

- **Implementation file(s)**: `PubYearGroup/PubYearUpsertGroup/AutomaticPubYearVolumesIssuesCreation.js`
- **Screen**: `MassCreatePubYearScreen (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Auto Create Pub Year/Volumes/Issues

#### `BA_AddEditorialContactsToJournals`

- **Implementation file(s)**: `Actions/BA_AddEditorialContactsToJournals.js`
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Add Reference

#### `BA_AddJournalToJournalHistoryReference`

- **Implementation file(s)**: `JournalWorkflowGroup/BA_AddJournalToJournalHistoryReference.js`
- **Screen**: `JournalHistoryDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Add Journal
- **Screen**: `JournalHistoryReviveReferenceWFScreen (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Add Journal
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Add Journal History

#### `BA_ApproveRevivalButton`

- **Implementation file(s)**: `Actions/BA_ApproveRevivalButton.js`
- **Screen**: `JournalHistoryReviveDeleteWFScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Approve

#### `BA_ApproveSoftDeleteButton`

- **Implementation file(s)**: `Actions/BA_ApproveSoftDeleteButton.js`
- **Screen**: `JournalHistorySoftDeleteWFScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Approve

#### `BA_Collection_Submit_From_Workflow`

- **Implementation file(s)**: `CollectionGroup/BA_Collection_Submit_From_Workflow.js`
- **Screen**: `CollectionWorkflowComponentsTaskList (TaskList)` (BusinessActionWithWebUIBindToolBar) — Submit

#### `BA_CreateJournalHistoryAndReference`

- **Implementation file(s)**: `JournalWorkflowGroup/BA_CreateJournalHistoryAndReference.js`
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Create Journal History

#### `BA_EditorialContactOnSave`

- **Implementation file(s)**: `Actions/BA_EditorialContactOnSave.js`
- **Screen**: `EditorialContactNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `BA_ExportCollections`

- **Implementation file(s)**: `Actions/BA_ExportCollections.js`
- **Screen**: `AdvancedSearchScreen (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Export Collection Standard Report
- **Screen**: `CollectionSearch (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Export Collection Standard Report

#### `BA_ExportUserInventory`

- **Implementation file(s)**: `Actions/BA_ExportUserInventory.js`
- **Screen**: `main (Main)` (BusinessActionWithWebUIBindToolBar) — Export

#### `BA_InitiateSoftDelete`

- **Implementation file(s)**: `Actions/BA_InitiateSoftDelete.js`
- **Screen**: `JournalHistoryDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Initiate Soft Delete

#### `BA_RejectRevivalButton`

- **Implementation file(s)**: `Actions/BA_RejectRevivalButton.js`
- **Screen**: `JournalHistoryReviveDeleteWFScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Reject

#### `BA_RejectSoftDeleteButton`

- **Implementation file(s)**: `Actions/BA_RejectSoftDeleteButton.js`
- **Screen**: `JournalHistorySoftDeleteWFScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Reject

#### `BA_RemoveLink`

- **Implementation file(s)**: `Actions/BA_RemoveLink.js`
- **Screen**: `JournalHistoryDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Remove Reference
- **Screen**: `JournalHistoryReviveReferenceWFScreen (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Remove Reference
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Remove Reference

#### `BA_ReviveSoftDelete`

- **Implementation file(s)**: `Actions/BA_ReviveSoftDelete.js`
- **Screen**: `JournalHistorySoftDeleteDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Revive Object

#### `BA_TriggerECJournals`

- **Implementation file(s)**: `Actions/BA_TriggerECJournals.js`
- **Screen**: `EditorialContactNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Send

#### `BackfileSaveButton`

- **Implementation file(s)**: `BackfilesUpsertGroup/BackfileSaveButton.js`
- **Screen**: `BackfilesDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `BackfilesSAPFinanceAttributesGenerator`

- **Implementation file(s)**: `BackfilesUpsertGroup/BackfilesSAPFinanceAttributesGenerator.js`
- **Screen**: `BackfilesDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Generate Attributes

#### `CollectionCopy`

- **Implementation file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionCopy.js`
- **Screen**: `CollectionNodeDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Copy Collection

#### `CollectionInitiateSaveButton`

- **Implementation file(s)**: `CollectionGroup/CollectionInitiateSaveButton.js`
- **Screen**: `InitiateCollectionIntoWorkflow (InitiateItem)` (BusinessActionWithWebUIBindButton) — Save
- **Screen**: `InitiateOtherProductCollection (InitiateItem)` (BusinessActionWithWebUIBindButton) — Save

#### `CollectionSaveAction`

- **Implementation file(s)**: `CollectionGroup/CollectionUpsertGroup/CollectionSaveAction.js`
- **Screen**: `CollectionNodeDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `CollectionValidFromPopulate`

- **Implementation file(s)**: `CollectionGroup/CollectionValidFromPopulate.js`
- **Screen**: `CollectionNodeDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Populate Dates

#### `CopyPackageNameToTitle`

- **Implementation file(s)**: `PackageGroup/CopyPackageNameToTitle.js`
- **Screen**: `MultiJournalNodeDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `CreateIssuesFromVolume`

- **Implementation file(s)**: — (no matching .js/.mjs file found in repo)
- **Screen**: `ManualNoOfIssueCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Create Issues

#### `CreatePubYearVolumeButton`

- **Implementation file(s)**: — (no matching .js/.mjs file found in repo)
- **Screen**: `ManualPublicationYearCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Next Step

#### `IssueAttributesOnSaveGeneration`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueAttributesOnSaveGeneration.js`
- **Screen**: `DigitalIssueNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Generate Unique Attributes
- **Screen**: `PrintIssueNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Generate Unique Attributes

#### `IssueCopy`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueCopy.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Copy Issue

#### `IssueCreationFinishButton`

- **Implementation file(s)**: `IssuesGroup/IssuesNavegationGroup/IssueCreationFinishButton.js`
- **Screen**: `IssuesCreationMainScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Create Issues and Finish Process

#### `IssueDelete`

- **Implementation file(s)**: `IssuesGroup/IssuesDeleteGroup/IssueDelete.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Delete Issues
- **Screen**: `IssueWorkflowMediaTaskList (TaskList)` (BusinessActionWithWebUIBindToolBar) — Delete Issue(s)

#### `IssueDeleteBoth`

- **Implementation file(s)**: `IssuesGroup/IssuesDeleteGroup/IssueDeleteBoth.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Delete Issues

#### `IssueMergeCreation`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueMergeCreation.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Merge Issues

#### `IssueMergeCreationWithCopyToOnline`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueMergeCreationWithCopyToOnline.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Merge Issues

#### `IssuePubSequenceUpdate`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/IssuePubSequenceUpdate.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Update Publication Sequence

#### `IssueStatusMassUpdate`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdate.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Update Issue Status

#### `IssueStatusMassUpdateBoth`

- **Implementation file(s)**: `IssuesGroup/IssuesUpsertGroup/IssueStatusMassUpdateBoth.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Update Issue Status

#### `Journal_WF_Save_Button`

- **Implementation file(s)**: `JournalWorkflowGroup/Journal_WF_Save_Button.js`
- **Screen**: `InitiateJournalCreationScreen2 (InitiateItem)` (BusinessActionWithWebUIBindButton) — Save

#### `JournalHistoryApprove`

- **Implementation file(s)**: `JournalHistoryGroup/JournalHistoryApprove.js`
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Save and Approve Journal History

#### `JournalHistoryAttributeGenerationButton`

- **Implementation file(s)**: `JournalHistoryGroup/JournalHistoryAttributeGenerationButton.js`
- **Screen**: `JournalHistoryDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Generate Attributes

#### `JournalHistorySaveButton`

- **Implementation file(s)**: `JournalHistoryGroup/JournalHistorySaveButton.js`
- **Screen**: `JournalHistoryDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `JournalHistorySend`

- **Implementation file(s)**: `JournalHistoryGroup/JournalHistorySend.js`
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Send Journal History

#### `JournalMediaSaveAction`

- **Implementation file(s)**: `JournalMediaGroup/JournalMediaWorkflowGroup/JournalMediaSaveAction.js`
- **Screen**: `DigitalJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save
- **Screen**: `PrintJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `JournalSaveAction`

- **Implementation file(s)**: `JournalWorkflowGroup/JournalSaveAction.js`
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `MassCreateStandardCollections`

- **Implementation file(s)**: `CollectionGroup/CollectionUpsertGroup/MassCreateStandardCollections.js`
- **Screen**: `JournalCollectionsSearchScreen (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Mass Create Standard Collections
- **Screen**: `MassCreateStandardCollections (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Mass Create ST Collections

#### `MultiJournalWFSaveButton`

- **Implementation file(s)**: `PackageGroup/MultiJournalWFSaveButton.js`
- **Screen**: `InitiateMJPackageCreationScreen (InitiateItem)` (BusinessActionWithWebUIBindButton) — Save

#### `NavigateAwayFromIssueCreationScreen`

- **Implementation file(s)**: `IssuesGroup/IssuesNavegationGroup/NavigateAwayFromIssueCreationScreen.js`
- **Screen**: `IssuesCreationMainScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Cancel

#### `NavigateAwayFromPubReannouncement`

- **Implementation file(s)**: `ReannouncementGroup/NavigateAwayFromPubReannouncement.js`
- **Screen**: `ReannouncementPubYearScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Cancel

#### `NavigateAwayFromPubYearCreation`

- **Implementation file(s)**: `PubYearGroup/PubYearNavegationGroup/NavigateAwayFromPubYearCreation.js`
- **Screen**: `ManualPublicationYearCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Cancel
- **Screen**: `PublicationYearCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Cancel

#### `NavigateAwayFromVolumeCreationScreen`

- **Implementation file(s)**: `VolumesGroup/VolumesNavegationGroup/NavigateAwayFromVolumeCreationScreen.js`
- **Screen**: `VolumesCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Cancel

#### `NavigateToPubYearCreationScreen`

- **Implementation file(s)**: `PubYearGroup/PubYearNavegationGroup/NavigateToPubYearCreationScreen.js`
- **Screen**: `JournalMediaChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process

#### `NavigateToPubYearOnWFCreationScreen`

- **Implementation file(s)**: `PubYearGroup/PubYearWorkFlowGroup/NavigateToPubYearOnWFCreationScreen.js`
- **Screen**: `JournalWorkflowReadyForPubYearTaskList (TaskList)` (BusinessActionWithWebUIBindToolBar) — Publication Year/Volumes/Issues Creation Process

#### `NavigateToReannouncementByIssuesScreen`

- **Implementation file(s)**: `ReannouncementGroup/NavigateToReannouncementByIssuesScreen.js`
- **Screen**: `ReannouncementPubYearByVolumesSubScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Reannounce Specific Issues

#### `OtherProductCollectionSaveAction`

- **Implementation file(s)**: `OtherProductCollectionRules/OtherProductCollectionSaveAction.js`
- **Screen**: `OtherProductCollectionNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `OtherProductInitiateSaveButton`

- **Implementation file(s)**: `OtherProducts/OtherProductsNavegation/OtherProductInitiateSaveButton.js`
- **Screen**: `InitiateOtherProductWFScreen (InitiateItem)` (BusinessActionWithWebUIBindButton) — Search

#### `OtherProductsSaveButton`

- **Implementation file(s)**: `OtherProducts/OtherProductsSaveButton.js`
- **Screen**: `OtherProductsNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `PartnerJournalSaveAction`

- **Implementation file(s)**: `PartnerJournalsGroup/PartnerJournalSaveAction.js`
- **Screen**: `PartnerJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Save

#### `PublicationYearCreationFinishButton`

- **Implementation file(s)**: `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationFinishButton.js`
- **Screen**: `PublicationYearCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Create Publication Year and Finish Process

#### `PublicationYearCreationNextButton`

- **Implementation file(s)**: `PubYearGroup/PubYearNavegationGroup/PublicationYearCreationNextButton.js`
- **Screen**: `PublicationYearCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Create Publication Year and Continue with Volume Creation

#### `PublicationYearDelete`

- **Implementation file(s)**: `PubYearGroup/PublicationYearDelete.js`
- **Screen**: `JournalMediaChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Delete Publication Years

#### `PubYearForCopyToOnlineCreationNextButton`

- **Implementation file(s)**: `PubYearGroup/PubYearNavegationGroup/PubYearForCopyToOnlineCreationNextButton.js`
- **Screen**: `PublicationYearCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Create Publication Year and Continue with Volume Creation

#### `ReannounceFullPubYear`

- **Implementation file(s)**: `ReannouncementGroup/ReannounceFullPubYear.js`
- **Screen**: `ReannouncementPubYearScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Reannounce All

#### `ReannouncePubYearIssues`

- **Implementation file(s)**: `ReannouncementGroup/ReannouncePubYearIssues.js`
- **Screen**: `ReannouncementPubYearByIssuesSubScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Reannounce Selection

#### `ReannouncePubYearVolumes`

- **Implementation file(s)**: `ReannouncementGroup/ReannouncePubYearVolumes.js`
- **Screen**: `ReannouncementPubYearByVolumesSubScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Reannounce Selection

#### `ReSendIssuesToSap`

- **Implementation file(s)**: `IssuesGroup/IssuesWorkFlowGroup/ReSendIssuesToSap.js`
- **Screen**: `DisplayVolumeChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Send to SAP
- **Screen**: `JPCMSAdvancedSearchScreen (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Send

#### `Send_Journal_Transition_Refs`

- **Implementation file(s)**: `Actions/Send_Journal_Transition_Refs.js`
- **Screen**: `JournalHistoryDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Send Referenced History
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindToolBar) — Send Referenced Journal

#### `SendJournal`

- **Implementation file(s)**: `JournalWorkflowGroup/SendJournal.js`
- **Screen**: `Journals Search Screen (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Send
- **Screen**: `JournalsEditorialDataReportScreen (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Send
- **Screen**: `JournalsEditorialReportsSearchScreen (AdvancedSearchScreen)` (BusinessActionWithWebUIBindToolBar) — Send

#### `Test_Trigger_Rule_Update_withMessage`

- **Implementation file(s)**: `Integrations/Test_Trigger_Rule_Update_withMessage.js`
- **Screen**: `BackfilesDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `CollectionNodeDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `DigitalIssueNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `DigitalJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `JournalHistoryDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `JournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `MultiJournalNodeDetailsScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `MultiMediaPackageNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `OtherProductCollectionNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `OtherProductsNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `PartnerJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `PrintIssueNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send
- **Screen**: `PrintJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Send

#### `UpdateDigitalISSNKey`

- **Implementation file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/UpdateDigitalISSNKey.js`
- **Screen**: `DigitalJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Update ISSN

#### `UpdatePrintISSNKey`

- **Implementation file(s)**: `JournalMediaGroup/JournalMediaUpsertGroup/UpdatePrintISSNKey.js`
- **Screen**: `PrintJournalNodeDetails (NodeDetails)` (BusinessActionWithWebUIBindButton) — Update ISSN

#### `VolumeCopyToOnline`

- **Implementation file(s)**: `VolumesGroup/VolumesUpsertGroup/VolumeCopyToOnline.js`
- **Screen**: `DisplayPubYearChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Copy to Online Volumes

#### `VolumeCreationFinishButton`

- **Implementation file(s)**: `VolumesGroup/VolumesNavegationGroup/VolumeCreationFinishButton.js`
- **Screen**: `VolumesCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Create Volumes and Finish Process

#### `VolumeCreationNextButton`

- **Implementation file(s)**: `VolumesGroup/VolumesNavegationGroup/VolumeCreationNextButton.js`
- **Screen**: `VolumesCreationScreen (NodeDetails)` (BusinessActionWithWebUIBindButton) — Create Volumes and Continue with Issue Creation

#### `VolumeDelete`

- **Implementation file(s)**: `VolumesGroup/VolumesDeleteGroup/VolumeDelete.js`
- **Screen**: `DisplayPubYearChildrenScreen (Children)` (BusinessActionWithWebUIBindToolBar) — Delete Volumes
