/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalHistoryAttributeGenerationButton",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "Journal History Attribute Generation Button",
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,MANAGER) {
var myReferenceType = MANAGER.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
var journal = NODE.queryReferencedBy(myReferenceType).asList(100).get(0).getSource();
var journalName = journal.getName();
var journalProductTitle = journal.getValue("ProductTitle").getSimpleValue();
var journalProductShortTitle = journal.getValue("ProductShortTitle").getSimpleValue();
var journalAbbreviatedTitle = journal.getValue("ProductAbbreviatedTitle").getSimpleValue();
var journalSortTitle = journal.getValue("ProductSortTitle").getSimpleValue();
var journalJournalGroupCode = journal.getValue("JournalGroupCode").getSimpleValue();
var journalSubtype = journal.getValue("ProductRenewalSubscriptionType").getSimpleValue();
logger.info (journalSubtype)
NODE.setName(journalName);
NODE.getValue("ProductShortTitle").setSimpleValue(journalProductShortTitle);
NODE.getValue("ProductTitle").setSimpleValue(journalProductTitle);
NODE.getValue("ProductAbbreviatedTitle").setSimpleValue(journalAbbreviatedTitle);
NODE.getValue("ProductSortTitle").setSimpleValue(journalSortTitle);
NODE.getValue("JournalHistoryJournalCode").setSimpleValue(journalJournalGroupCode);
NODE.getValue("JournalGroupCode").setSimpleValue(journalJournalGroupCode);
NODE.getValue("JournalHistoryWolCode").setSimpleValue(journalJournalGroupCode);

if (journalSubtype == "Calendar Year" || journalSubtype == "Rolling Renewal" || journalSubtype == "Controlled Circulation" ){
NODE.getValue("JournalHistoryAccessType").setSimpleValue("Paid");
	
}
if (journalSubtype == "Open Access" || journalSubtype == "Free" || journalSubtype == "Free to read" ){
NODE.getValue("JournalHistoryAccessType").setSimpleValue("Free");
}
}