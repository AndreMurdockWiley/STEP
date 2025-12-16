/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Create_Journals_Transition",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Create Journals Transition",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "AutoClassificationJournals"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "Auto_Populate_Bundle_Code"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "SetAttributeValueBusinessAction",
  "parameters" : [ {
    "id" : "FromAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalGroupCode"
  }, {
    "id" : "FromWorkflow",
    "type" : "com.stibo.core.domain.state.unstable.stateflow.StateFlow",
    "value" : null
  }, {
    "id" : "FromWorkflowVariableName",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "TextValue",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "ToAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalProductCode"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "SetAttributeValueBusinessAction",
  "parameters" : [ {
    "id" : "FromAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalGroupCode"
  }, {
    "id" : "FromWorkflow",
    "type" : "com.stibo.core.domain.state.unstable.stateflow.StateFlow",
    "value" : null
  }, {
    "id" : "FromWorkflowVariableName",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "TextValue",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "ToAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalProductionCode"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "SetAttributeValueBusinessAction",
  "parameters" : [ {
    "id" : "FromAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalGroupCode"
  }, {
    "id" : "FromWorkflow",
    "type" : "com.stibo.core.domain.state.unstable.stateflow.StateFlow",
    "value" : null
  }, {
    "id" : "FromWorkflowVariableName",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "TextValue",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "ToAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalOnlineLibraryCode"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "PopulateJournalProductIdentifier"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "SetAttributeValueBusinessAction",
  "parameters" : [ {
    "id" : "FromAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "FromWorkflow",
    "type" : "com.stibo.core.domain.state.unstable.stateflow.StateFlow",
    "value" : null
  }, {
    "id" : "FromWorkflowVariableName",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "TextValue",
    "type" : "java.lang.String",
    "value" : "No"
  }, {
    "id" : "ToAttribute",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalInCurrentDatabaseModel"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "SetDefaultPublishingInitiatives"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "Populate_PrimaryPortfolio_Creation"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "Populate_HandlingEditorNameDisplay"
  } ],
  "pluginType" : "Operation"
}
*/
