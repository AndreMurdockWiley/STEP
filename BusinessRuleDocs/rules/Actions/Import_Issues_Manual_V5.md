# Functional Description: Import Issues Manual_V5

## Overview
This document describes the STIBO STEP business rule implemented in `Actions/Import_Issues_Manual_V5.js`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.

## Business Intent and Rationale
### Primary Business Problem
This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.

### Business Objectives
- **Operational efficiency**: reduce repeated manual actions by automating common steps
- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible
- **Consistency**: apply the same rules the same way in every execution context
- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values

## Context
- **Rule ID**: `Import_Issues_Manual_V5`
- **Rule type**: `BusinessAction`
- **Setup group(s)**: `Actions`
- **Scope**: `Global`
- **Valid object types**: `JournalPrintMedia`, `JournalDigitalMedia`
- **All object types valid**: `false`
- **Run privileged**: `true`
- **On approve**: `Never`

## Object Hierarchy
_Not inferred from code (no simple `getParent()` chain detected)._

## Components
### Plugin Definitions
- Operation (JavaScriptBusinessActionWithBinds)

### Preconditions
_None detected_

### Operations
- `operation0`

## Inputs
### Bound Inputs (Binds)
- **Operation**: `node` (CurrentObjectBindContract)
- **Operation**: `manager` (ManagerBindContract)
- **Operation**: `log` (LoggerBindContract)
- **Operation**: `objJDV` (ObjectTypeBindContract)
- **Operation**: `objJPV` (ObjectTypeBindContract)
- **Operation**: `objJDPY` (ObjectTypeBindContract)
- **Operation**: `objJPPY` (ObjectTypeBindContract)
- **Operation**: `objJDI` (ObjectTypeBindContract)
- **Operation**: `objJPI` (ObjectTypeBindContract)

### Attributes Referenced (getValue)
- `IDLIssueDOI`
- `IDLIssueFromIssueNumber`
- `IDLIssueFromVolume`
- `IDLIssueFurtherDescription`
- `IDLIssueId`
- `IDLIssueJpcmsId`
- `IDLIssueProductionIdentifier`
- `IDLIssuePublicationType`
- `IDLIssuePubSequence`
- `IDLIssueReportingYear`
- `IDLIssueSapMaterialNumber`
- `IDLIssueStatus`
- `IDLIssueSupplementNo`
- `IDLIssueTitle`
- `IDLIssueToIssueNumber`
- `IDLIssueType`
- `IDLIssueVolumeNumber`
- `IDLJournalProductionIssueCode`
- `IDLProductPublicationYear`
- `IDLVolumeGroupFtePricingForYear`
- `IDLVolumeGroupScheduledNumberOfIssues`
- `IssueDoi`
- `IssueFromIssueNumber`
- `IssueFromVolume`
- `IssueFurtherDescription`
- `IssueId`
- `IssueJpcmsId`
- `IssueNumber`
- `IssueProductionIdentifier`
- `IssuePublicationType`
- `IssuePubSequence`
- `IssueReportingYear`
- `IssueSAPMaterialNumber`
- `IssueStatus`
- `IssueSupplementNo`
- `IssueTitle`
- `IssueToIssueNumber`
- `IssueType`
- `IssueVolumeNumber`
- `JANISIssueRunDate`
- `JANISProductOriginalPublicationDate`
- `JANISProductRevisedPublicationDate`
- `JournalMediaCode`
- `JournalProductionIssueCode`
- `ProductPublicationYear`
- `ScheduledNoOfIssuesYear`
- `VolumeGroupFtePricingForYear`

### Keys Referenced (getObjectByKey)
_None detected_

### LOV IDs Referenced (getListOfValuesValueByID)
_None detected_

## Outputs and Side Effects (Heuristic)
- **Creates/updates objects**: look for calls like `createProduct`, `setSimpleValue`, `startWorkflowByID`, `delete().approve()` in the implementation.
- **User feedback**: if present, the rule may call `UI.showAlert(...)` / `ui.showAlert(...)` or navigate screens.

## Key Dependencies
_None specified_

## Source Implementation
- **Source file**: `Actions/Import_Issues_Manual_V5.js`
- **Exports detected**: `operation0`

## Notes and Considerations
- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.
- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.
