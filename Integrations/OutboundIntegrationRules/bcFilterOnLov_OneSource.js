/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "bcFilterOnLov_OneSource",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "bcFilterOnLov_OneSource",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Domain user-type root" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentEventTypeBinding",
    "alias" : "currentEventType",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "LOVID",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "Ownership_LOV",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (currentEventType,node,mgr,LOVID) {

if (node.getID() == "MatGrp4OneSourcePrdLvl1Code_LOV") { 
//|| (node.getID() == "PUBSRCCODE_LOV"))) {
	logger.info("finished: the object is put in the queue");
	return true;
}
return "wont be added to endpoint event queue";

//if (node.getID() == "JRNHOMWRH_LOV"){
//	logger.info("finished: the object is put in the queue");
//	return true;
//}
}