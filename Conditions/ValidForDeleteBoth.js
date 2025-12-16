/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidForDeleteBoth",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Valid For Delete Both",
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
var journal = NODE.getParent().getParent().getParent();
var printOnlineOrBoth = "";

printOnlineOrBoth = journal.getValue("ProductMediaType").getSimpleValue();

if (printOnlineOrBoth == "Both"){
	return true;
}
return false;

}