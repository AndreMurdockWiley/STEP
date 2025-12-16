/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "NavigateAwayFromPubReannouncement",
  "type" : "BusinessAction",
  "setupGroups" : [ "ReannouncementGroup" ],
  "name" : "Navigate Away From Pub Reannouncement",
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
UI.showAlert("INFO", "Publication Year Reannouncement Process cancelled.");
if(NODE.getParent().getObjectType().getID() == "JournalPrintMedia"){
	UI.navigate("PrintJournalNodeDetails", NODE.getParent());
} else if(NODE.getParent().getObjectType().getID() == "JournalDigitalMedia"){
	UI.navigate("DigitalJournalNodeDetails", NODE.getParent());
}
}