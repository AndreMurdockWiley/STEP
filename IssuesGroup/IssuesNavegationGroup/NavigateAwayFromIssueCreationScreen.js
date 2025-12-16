/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "NavigateAwayFromIssueCreationScreen",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesNavegationGroup" ],
  "name" : "Navigate Away From Issue Creation Screen",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
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
exports.operation0 = function (NODE,UI) {
UI.showAlert("INFO", "Volume Creation Process cancelled.");
if(NODE.getObjectType().getID() == "JournalPrintPublicationYear"){
	UI.navigate("PrintPublicationYearScreen", NODE);
}
else if(NODE.getObjectType().getID() == "JournalDigitalPublicationYear"){
	UI.navigate("DigitalPublicationYearScreen", NODE);
}
}