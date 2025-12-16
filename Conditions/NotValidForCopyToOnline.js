/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "NotValidForCopyToOnline",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Not Valid For Copy To Online",
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
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE) {
var nodeObjectTypeId = NODE.getObjectType().getID();
var journal = "";
var printOnlineOrBoth = "";
var mediaCode = "";

switch(true){
	case (nodeObjectTypeId == "JournalDigitalMedia" || nodeObjectTypeId == "JournalPrintMedia"):
		journal = NODE.getParent();
		break;
	case (nodeObjectTypeId == "JournalDigitalPublicationYear" || nodeObjectTypeId == "JournalPrintPublicationYear"):
		journal = NODE.getParent().getParent();
		break;
	case (nodeObjectTypeId == "JournalPrintVolumes" || nodeObjectTypeId == "JournalDigitalVolumes"):
		journal = NODE.getParent().getParent().getParent();
		break;		
}

printOnlineOrBoth = journal.getValue("ProductMediaType").getSimpleValue();
mediaCode = NODE.getValue("JournalMediaCode").getSimpleValue();

if (printOnlineOrBoth == "Both" && mediaCode == "Print"){
	return false;
}
return true;

}