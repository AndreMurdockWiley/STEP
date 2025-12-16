/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateFreeJournalAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "PopulateFreeJournalAlert",
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
var JournalFreeJournal = node.getValue("JournalFreeJournal").getSimpleValue(); 
if(JournalFreeJournal){
	if(JournalFreeJournal=='y' || JournalFreeJournal=='Y'){
		node.getValue("JournalFreeJournal").setSimpleValue("Y"); 
	}else if(JournalFreeJournal=='n'|| JournalFreeJournal=='N'){
		node.getValue("JournalFreeJournal").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Free Journal should be either 'Y' or 'N' or 'Blank'");
}
else {
	//UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}