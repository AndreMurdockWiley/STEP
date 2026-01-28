## Web UI → Business Action call map

Source: `WebUI.xml`

- **Total BusinessAction call-sites found**: 103
- **Unique BusinessActions**: 76
- **Screens containing BusinessActions**: 47
- **Workflow mappings found (ScreenMapping/WorkflowCondition)**: 24
- **Workflow references found (components with `Workflow` parameter)**: 9

### Workflow sub-pages

- **Workflows index**: `workflows/INDEX.md`
- **Screens index**: `screens/INDEX.md`

### Calls grouped by screen

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

### Calls grouped by BusinessAction

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
