/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MJSequentialMatNoIncrement",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "MJ Sequential Mat No Increment",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MultiJournal" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "JournalPackageFunctions",
    "libraryAlias" : "journalPackageLibrary"
  } ]
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
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
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
exports.operation0 = function (LOG,MANAGER,NODE,journalPackageLibrary) {
var matNo = journalPackageLibrary.sequentialMatNoIncrement(MANAGER.getProductHome().getProductByID("ProductSequentialMatNo"));

//log.info(NODE.getValue("ProductSAPMaterialNumber").getSimpleValue());

NODE.getValue("ProductSAPMaterialNumber").setSimpleValue(matNo);
}