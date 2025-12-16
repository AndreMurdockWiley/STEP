/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateIfProductActveStandardNotSpec",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If Product Activated/Standard/NotSpecific",
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
if (NODE.getValue("ProductActivated").getSimpleValue() == "Activated" && NODE.getValue("CollectionSubType").getSimpleValue() == "Standard" && NODE.getValue("CollectionType").getSimpleValue() != "Specific" && NODE.getValue("CollectionType").getSimpleValue() != "Other Database" && NODE.getValue("CollectionType").getSimpleValue() != "Rescue Account Collections"&& NODE.getValue("CollectionType").getSimpleValue() != "Backfile Collection" ) {
	return true;
}
return false;
}