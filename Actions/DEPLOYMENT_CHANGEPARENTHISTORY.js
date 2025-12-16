/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "DEPLOYMENT_CHANGEPARENTHISTORY",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "DEPLOYMENT_CHANGEPARENT",
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
var journalHistoryFirstLetter = node.getValue("JournalGroupCode").getSimpleValue().toUpperCase().charCodeAt(0);
var parentObject = "";

switch(true){
	case (journalHistoryFirstLetter >= 65 && journalHistoryFirstLetter <=70):
		parentObject = manager.getProductHome().getProductByID("A_F_SoftDeletedJournalHistory");
		node.setParent(parentObject);
		break;
	case (journalHistoryFirstLetter >= 71 && journalHistoryFirstLetter <= 76):
		parentObject = manager.getProductHome().getProductByID("G_L_SoftDeletedJournalHistory");
		node.setParent(parentObject);
		break;
	case (journalHistoryFirstLetter >= 77 && journalHistoryFirstLetter <= 82):
		parentObject = manager.getProductHome().getProductByID("M_R_SoftDeletedJournalHistory");
		node.setParent(parentObject);
		break;
	case (journalHistoryFirstLetter >= 83 && journalHistoryFirstLetter <=90):
		parentObject = manager.getProductHome().getProductByID("S_Z_SoftDeletedJournalHistory");
		node.setParent(parentObject);
		break;
	default:
		parentObject = manager.getProductHome().getProductByID("A_F_SoftDeletedJournalHistory");
		node.setParent(parentObject);
}
}