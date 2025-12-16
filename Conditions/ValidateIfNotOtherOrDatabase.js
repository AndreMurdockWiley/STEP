/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateIfNotOtherOrDatabase",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If NOT Other or Database",
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
  }, {
    "contract" : "CurrentWorkflowBindContract",
    "alias" : "WORKFLOW",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,COLLECTIONTYPE,WORKFLOW) {
if (NODE.getValue("CollectionType").getSimpleValue() == "Other Database" || NODE.getValue("CollectionType").getSimpleValue() == "Database Model Collections" || NODE.getValue("CollectionType").getSimpleValue() == "Backfile Collection" ) {
	return false;
}
return true;
}