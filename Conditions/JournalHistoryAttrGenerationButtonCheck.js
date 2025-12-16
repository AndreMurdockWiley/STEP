/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalHistoryAttrGenerationButtonCheck",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Journal History Attr Generation Button Check",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts" ],
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
var name = NODE.getName();
var shortTitle = NODE.getValue("ProductShortTitle").getSimpleValue();
var journalCode = NODE.getValue("JournalHistoryJournalCode").getSimpleValue();

if (name == "" || name == null || shortTitle == "" || shortTitle == null || journalCode == "" || journalCode == null) {
	return true;
} else {
	return false;
}
}