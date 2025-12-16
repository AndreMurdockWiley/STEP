/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassificationJournalHistory",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Journal History",
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
var journalHistoryFirstLetter = node.getValue("JournalGroupCode").getSimpleValue().toUpperCase().charCodeAt(0);
var parentObject = "";
var myReferenceType = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
var journal = node.queryReferencedBy(myReferenceType).asList(100).get(0).getSource();
logger.info (journal)
var journalSubtype = journal.getValue("ProductRenewalSubscriptionType").getSimpleValue();
logger.info (journalSubtype)
if (journalSubtype == "Calendar Year" || journalSubtype == "Rolling Renewal" || journalSubtype == "Controlled Circulation" ){
node.getValue("JournalHistoryAccessType").setSimpleValue("Paid");	
}
if (journalSubtype == "Open Access" || journalSubtype == "Free" || journalSubtype == "Free to read" ){
node.getValue("JournalHistoryAccessType").setSimpleValue("Free");
}


switch(true){
	case (journalHistoryFirstLetter >= 65 && journalHistoryFirstLetter <=70):
		parentObject = manager.getProductHome().getProductByID("A_F_Journals_History");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (journalHistoryFirstLetter >= 71 && journalHistoryFirstLetter <= 76):
		parentObject = manager.getProductHome().getProductByID("G_L_Journals_History");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (journalHistoryFirstLetter >= 77 && journalHistoryFirstLetter <= 82):
		parentObject = manager.getProductHome().getProductByID("M_R_Journals_History");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (journalHistoryFirstLetter >= 83 && journalHistoryFirstLetter <=90):
		parentObject = manager.getProductHome().getProductByID("S_Z_Journals_History");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	default:
		parentObject = manager.getProductHome().getProductByID("A_F_Journals_History");
		//log.info("default");
		node.setParent(parentObject);
}
}