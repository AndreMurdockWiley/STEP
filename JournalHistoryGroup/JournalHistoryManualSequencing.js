/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalHistoryManualSequencing",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "Journal History Manual Sequencing",
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
var newJournalHistoryID = node.getID();
var sequenceNumber = 2;
var myReferenceType = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
var myJournalQuery = node.queryReferencedBy(myReferenceType);
var myJournalHistoryQuery = "";
var tmpYear = "";
var journalHistoryEndYear = "";
var journalHistoryArray = [];
var prodTarget = "";
var prodSource = "";

function jornalHistoryOrder(item, index){
	log.info("Sequence Before Order: " + manager.getProductHome().getProductByID(item.slice(1)).getValue("JournalHistorySequenceNumber").getSimpleValue());
	manager.getProductHome().getProductByID(item.slice(1)).getValue("JournalHistorySequenceNumber").setSimpleValue(sequenceNumber);
	log.info("Sequence After Order: " + manager.getProductHome().getProductByID(item.slice(1)).getValue("JournalHistorySequenceNumber").getSimpleValue() +
			" (" + item.slice(0, 1) + ")");
	sequenceNumber++;
}

log.info("New Journal History ID: " + newJournalHistoryID);
node.getValue("JournalHistorySequenceNumber").setSimpleValue("1");
log.info("New Journal History Sequence Number: " + node.getValue("JournalHistorySequenceNumber").getSimpleValue() + " (" + node.getValue("JournalHistoryEndYear").getSimpleValue()
		+ ")");

myJournalQuery.forEach(function(journal){
	prodSource = journal.getSource();
	return true;
});

myJournalHistoryQuery = prodSource.queryReferences(myReferenceType);
log.info("Entering Journal History List");
myJournalHistoryQuery.forEach(function(journalHistory){
	prodTarget = journalHistory.getTarget();
	log.info("Existing Journal History ID: " + prodTarget.getID());
	
	if (prodTarget.getID() != newJournalHistoryID){
		journalHistoryEndYear = prodTarget.getValue("JournalHistoryEndYear").getSimpleValue();
		
		if (journalHistoryEndYear == "" || journalHistoryEndYear == null){
			tmpYear = 9999;
		}else{
			tmpYear = parseInt(journalHistoryEndYear);
		}
		
		journalHistoryArray.push([tmpYear,prodTarget.getID()]);
		log.info("Current Pre-Sorted Array value: " + journalHistoryArray);
	} else {
		log.info("Skiping new Journal History");
	}
	
	log.info("Finished Array creation");
	return true;
});

journalHistoryArray.sort().reverse();
log.info("Sorted Array: " + journalHistoryArray);
log.info("Updating Sequence Number by ordering on End Year");
journalHistoryArray.forEach(jornalHistoryOrder);
}