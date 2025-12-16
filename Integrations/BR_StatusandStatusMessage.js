/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR_StatusandStatusMessage",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BR_StatusandStatusMessage",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalIssues", "JournalPrintIssues" ],
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
    "contract" : "LoggerBindContract",
    "alias" : "logger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,logger) {
/*var objectType = node.getObjectType().getID();
if(objectType=="JournalDigitalIssues" || objectType=="JournalPrintIssues"||objectType=="Backfiles"||objectType=="OtherProducts" ||objectType=="MultiJournal"){
	node.getValue("Status").setSimpleValue("Success");
	node.getValue("StatusMessage").setSimpleValue("Send to Downstream System");
	return true;
	}
	
else{
	return false;
}
*/
var objectType = node.getObjectType().getID();
if(objectType=="Backfiles"||objectType=="OtherProducts"||objectType=="MultiJournal"){
	node.getValue("Status").setSimpleValue("Success");
	node.getValue("StatusMessage").setSimpleValue("Send to Downstream System");
	var currentDate = new Date();
	var formate = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	var formatteddate = formate.format(currentDate);
	//log.info("formatteddate " + formatteddate);
	var lastUpdated = node.getValue("LastUpdatedNew").getSimpleValue();

	if (lastUpdated == null){
		node.getValue("LastUpdatedNew").setSimpleValue(formatteddate);
	}
	
	
	
	}
	

}