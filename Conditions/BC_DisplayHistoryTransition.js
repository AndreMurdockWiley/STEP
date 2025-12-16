/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BC_DisplayHistoryTransition",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "BC_DisplayHistoryTransition",
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
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager) {
return displayTranitionTab(node, manager)

function displayTranitionTab(node, manager) {
	var Obj = node.getObjectType().getID();
	if (Obj == "JournalHistoryProducts") {
		var HistoryOrigin = node.getValue("HistoryOrigin").getSimpleValue();
		if (HistoryOrigin == "Regular Workflow") {
			return true;
		} else return false;
	}

//	var flag = false;
//	if (Obj == "Journal") {
//		var JournalHistTran = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Transition");
//		var myJournalHistoryTran = node.getReferences(JournalHistTran).toArray();
//		for (var j = 0; j < myJournalHistoryTran.length; j++) {
//			var refType = myJournalHistoryTran[j].getTarget();
//			var HistoryOrigin = refType.getValue("Journal_History_Relation").getSimpleValue();
//			if (HistoryOrigin == "Regular Workflow") {
//				flag = true;
//			}
//		}
//	}
//	return flag;
}
}