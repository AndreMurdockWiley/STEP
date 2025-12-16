/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalHistoryISSNUpdate",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "Journal History ISSN Update",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "OBJJH",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalHistoryProducts",
    "description" : null
  }, {
    "contract" : "BusinessActionBindContract",
    "alias" : "AUTOCLASSRULE",
    "parameterClass" : "com.stibo.core.domain.impl.businessrule.FrontBusinessActionImpl",
    "value" : "AutoClassificationJournalHistory",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,MANAGER,OBJJH,AUTOCLASSRULE) {
var parentNode = NODE.getParent();
var myJournalHistoryObject = ""
var journalMediaCode = "";
var myReferenceType = MANAGER.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
var myJournalHistoryQuery = parentNode.queryReferences(myReferenceType);
var prodTarget = "";
var sequenceNumber = "";
var myList = myJournalHistoryQuery.asList(100);
var parentJournalGroupCode = parentNode.getValue("JournalGroupCode").getSimpleValue();
var Subtype = parentNode.getValue("ProductRenewalSubscriptionType").getSimpleValue();

//LOG.info("MY LIST: " + myList.size());

if(myList.size() > 0){
	if (Subtype == "Calendar Year" || Subtype == "Rolling Renewal" || Subtype == "Controlled Circulation" ){
for(var i = 0; i < myList.size() ; i++) {
	prodTarget = myList.get(i).getTarget();
	prodTarget.getValue("JournalHistoryAccessType").setSimpleValue("Paid");	
}
}
if (Subtype == "Open Access" || Subtype == "Free" || Subtype == "Free to read" ){
for(var i = 0; i < myList.size() ; i++) {
	prodTarget = myList.get(i).getTarget();
	prodTarget.getValue("JournalHistoryAccessType").setSimpleValue("Free");	
}
}
	for(var i = 0; i < myList.size() ; i++) {
		prodTarget = myList.get(i).getTarget();
		//LOG.info("HISTORY OBJECT: " + prodTarget.getID());
		sequenceNumber = parseInt(prodTarget.getValue("JournalHistorySequenceNumber").getSimpleValue());
		prodTarget.getValue("JournalHistorySequenceNumber").setSimpleValue(sequenceNumber + 1);
		prodTarget.approve();
	}
}
	
myJournalHistoryObject = MANAGER.getProductHome().getProductByID("JournalHistory_InitialImport").createProduct('', OBJJH);
myJournalHistoryObject.setParent(MANAGER.getProductHome().getProductByID("JournalHistory_InitialImport"));
myJournalHistoryObject.setName(parentNode.getValue("ProductTitle").getSimpleValue());
myJournalHistoryObject.getValue("ProductShortTitle").setSimpleValue(parentNode.getValue("ProductShortTitle").getSimpleValue());
myJournalHistoryObject.getValue("JournalHistoryIdentifiersDoi").setSimpleValue(parentNode.getValue("ProductDoi").getSimpleValue());
myJournalHistoryObject.getValue("ProductAbbreviatedTitle").setSimpleValue(parentNode.getValue("ProductAbbreviatedTitle").getSimpleValue());
myJournalHistoryObject.getValue("ProductSortTitle").setSimpleValue(parentNode.getValue("ProductSortTitle").getSimpleValue());
myJournalHistoryObject.getValue("ProductTitle").setSimpleValue(parentNode.getValue("ProductTitle").getSimpleValue());
myJournalHistoryObject.getValue("JournalHistoryCopyright").setSimpleValue(parentNode.getValue("ProductCopyrightLine").getSimpleValue());
myJournalHistoryObject.getValue("JournalHistoryPrimaryUrl").setSimpleValue(parentNode.getValue("ProductUrl").getSimpleValue());
myJournalHistoryObject.getValue("JournalHistorySequenceNumber").setSimpleValue("1");
myJournalHistoryObject.getValue("JournalGroupCode").setSimpleValue(parentJournalGroupCode);
myJournalHistoryObject.getValue("JournalHistoryJournalCode").setSimpleValue(parentJournalGroupCode);
myJournalHistoryObject.getValue("JournalHistoryWolCode").setSimpleValue(parentJournalGroupCode);

var myChilds = parentNode.getChildren();

for(var i = 0; i < myChilds.size(); i++) {
	journalMediaCode = myChilds.get(i).getValue("JournalMediaCode").getSimpleValue();

	if (journalMediaCode == "Print"){
		myJournalHistoryObject.getValue("JournalHistoryISSNPrint").setSimpleValue(myChilds.get(i).getValue("ProductIssn").getSimpleValue());
	} else {
		myJournalHistoryObject.getValue("JournalHistoryISSNOnline").setSimpleValue(myChilds.get(i).getValue("ProductIssn").getSimpleValue());
	}	
}
	
parentNode.createReference(myJournalHistoryObject,"Journal_History_Reference");
AUTOCLASSRULE.execute(myJournalHistoryObject);
	myJournalHistoryObject.approve();
	parentNode.approve();
}
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
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (node,log) {
if(node.isInWorkflow("JournalCreationWFV3Backup")){
	return false;
}
return true;

}