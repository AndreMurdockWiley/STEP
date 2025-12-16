/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "SetValueForJournalReconReport",
  "type" : "BusinessCondition",
  "setupGroups" : [ "OIEP-Filter" ],
  "name" : "SetValueForJournalReconReport",
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
/*
 Change History
 ------------------------------------------------------------
 SetValueForJournalReconReport
 ------------------------------------------------------------
 HEMAL | 1.0.0 | 14-Sept-2021 | RPDM-2088 - Data extraction for Journal Integration endpoint from STEP
 ------------------------------------------------------------
 */
 //JournalDigitalMedia
var objectType = node.getObjectType().getID();
if(objectType=="JournalPrintMedia" || objectType=="JournalDigitalMedia"){
	var IDValue = node.getValue("ID").getSimpleValue();
	if(!IDValue){
		var getParentID = node.getParent().getID();
		node.getValue("ID").setSimpleValue(getParentID);
		//return true;
	}
	var currentDate = new Date();
	var formate = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	var formatteddate = formate.format(currentDate);
	//log.info("formatteddate " + formatteddate);
	var lastUpdated = node.getValue("LastUpdatedNew").getSimpleValue();

	if (lastUpdated == null){
		node.getValue("LastUpdatedNew").setSimpleValue(formatteddate);
	}
	return true;
}
else if(objectType=="Journal"){
	var IDValue = node.getValue("ID").getSimpleValue();
	if(!IDValue){
		node.getValue("ID").setSimpleValue(node.getID());
	}
	var currentDate = new Date();
	var formate = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	var formatteddate = formate.format(currentDate);
	//log.info("formatteddate " + formatteddate);
	var lastUpdated = node.getValue("LastUpdatedNew").getSimpleValue();

	if (lastUpdated == null){
		node.getValue("LastUpdatedNew").setSimpleValue(formatteddate);
	}
	return true;	
}else{
	return false;
}

}