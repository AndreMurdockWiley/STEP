# Functional Description: Inbound eCore

## Overview
This document describes the STIBO STEP business rule implemented in `Integrations/BR_I_eCore.js`. It is generated from the embedded business rule metadata and the JavaScript implementation, following the same overall documentation shape as the Ad Hoc Issue Creation template.

## Business Intent and Rationale
### Primary Business Problem
This rule automates and/or validates a specific step in the master data workflow. It is intended to reduce manual effort and enforce consistent data quality and integration-safe behavior.

### Business Objectives
- **Operational efficiency**: reduce repeated manual actions by automating common steps
- **Data integrity**: validate required attributes and prevent conflicting/duplicate data where possible
- **Consistency**: apply the same rules the same way in every execution context
- **Integration safety**: support reliable downstream integrations by standardizing identifiers/values

## Context
- **Rule ID**: `BR_I_eCore`
- **Rule type**: `BusinessAction`
- **Setup group(s)**: `Integrations`
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
- **Operation**: `manager` (ManagerBindContract)
- **Operation**: `inboundMessage` (InboundBusinessProcessorImporterSourceBindContract)
- **Operation**: `log` (LoggerBindContract)
- **Operation**: `reportLogger` (InboundBusinessProcessorExecutionReportLoggerBindContract)
- **Operation**: `node` (CurrentObjectBindContract)
- **Operation**: `non_journal` (ObjectTypeBindContract)
- **Operation**: `ProductISBN13` (AttributeBindContract)

### Attributes Referenced (getValue)
- `Error_Description`
- `Error_ISBN13`
- `Error_JSON_Load`
- `Error_ProductFullTitle`
- `Error_Timestamp`
- `Journals_Trigger_Attribute`
- `ProducFirstEditor`
- `ProductActivated`
- `ProductBundleCode`
- `ProductBundleCodeID`
- `ProductBundleGroup`
- `ProductBundleGroupID`
- `ProductBundleSubscriptionType`
- `ProductContentCategory`
- `ProductContentEndDate`
- `ProductContentEndDateCentury`
- `ProductContentPublicationType`
- `ProductContentStartDate`
- `ProductContentStartDateCentury`
- `ProductCopyrightYear`
- `ProductCostCenter`
- `ProductDateMonographPublishedOnline`
- `ProductDoi`
- `ProductDownloadStatus`
- `ProductFinanceDivision`
- `ProductFinanceEntitlementPlatform`
- `ProductFinancePublicationType`
- `ProductFirstAuthor`
- `ProductFullTitle`
- `ProductImprint`
- `ProductIPOwningCompany`
- `ProductIsbn`
- `ProductIsbn13`
- `ProductIsTaxable`
- `ProductMediumCode`
- `ProductMonographEdition`
- `ProductMonographVolume`
- `ProductOclcReferenceNumber`
- `ProductOneSourceTaxCode`
- `ProductOnlineIdentifier`
- `ProductParentPublicationTitleID`
- `ProductPrimaryProcessCode`
- `ProductProcessStatusCode`
- `ProductProductGroup`
- `ProductProductLine`
- `ProductProductTypeCode`
- `ProductProfitCenter`
- `ProductPublicationDate`
- `ProductSAPMaterialNumber`
- `ProductSendToWispers`
- `ProductSubMediumCode`
- `ProductSubscriptionTypeID`
- `ProductUrl`
- `SAPExternalMaterialGroup`
- `SubjectCode`
- `SubjectGroup`
- `SubjectLevel2`
- `SubjectOnlineCode`

### Keys Referenced (getObjectByKey)
_None detected_

### LOV IDs Referenced (getListOfValuesValueByID)
_None detected_

## Outputs and Side Effects (Heuristic)
- **Creates/updates objects**: look for calls like `createProduct`, `setSimpleValue`, `startWorkflowByID`, `delete().approve()` in the implementation.
- **User feedback**: if present, the rule may call `UI.showAlert(...)` / `ui.showAlert(...)` or navigate screens.

## Key Dependencies
- `genericFunctions`: `GenericFunctions`
- `otherProductsLibrary`: `OtherProductsFunctions`

## Source Implementation
- **Source file**: `Integrations/BR_I_eCore.js`
- **Exports detected**: `operation0`

## Notes and Considerations
- This document is **auto-generated** to match a consistent template across all rules; review and refine the narrative sections where deeper business context is required.
- Where the rule relies on external libraries (listed above), the full behavior may be distributed across multiple scripts.
