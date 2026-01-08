# Functional Description: Collection Copy

## Overview
This document describes the STIBO STEP business rule implemented in `CollectionGroup/CollectionUpsertGroup/CollectionCopy.js`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.

## Business Intent and Rationale
### Primary Business Problem
This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.

### Business Objectives
- **Operational efficiency**: reduce repeated manual actions by automating common steps
- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible
- **Consistency**: apply the same rules the same way in every execution context
- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values

## Context
- **Rule ID**: `CollectionCopy`
- **Rule type**: `BusinessAction`
- **Setup group(s)**: `CollectionUpsertGroup`
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
- Precondition (JavaScriptBusinessConditionWithBinds)

### Preconditions
- `precondition0`

### Operations
- `operation0`

## Inputs
### Bound Inputs (Binds)
- **Operation**: `NODE` (CurrentObjectBindContract)
- **Operation**: `UI` (WebUiContextBind)
- **Operation**: `collectionYear` (AttributeValidatedContextParameterStringBinding) → Attribute: `CollectionYear`
- **Precondition**: `node` (CurrentObjectBindContract)
- **Precondition**: `manager` (ManagerBindContract)
- **Precondition**: `IssueType_LOV` (ListOfValuesBindContract)

### Attributes Referenced (getValue)
- `IssueSAPMaterialNumber`
- `IssueType`
- `IssueVolumeNumber`
- `JournalMediaCode`

### Keys Referenced (getObjectByKey)
- `IssueSAPMaterialIdKey`

### LOV IDs Referenced (getListOfValuesValueByID)
- `ST`
- `SU`

## Outputs and Side Effects (Heuristic)
- **Creates/updates objects**: look for calls like `createProduct`, `setSimpleValue`, `startWorkflowByID`, `delete().approve()` in the implementation.
- **User feedback**: if present, the rule may call `UI.showAlert(...)` / `ui.showAlert(...)` or navigate screens.

## Key Dependencies
- `collectionLibrary`: `CollectionFunctions`

## Source Implementation
- **Source file**: `CollectionGroup/CollectionUpsertGroup/CollectionCopy.js`
- **Exports detected**: `operation0`, `precondition0`

## Notes and Considerations
- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.
- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.
