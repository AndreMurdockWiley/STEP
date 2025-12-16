/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "test_delete",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesDeleteGroup" ],
  "name" : "test_delete",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,MANAGER,issueLibrary) {
var selectedNodes = UI.getSelection();
var issueOK = true;
var severity = "ERROR";
var headline = "";
var body = "The issue has JPCMS and Original Publication Date populated";

for (var i = 0; i < selectedNodes.size(); i++){
	if(issueLibrary.issueDeleteCheck(selectedNodes.get(i))){
		issueLibrary.deleteIssue(selectedNodes.get(i));
	} else {
		headline = "Issue " + selectedNodes.get(i).getName() + " can't be deleted";
		UI.showAlert(severity,headline, body);
	}
	
}
}