# Functional Description: Feed Trigger Action

## Overview
This document describes the STIBO STEP business rule implemented in `Integrations/Feed_Trigger_Action.js`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.

## Business Intent and Rationale
### Primary Business Problem
This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.

### Business Objectives
- **Operational efficiency**: reduce repeated manual actions by automating common steps
- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible
- **Consistency**: apply the same rules the same way in every execution context
- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values

## Context
- **Rule ID**: `Feed_Trigger_Action`
- **Rule type**: `BusinessAction`
- **Setup group(s)**: `Integrations`
- **Scope**: `Global`
- **Valid object types**: _Not specified_
- **All object types valid**: `true`
- **Run privileged**: `true`
- **On approve**: `Never`

## Object Hierarchy
_Not inferred from code (no simple `getParent()` chain detected)._

## Components
### Plugin Definitions
- Operation (JavaScriptBusinessActionWithBinds)
- Precondition (JavaScriptBusinessConditionWithBinds)

### Preconditions
- `precondition0`

### Operations
- `operation0`

## Inputs
### Bound Inputs (Binds)
- **Operation**: `node` (CurrentObjectBindContract)
- **Operation**: `log` (LoggerBindContract)
- **Operation**: `manager` (ManagerBindContract)
- **Operation**: `sourceRefType` (ReferenceTypeBindContract)
- **Operation**: `journalData` (EventQueueBinding)
- **Operation**: `journalDataKafka` (EventQueueBinding)
- **Operation**: `journalDataStrategic` (EventQueueBinding)
- **Operation**: `journalHistoryKafka` (EventQueueBinding)
- **Operation**: `journalHistory` (EventQueueBinding)
- **Precondition**: `node` (CurrentObjectBindContract)
- **Precondition**: `mgr` (ManagerBindContract)
- **Precondition**: `log` (LoggerBindContract)

### Attributes Referenced (getValue)
- `CollectionCategory`
- `JournalIssueTemplateCreation`
- `MessageStatus`
- `OtherProductCollectionType`
- `ProductTitle`

### Keys Referenced (getObjectByKey)
_None detected_

### LOV IDs Referenced (getListOfValuesValueByID)
_None detected_

## Outputs and Side Effects (Heuristic)
- **Creates/updates objects**: look for calls like `createProduct`, `setSimpleValue`, `startWorkflowByID`, `delete().approve()` in the implementation.
- **User feedback**: if present, the rule may call `UI.showAlert(...)` / `ui.showAlert(...)` or navigate screens.

## Key Dependencies
- `myFunc`: `Approve_And_Send_Object`
- `genericlib`: `GenericFunctions`

## Source Implementation
- **Source file**: `Integrations/Feed_Trigger_Action.js`
- **Exports detected**: `operation0`, `precondition0`

## Notes and Considerations
- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.
- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.
