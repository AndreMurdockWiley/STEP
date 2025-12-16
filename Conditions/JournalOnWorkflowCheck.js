/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalOnWorkflowCheck",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Journal On Workflow Check",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG) {
var nodeObjectTypeId = NODE.getObjectType().getID();
var journalMedia = "";
var workflowInstance = "";

LOG.info("ObjectType " + nodeObjectTypeId);

switch(true){
	case (nodeObjectTypeId == "Journal"):
		journalMedia = NODE.getChildren().get(0);
		break;
	case (nodeObjectTypeId == "JournalPrintMedia" || nodeObjectTypeId == "JournalDigitalMedia" ):
		journalMedia = NODE;
		break;
	case (nodeObjectTypeId == "JournalDigitalPublicationYear" || nodeObjectTypeId == "JournalPrintPublicationYear"):
		journalMedia = NODE.getParent();
		break;
}

workflowInstance = journalMedia.getWorkflowInstanceByID("JournalCreationWFV3Backup");

if(workflowInstance){
	return false;
}
return true;

}