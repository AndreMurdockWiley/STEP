/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_AddJournalToJournalHistoryReference",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Add Journal to Journal History Reference",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts", "Journal" ],
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
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
exports.operation0 = function (node,manager,webUI) {
var currentObjType = node.getObjectType().getID();
if(currentObjType=="Journal"){
	var selectedObject = webUI.getSelectedSetOfNodes().toArray();
	var selectedObjectLength = selectedObject.length;
	if(selectedObjectLength>1){
		webUI.showAlert("Error", "Please select only one History object at a time.", "");
	}
	else if(selectedObjectLength==1){
		var journalHistoryObj = selectedObject[0];
		if(journalHistoryObj.getObjectType().getID()=="JournalHistoryProducts"){
		var journalHistoryRefType = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
		var JournalHistoryRefs = journalHistoryObj.queryReferencedBy(journalHistoryRefType).asList(100);
		if(JournalHistoryRefs.size()>0){
			var sourceJournalObj = JournalHistoryRefs.get(0).getSource().getName();
    			webUI.showAlert("Error", "Cannot link History Journal object, "+journalHistoryObj.getName()+", to "+node.getName()+".\n Since "+journalHistoryObj.getName()+" is already linked to "+sourceJournalObj+".", "");
		}
		else{
			node.createReference(journalHistoryObj,"Journal_History_Reference");
			webUI.showAlert("Info","Success","Journal History '"+journalHistoryObj.getName()+"' linked successfully");
		}
		}
		else{
			webUI.showAlert("Error", "Selected object is not a Journal History object."+"\n Kindly select valid Journal History object to create the link", "");
		}
	}
}
else if(currentObjType=="JournalHistoryProducts"){
	var journalHistoryRefType = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
	var JournalHistoryRefs = node.queryReferencedBy(journalHistoryRefType).asList(100);
	if(JournalHistoryRefs.size()>0){
    		webUI.showAlert("Error", "Cannot link more Journal to "+node.getName()+".\n Only one Journal is allowed to keep in Journal Reference", "");
	}
	else{
		var selectedObject = webUI.getSelectedSetOfNodes().toArray();
		var selectedObjectLength = selectedObject.length;
		if(selectedObjectLength>1){
			webUI.showAlert("Error", "Please select only one Journal.\n Only one Journal is allowed to keep in Journal Reference", "");
		}
		else if(selectedObjectLength==1){
			var journalObj = selectedObject[0];
			if(journalObj.getObjectType().getID()=="Journal"){
			journalObj.createReference(node,"Journal_History_Reference");
			webUI.showAlert("Info","Success","Journal '"+journalObj.getName()+"' linked successfully");
			}
			else{
				webUI.showAlert("Error", "Selected object is not a Journal object."+"\n Kindly select valid Journal object to create the link", "");
			}
		}
	}
}
}