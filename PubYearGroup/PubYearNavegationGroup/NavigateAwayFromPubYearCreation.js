/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "NavigateAwayFromPubYearCreation",
  "type" : "BusinessAction",
  "setupGroups" : [ "PubYearNavegationGroup" ],
  "name" : "Navigate Away From Pub Year Creation Screen",
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
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,UI,log) {
UI.showAlert("INFO", "Publication Year Creation Process cancelled.");
if(node.getObjectType().getID() == "JournalPrintMedia"){
	UI.navigate("PrintJournalNodeDetails", node);
}
else if(node.getObjectType().getID() == "JournalDigitalMedia"){
	UI.navigate("DigitalJournalNodeDetails", node);
}
}