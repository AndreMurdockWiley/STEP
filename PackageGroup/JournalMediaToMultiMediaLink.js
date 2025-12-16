/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalMediaToMultiMediaLink",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "Journal Media To Multi Media Link",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
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
    "contract" : "ReferenceTypeBindContract",
    "alias" : "MMrefType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "BOMS_TO_JOURNAL_MULTIMEDIA",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,MANAGER,MMrefType) {
//Put in a try catch so that we can log if the ID is null 
try {
	var MMid = NODE.getValue("JournalMMPackageID").getSimpleValue();
	var MMobj = MANAGER.getProductHome().getProductByID(MMid);
	var MMref = MMobj.createReference(NODE,MMrefType.getID());
	} catch (e) {
	log.info("ERROR DURRING LINKING: " + e);
	}
}
/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "ProductMediaType"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : "Both"
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "="
  } ],
  "pluginType" : "Precondition"
}
*/
