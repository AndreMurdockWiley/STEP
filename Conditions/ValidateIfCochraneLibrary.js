/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateIfCochraneLibrary",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If Cochrane Library",
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
if (NODE.getValue("OtherProductCollectionSubType").getSimpleValue() == "Evidence Medicine" && NODE.getValue("OtherProductCollectionType").getSimpleValue() != "Dynamic") {
	return true;
}
return false;
}