/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "NewEnrichWorkflow_Gate_Media",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "NewEnrichWorkflow_Gate_Media",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "value" : "Media_To_Complete"
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
