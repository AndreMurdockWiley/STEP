/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MJSetCreationAtributes",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "MJ Set Creation Atributes",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MultiJournal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "JRNLSTATUS_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "JRNLSTATUS_LOV",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,JRNLSTATUS_LOV) {
NODE.getValue("ProductStatus").setSimpleValue(JRNLSTATUS_LOV.getListOfValuesValueByID("P").getValue());

//LOG.info(NODE.getValue("ProductStatus").getSimpleValue());
}