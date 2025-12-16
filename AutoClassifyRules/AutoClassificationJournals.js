/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassificationJournals",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Journals",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
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
exports.operation0 = function (log,node,manager) {
/*
 * This code does the following: 
 * - Gets the first letter of the journal group code from the current object and transforms it into ASCII
 * - Using a switch, it caughts all the possible cases that the environment has per Lexi folders
 * - In every case, it sets the parent where the current object should be classified into
 * - For number and special characters, it is classifying them into the A-F group as defaulted
 */
var journalFirstLetter = node.getValue("JournalGroupCode").getSimpleValue().toUpperCase().charCodeAt(0);
var parentObject = "";

switch(true){
	case (journalFirstLetter >= 65 && journalFirstLetter <=70):
		parentObject = manager.getProductHome().getProductByID("Jrnl_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (journalFirstLetter >= 71 && journalFirstLetter <= 76):
		parentObject = manager.getProductHome().getProductByID("Jrnl_G_L");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (journalFirstLetter >= 77 && journalFirstLetter <= 82):
		parentObject = manager.getProductHome().getProductByID("Jrnl_M_R");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (journalFirstLetter >= 83 && journalFirstLetter <=90):
		parentObject = manager.getProductHome().getProductByID("Jrnl_S_Z");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	default:
		parentObject = manager.getProductHome().getProductByID("Jrnl_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
}
}