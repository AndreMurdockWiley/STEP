/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BackfilesNameAndTitleGeneration",
  "type" : "BusinessAction",
  "setupGroups" : [ "BackfilesUpsertGroup" ],
  "name" : "Backfiles Name And Title Generation",
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
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "Journal_to_Backfile_Reference",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "Journal_to_Backfile_Reference",
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,Journal_to_Backfile_Reference,LOG) {
var journalTitle = NODE.queryReferencedBy(Journal_to_Backfile_Reference).asList(100).get(0).getSource().getValue("ProductTitle").getSimpleValue();

LOG.info(journalTitle);

NODE.getValue("ProductFullTitle").setSimpleValue(journalTitle);
NODE.setName(journalTitle);
}
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
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (NODE) {
var title = NODE.getValue("ProductTitle").getSimpleValue();
if (title == "" || title == null){
	return true;
} else {
	return false;
}

}