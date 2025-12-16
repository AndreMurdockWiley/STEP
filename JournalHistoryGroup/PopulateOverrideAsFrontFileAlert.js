/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateOverrideAsFrontFileAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "Populate Override As FrontFile Alert",
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
var JournalHistoryOverrideasFrontfile = node.getValue("JournalHistoryOverrideasFrontfile").getSimpleValue(); 
if(JournalHistoryOverrideasFrontfile){
	if(JournalHistoryOverrideasFrontfile=='y' || JournalHistoryOverrideasFrontfile=='Y'){
		node.getValue("JournalHistoryOverrideasFrontfile").setSimpleValue("Y"); 
	}else if(JournalHistoryOverrideasFrontfile=='n'|| JournalHistoryOverrideasFrontfile=='N'){
		node.getValue("JournalHistoryOverrideasFrontfile").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Override as Frontfile should be either 'Y' or 'N' or 'Blank'");
}
else {
	UI.showAlert("ACKNOWLEDGMENT", "Journal History Saved!");
}

}