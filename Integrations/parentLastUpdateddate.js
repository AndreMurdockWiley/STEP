/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "parentLastUpdateddate",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "parentLastUpdateddate",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
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
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,log) {
/*
 Change History
 ------------------------------------------------------------
 SetValueForJournalReconReport
 ------------------------------------------------------------
 HEMAL | 1.0.0 | 14-Sept-2021 | RPDM-2088 - Data extraction for Journal Integration endpoint from STEP
 ------------------------------------------------------------
 */
var objectType = node.getObjectType().getID();
log.info("objectType " + objectType);
if(objectType=="JournalPrintMedia" || objectType=="JournalDigitalMedia"){
	//var IDValue = node.getValue("ID").getSimpleValue();
	var getParentobj = node.getParent();
		log.info("Parent" + getParentobj);
		var lastUpdated = getParentobj.getValue("LastUpdatedNew").getSimpleValue();
		log.info("lastUpdated" + lastUpdated);
		var lastuptnode= node.getValue("LastUpdatedNew").getSimpleValue();
		log.info("lastuptnode" + lastuptnode);
		node.getValue("LastUpdatedNew").setSimpleValue(lastUpdated);
		node.getValue("Status").setSimpleValue("Success");
	     node.getValue("StatusMessage").setSimpleValue("Send to Downstream System");
		log.info("update success");
	//return true;
}

else if(objectType=="Journal"){
	var lastuptnode= node.getValue("LastUpdatedNew").getSimpleValue();
	log.info("lastuptnode" + lastuptnode);
	var children = node.getChildren().toArray();
	for(i=0;i<children.length;i++){
	children[i].getValue("LastUpdatedNew").setSimpleValue(lastuptnode);
	children[i].getValue("Status").setSimpleValue("Success");
	children[i].getValue("StatusMessage").setSimpleValue("Send to Downstream System");
	}
}

else{
	//return false;

	log.info("inside else")
}



}