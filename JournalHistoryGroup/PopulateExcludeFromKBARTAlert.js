/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateExcludeFromKBARTAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "Populate Exclude From KBART Alert",
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
var JournalHistoryExcludefromKbart = node.getValue("JournalHistoryExcludefromKbart").getSimpleValue(); 
if(JournalHistoryExcludefromKbart){
	if(JournalHistoryExcludefromKbart=='y' || JournalHistoryExcludefromKbart=='Y'){
		node.getValue("JournalHistoryExcludefromKbart").setSimpleValue("Y"); 
	}else if(JournalHistoryExcludefromKbart=='n'|| JournalHistoryExcludefromKbart=='N'){
		node.getValue("JournalHistoryExcludefromKbart").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Exclude from KBART should be either 'Y' or 'N' or 'Blank'");
}
else {
	//UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}