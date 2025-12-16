/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ReturnStateAndApproved",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Return State and Approval",
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
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "PRODUCTACTIVATED",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "ProductActivated",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,PRODUCTACTIVATED) {
if(NODE.getValue(PRODUCTACTIVATED.getID()).getValue() == "Activated"){
	return true;
}
return false;
}