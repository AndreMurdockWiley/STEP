/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_CreateJournalHistoryAndReference",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Create Journal History and Reference",
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
    "contract" : "ManagerBindContract",
    "alias" : "step",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "webUI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,step,webUI) {
var selectedObject = webUI.getSelectedSetOfNodes().toArray();
var selectedObjectLength = selectedObject.length;
if(selectedObjectLength>1){
	webUI.showAlert("Error", "Please select only one Parent Folder at a time.", "");
}
else if(selectedObjectLength==1){
	var journalHistoryParentFolderObj = selectedObject[0];
	if(journalHistoryParentFolderObj.getObjectType().getID()=="JournalHistoryAtoZ"){
		var journalHistoryObj = journalHistoryParentFolderObj.createProduct(null,"JournalHistoryProducts");
		node.createReference(journalHistoryObj,"Journal_History_Reference");
		journalHistoryObj.getValue("SoftDelete").setSimpleValue("No");
		webUI.navigate("JournalHistoryDetailsScreen",journalHistoryObj);
	}
	else
	{
		webUI.showAlert("Error", "Cannot create item with type 'Journal History Products' below '"+ journalHistoryParentFolderObj.getName()+"'", "");
	}
}
}