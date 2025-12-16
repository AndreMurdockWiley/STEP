/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateTakeOnAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "PopulateTakeOnAlert",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
var JournalTakeOn = node.getValue("JournalTakeOn").getSimpleValue(); 
if(JournalTakeOn){
	if(JournalTakeOn=='y' || JournalTakeOn=='Y'){
		node.getValue("JournalTakeOn").setSimpleValue("Y"); 
	}else if(JournalTakeOn=='n'|| JournalTakeOn=='N'){
		node.getValue("JournalTakeOn").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Journal Take On should be either 'Y' or 'N' or 'Blank'");
}
else {
	//UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}