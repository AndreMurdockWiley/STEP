# Functional Description: Publication Year Delete

## Overview
This document describes the STIBO STEP business rule implemented in `PubYearGroup/PublicationYearDelete.js`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.

## Business Intent and Rationale
### Primary Business Problem
This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.

### Business Objectives
- **Operational efficiency**: reduce repeated manual actions by automating common steps
- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible
- **Consistency**: apply the same rules the same way in every execution context
- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values

## Context
- **Rule ID**: `PublicationYearDelete`
- **Rule type**: `BusinessAction`
- **Setup group(s)**: `PubYearGroup`
- **Scope**: `Global`
- **Valid object types**: _Not specified_
- **All object types valid**: `true`
- **Run privileged**: `false`
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
- **Operation**: `UI` (WebUiContextBind)
- **Operation**: `YESNOLOV` (ListOfValuesBindContract)
- **Operation**: `mgr` (ManagerBindContract)
- **Operation**: `groupIssueOIEP` (EventQueueBinding)
- **Operation**: `groupIssueOIEPkafka` (EventQueueBinding)
- **Operation**: `logger` (LoggerBindContract)

### Attributes Referenced (getValue)
- `C_IssueDeletedDate`
- `C_IssueState`
- `C_LastUpdated`
- `C_MessageStatus`
- `IssueState`

### Keys Referenced (getObjectByKey)
_None detected_

### LOV IDs Referenced (getListOfValuesValueByID)
_None detected_

## Outputs and Side Effects (Heuristic)
- **Creates/updates objects**: look for calls like `createProduct`, `setSimpleValue`, `startWorkflowByID`, `delete().approve()` in the implementation.
- **User feedback**: if present, the rule may call `UI.showAlert(...)` / `ui.showAlert(...)` or navigate screens.

## Key Dependencies
- `pubLibrary`: `PublicationYearUtilityLibrary`
- `volumeLibrary`: `VolumeFunctions`
- `pubYearLibrary`: `PublicationYearFunctions`
- `issueLibrary`: `IssueFunctions`

## Source Implementation
- **Source file**: `PubYearGroup/PublicationYearDelete.js`
- **Exports detected**: `operation0`

## Notes and Considerations
- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.
- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.
