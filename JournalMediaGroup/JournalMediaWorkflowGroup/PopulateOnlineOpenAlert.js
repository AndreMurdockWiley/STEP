/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateOnlineOpenAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "PopulateOnlineOpenAlert",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,node) {
var showMessage = false; 
var JournalOnlineOpen = node.getValue("JournalOnlineOpen").getSimpleValue(); 
if(JournalOnlineOpen){
	if(JournalOnlineOpen=='y' || JournalOnlineOpen=='Y'){
		node.getValue("JournalOnlineOpen").setSimpleValue("Y"); 
	}else if(JournalOnlineOpen=='n'|| JournalOnlineOpen=='N'){
		node.getValue("JournalOnlineOpen").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Online Open should be either 'Y' or 'N' or 'Blank'");
}
else {
	//UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}