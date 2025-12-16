/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_StatusandStatusMessage",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BA_StatusandStatusMessage",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalIssues", "JournalPrintIssues" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "TriggerAndApproveNewParts",
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
if(node){
	logger.info("inside node");
var objectType = node.getObjectType().getID();
if(objectType=="JournalDigitalIssues" || objectType=="JournalPrintIssues" ){
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
	

}