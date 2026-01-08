# Functional Description: Journal History Auto Creation

## Overview
This document describes the STIBO STEP business rule implemented in `JournalHistoryGroup/JournalHistoryAutoCreation.js`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.

## Business Intent and Rationale
### Primary Business Problem
This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.

### Business Objectives
- **Operational efficiency**: reduce repeated manual actions by automating common steps
- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible
- **Consistency**: apply the same rules the same way in every execution context
- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values

## Context
- **Rule ID**: `JournalHistoryAutoCreation`
- **Rule type**: `BusinessAction`
- **Setup group(s)**: `JournalHistoryGroup`
- **Scope**: `Global`
- **Valid object types**: `JournalPrintMedia`, `JournalDigitalMedia`
- **All object types valid**: `false`
- **Run privileged**: `false`
- **On approve**: `Never`

## Object Hierarchy
```
NODE -> parentNode
```


## Components
### Plugin Definitions
- Operation (JavaScriptBusinessActionWithBinds)

### Preconditions
_None detected_

### Operations
- `operation0`

## Inputs
### Bound Inputs (Binds)
- **Operation**: `LOG` (LoggerBindContract)
- **Operation**: `NODE` (CurrentObjectBindContract)
- **Operation**: `MANAGER` (ManagerBindContract)
- **Operation**: `OBJJH` (ObjectTypeBindContract)
- **Operation**: `AUTOCLASSRULE` (BusinessActionBindContract)

### Attributes Referenced (getValue)
- `HistoryOrigin`
- `JournalGroupCode`
- `JournalHistoryAccessType`
- `JournalHistoryCopyright`
- `JournalHistoryIdentifiersDoi`
- `JournalHistoryISSNOnline`
- `JournalHistoryISSNPrint`
- `JournalHistoryJournalCode`
- `JournalHistoryPrimaryUrl`
- `JournalHistorySequenceNumber`
- `JournalHistoryWolCode`
- `JournalMediaCode`
- `ProductAbbreviatedTitle`
- `ProductCopyrightLine`
- `ProductDoi`
- `ProductIssn`
- `ProductRenewalSubscriptionType`
- `ProductShortTitle`
- `ProductSortTitle`
- `ProductTitle`
- `ProductUrl`
- `SoftDelete`

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
- **Source file**: `JournalHistoryGroup/JournalHistoryAutoCreation.js`
- **Exports detected**: `operation0`

## Notes and Considerations
- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.
- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.
