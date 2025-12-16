/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalHistoryAccessType_Derivation",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Journal History Access Type Derivation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
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
var JournalHistRefs = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
var myJournalHistoryReferences = node.getReferences(JournalHistRefs).toArray();
var journalSubtype = node.getValue("ProductRenewalSubscriptionType").getSimpleValue();
log.info("My History =" + JournalHistRefs);
for (var j = 0; j < myJournalHistoryReferences.length; j++) {
    var refType = myJournalHistoryReferences[j].getTarget();
    var SeqNumber = refType.getValue("JournalHistorySequenceNumber").getSimpleValue();
    if (SeqNumber == "1") {
        if (journalSubtype == "Calendar Year" || journalSubtype == "Rolling Renewal" || journalSubtype == "Controlled Circulation") {
            refType.getValue("JournalHistoryAccessType").setSimpleValue("Paid");

        }
        if (journalSubtype == "Open Access" || journalSubtype == "Free" || journalSubtype == "Free to read") {
            refType.getValue("JournalHistoryAccessType").setSimpleValue("Free");
        }
    }

}
}