/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Journal_Status_Derivation",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Journal Status Derivation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
var DigitalMediaStatus = node.getValue("DisplayDigitalMediaStatus").getSimpleValue();
var PrintMediaStatus =node.getValue("DisplayPrintMediaStatus").getSimpleValue();
var acceptingSubmission = node.getValue("JournalAcceptingSubmission").getSimpleValue();

// modified as part of RPDM-10530
if(acceptingSubmission == "Pre-public Launch"){
	node.getValue("JournalStatus").setSimpleValue("Not yet published");
}
else if(acceptingSubmission == "Pre-public Takeover"){
	node.getValue("JournalStatus").setSimpleValue("Not yet published");
}
else if(acceptingSubmission == "Retro Billing" && DigitalMediaStatus == "To be sold/Transfrd"){
	node.getValue("JournalStatus").setSimpleValue("Sold/InterCo Transfr");
}
else if(acceptingSubmission == "Retro Billing" && DigitalMediaStatus == "To Be Ceased"){
	node.getValue("JournalStatus").setSimpleValue("Ceased");
}
else if(acceptingSubmission == "Retro Billing" && PrintMediaStatus == "To be sold/Transfrd"){
	node.getValue("JournalStatus").setSimpleValue("Sold/InterCo Transfr");
}
else if(acceptingSubmission == "Retro Billing" && PrintMediaStatus == "To Be Ceased"){
	node.getValue("JournalStatus").setSimpleValue("Ceased");
}
else if(DigitalMediaStatus == "Current publication"){
	node.getValue("JournalStatus").setSimpleValue("Current publication");
}
else if(PrintMediaStatus == "Current publication"){
	node.getValue("JournalStatus").setSimpleValue("Current publication");
}
else if(DigitalMediaStatus != null && DigitalMediaStatus != ""){
	node.getValue("JournalStatus").setSimpleValue(DigitalMediaStatus);
}
else if(PrintMediaStatus != null && PrintMediaStatus != ""){
	node.getValue("JournalStatus").setSimpleValue(PrintMediaStatus);
}
}