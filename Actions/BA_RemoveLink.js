/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_RemoveLink",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_RemoveLink",
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
    "contract" : "WebUiContextBind",
    "alias" : "UI",
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
exports.operation0 = function (UI,manager,node) {
var selectedNodes = UI.getSelection();
var refFound = "notFound";
for (var i = 0; i < selectedNodes.size(); i++) {
    var Obj = selectedNodes.get(i).getObjectType().getID();
    var nodeID = selectedNodes.get(i).getID();
    if (Obj == "JournalHistoryProducts") {
        var transType = manager.getReferenceTypeHome().getReferenceTypeByID("HISTORY_TO_HISTORY_TRANSITION");
        var myTran = selectedNodes.get(i).getReferences(transType).toArray();
        var selectedRef = node.getReferences(transType).toArray();
        for (var j = 0; j < myTran.length; j++) {
            if (node.getID() == myTran[j].getTarget().getID()) {
                myTran[j].delete();
                for (var z = 0; z < selectedRef.length; z++) { 
                    if (selectedRef[z].getTarget().getID() == nodeID) {
                        selectedRef[z].delete();
                        
                    }
                }
                refFound = "found";
            }
        }
    }
    if (Obj == "Journal") {
        var transType = manager.getReferenceTypeHome().getReferenceTypeByID("JOURNAL_TO_JOURNAL_TRANSITION");
        var myTran = selectedNodes.get(i).getReferences(transType).toArray();
        var selectedRef = node.getReferences(transType).toArray();
        for (var j = 0; j < myTran.length; j++) {
            if (node.getID() == myTran[j].getTarget().getID()) {
                myTran[j].delete();
                for (var z = 0; z < selectedRef.length; z++) {
                    if (selectedRef[z].getTarget().getID() == nodeID) {
                        selectedRef[z].delete();
                        
                    }
                }
                refFound = "found";
            }
        }
    }

}
//To delete even no cross reference

//    if(refFound == "notFound"){
    	for (var i = 0; i < selectedNodes.size(); i++) {
    		var Obj = selectedNodes.get(i).getObjectType().getID();
	//UI.showAlert("WARN", "IN", "");
	    if (Obj == "JournalHistoryProducts") {
        var transType = manager.getReferenceTypeHome().getReferenceTypeByID("HISTORY_TO_HISTORY_TRANSITION");
        var selectedRef = node.getReferences(transType).toArray();
    		var nodeID = selectedNodes.get(i).getID();
    		                for (var a = 0; a < selectedRef.length; a++) {
                    if (selectedRef[a].getTarget().getID() == nodeID) {
                        selectedRef[a].delete();
                    }
	    }
    }
    	    if (Obj == "Journal") {
        var transType = manager.getReferenceTypeHome().getReferenceTypeByID("JOURNAL_TO_JOURNAL_TRANSITION");
        var selectedRef = node.getReferences(transType).toArray();
    		var nodeID = selectedNodes.get(i).getID();
    		                for (var y = 0; y < selectedRef.length; y++) {
                    if (selectedRef[y].getTarget().getID() == nodeID) {
                        selectedRef[y].delete();
                    }
	    }
    }
}
//    }

}