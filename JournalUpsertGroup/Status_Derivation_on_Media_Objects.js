/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Status_Derivation_on_Media_Objects",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Status Derivation on Media Objects",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "Journal", "JournalDigitalMedia" ],
  "allObjectTypesValid" : false,
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node) {
var journal = node.getParent();
var DigitalMediaStatus = journal.getValue("DisplayDigitalMediaStatus").getSimpleValue();
var PrintMediaStatus =journal.getValue("DisplayPrintMediaStatus").getSimpleValue();
var acceptingSubmission = journal.getValue("JournalAcceptingSubmission").getSimpleValue();

//modified as per RPDM-10530
if(acceptingSubmission == "Pre-public Launch"){
	journal.getValue("JournalStatus").setSimpleValue("Not yet published");
}
else if(acceptingSubmission == "Pre-public Takeover"){
	journal.getValue("JournalStatus").setSimpleValue("Not yet published");
}
else if(acceptingSubmission == "Retro Billing" && DigitalMediaStatus == "To be sold/Transfrd"){
	journal.getValue("JournalStatus").setSimpleValue("Sold/InterCo Transfr");
}
else if(acceptingSubmission == "Retro Billing" && DigitalMediaStatus == "To Be Ceased"){
	journal.getValue("JournalStatus").setSimpleValue("Ceased");
}
else if(acceptingSubmission == "Retro Billing" && PrintMediaStatus == "To be sold/Transfrd"){
	journal.getValue("JournalStatus").setSimpleValue("Sold/InterCo Transfr");
}
else if(acceptingSubmission == "Retro Billing" && PrintMediaStatus == "To Be Ceased"){
	journal.getValue("JournalStatus").setSimpleValue("Ceased");
}
else if(DigitalMediaStatus == "Current publication"){
	journal.getValue("JournalStatus").setSimpleValue("Current publication");
}
else if(PrintMediaStatus == "Current publication"){
	journal.getValue("JournalStatus").setSimpleValue("Current publication");
}
else if(DigitalMediaStatus != null && DigitalMediaStatus != ""){
	journal.getValue("JournalStatus").setSimpleValue(DigitalMediaStatus);
}
else if(PrintMediaStatus != null && PrintMediaStatus != ""){
	journal.getValue("JournalStatus").setSimpleValue(PrintMediaStatus);
}
}