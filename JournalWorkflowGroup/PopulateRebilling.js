/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateRebilling",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Populate Rebilling Web UI Alert",
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
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,NODE) {
var showMessage = false; 
var PrintOnlineBoth = NODE.getValue("ProductMediaType").getSimpleValue(); 
var currentSubType = NODE.getValue("ProductRenewalSubscriptionType").getSimpleValue();
var productActivated = NODE.getValue("ProductActivated").getSimpleValue();

if(currentSubType == "Open Access" && productActivated == "Activated"){
	var currentRevision = NODE.getRevision();
	var mostRecentRevision = currentRevision.getPredecessor();
	if(mostRecentRevision){
		var mostRecentSubType = mostRecentRevision.getNode().getValue("ProductRenewalSubscriptionType").getSimpleValue();
		if(mostRecentSubType != "Open Access"){
			showMessage = true;
		}
	} else {
		showMessage = true;
	}
}
if(showMessage && PrintOnlineBoth != "Print"){
	UI.showAlert("WARNING", "Subscription Type is changed to OA. Review Rebilling Tab.");
}
else {
	UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}