/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Journals_Add_Media_To_Workflow",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "Journals_Add_Media_To_Workflow",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "stepMan",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,logger,stepMan) {
var myChildren = node.getChildren();
var workflowID = "JournalCreationWFV3Backup";
var state1 = "State-2";
var transition1 = "Media_To_Complete";
var workHome = stepMan.getWorkflowHome().getWorkflowByID(workflowID);

for(var i=0; i<myChildren.size();i++) {
	//caught for each fail, need to figure out if one fails all should fail or single child missing is ok
	try {
		logger.info("STARTING WORKFLOW");
		var myWorkInstance = workHome.start(myChildren.get(i), "Started");
		logger.info("GOT INSTANCE: " + myWorkInstance);
		var myTask = myWorkInstance.getTaskByID(state1);
		logger.info("GOT TASK: " + myTask);
		myTask.triggerLaterByID(transition1, "Auto Updated To New State");
	} catch (e) {
		logger.info("THIS FAILED TO GET INTO WORKFLOW: " + e);
	}
}

}