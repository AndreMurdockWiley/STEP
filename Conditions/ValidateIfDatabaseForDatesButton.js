/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateIfDatabaseForDatesButton",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If Database for Dates Button",
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
    "alias" : "COLLECTIONTYPE",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "CollectionType",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,COLLECTIONTYPE) {
if (NODE.getValue("CollectionType").getSimpleValue() == "Database Model Collections" && NODE.getValue("ProductActivated").getSimpleValue() == "Activated" ){
	return true;
}
return false;
}