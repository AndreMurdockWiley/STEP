# Functional Description: Issue Functions

## Overview
This document describes the STIBO STEP business rule implemented in `Libraries/IssueFunctions.js`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.

## Business Intent and Rationale
### Primary Business Problem
This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.

### Business Objectives
- **Operational efficiency**: reduce repeated manual actions by automating common steps
- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible
- **Consistency**: apply the same rules the same way in every execution context
- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values

## Context
- **Rule ID**: `IssueFunctions`
- **Rule type**: `BusinessLibrary`
- **Setup group(s)**: `Libraries`
- **Scope**: _Not specified_
- **Valid object types**: _Not specified_
- **All object types valid**: `false`
- **Run privileged**: `false`
- **On approve**: _Not specified_

## Object Hierarchy
_Not inferred from code (no simple `getParent()` chain detected)._

## Components
### Plugin Definitions
- Operation (JavaScriptBusinessLibrary)

### Preconditions
_None detected_

### Operations
_None detected_

## Inputs
### Bound Inputs (Binds)
_None detected_

### Attributes Referenced (getValue)
- `IssueEmlo`
- `IssueFromIssueNumber`
- `IssueFurtherDescription`
- `IssueId`
- `IssueJpcmsId`
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
- `JournalMediaCode`
- `ProductOriginalPublicationDate`
- `ProductPublicationYear`
- `ProductSAPMaterialNumber`
- `StartingPubSequenceMedia`

### Keys Referenced (getObjectByKey)
_None detected_

### LOV IDs Referenced (getListOfValuesValueByID)
_None detected_

## Outputs and Side Effects (Heuristic)
- **Creates/updates objects**: look for calls like `createProduct`, `setSimpleValue`, `startWorkflowByID`, `delete().approve()` in the implementation.
- **User feedback**: if present, the rule may call `UI.showAlert(...)` / `ui.showAlert(...)` or navigate screens.

## Key Dependencies
- `genericFunctions`: `GenericFunctions`

## Source Implementation
- **Source file**: `Libraries/IssueFunctions.js`
- **Exports detected**: `createIssue`, `mergeIssues`, `generateCommonIssueAttributes`, `generateTypeSpecificIssueAttributes`, `generateStandardIssueAttributes`, `generateSupplementIssueAttributes`, `generateMergeIssueAttributes`, `copyIssue`, `generateCopiedIssueAttributes`, `generateIssueUniqueAttributes`, `generateIssueDescription`, `issueCopyToOnline`, `findDigitalIssue`, `issueDeleteCheck`, `deleteIssue`, `issueMediaMaxPubSeq`, `issueRePubSequence`

## Notes and Considerations
- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.
- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.
