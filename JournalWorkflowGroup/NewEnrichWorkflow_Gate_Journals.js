/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "NewEnrichWorkflow_Gate_Journals",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "NewEnrichWorkflow_Gate_Journals",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "BulkUpdateTriggerStateFlowEvent",
  "parameters" : [ {
    "id" : "currentStateID",
    "type" : "java.lang.String",
    "value" : "State-2"
  }, {
    "id" : "eventID",
    "type" : "java.lang.String",
    "value" : "Update_1"
  }, {
    "id" : "processNote",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "stateFlowID",
    "type" : "java.lang.String",
    "value" : "JournalCreationWFV3Backup"
  } ],
  "pluginType" : "Operation"
}
*/
