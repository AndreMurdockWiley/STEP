/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_ValidateHistoryOrigin",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_ValidateHistoryOrigin",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts" ],
  "allObjectTypesValid" : false,
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
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,UI) {
var nodeorigin = node.getValue("HistoryOrigin").getSimpleValue();
var webUINavigation = "notfound";
var refType = manager.getReferenceTypeHome().getReferenceTypeByID("HISTORY_TO_HISTORY_TRANSITION");
var references = node.getReferences(refType).toArray();
if(nodeorigin == "Web UI Navigation"){
	if(references.length!=0) {
		UI.showAlert("Error","To update History origin as Web UI Navigation, Please follow below steps\n 1. Update History origin to regular workflow and click save\n 2. Remove all History transition reference","");
	}
}else if(nodeorigin == "Regular Workflow"){
for (var j = 0; j < references.length; j++) {
	var HistoryOrigin = references[j].getTarget().getValue("HistoryOrigin").getSimpleValue();
	if(HistoryOrigin == "Web UI Navigation"){
		webUINavigation = "found";
		UI.showAlert("Error","Kindly update/remove History products having History origin as Web UI Navigation to save/submit","");
	}
}
}
}