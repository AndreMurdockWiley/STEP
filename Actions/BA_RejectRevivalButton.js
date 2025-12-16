/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_RejectRevivalButton",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Reject Revival Button",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
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
    "contract" : "WebUiContextBind",
    "alias" : "webUI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,webUI) {
var wfInst = node.getWorkflowInstanceByID("ReviveSoftDeleteWorkflow");
if(wfInst)
{
	var task = wfInst.getTaskByID("Review");
	if(task)
	{
		if(node.getValue("SoftDelete").getSimpleValue()=="Yes")
		{
			task.triggerByID("Cancel","");
			webUI.navigate("homepage",node);
		}
		else
		{
			webUI.showAlert("ERROR","Please set Soft Delete as 'Yes' to reject Revival!");
		}
	}
}
}