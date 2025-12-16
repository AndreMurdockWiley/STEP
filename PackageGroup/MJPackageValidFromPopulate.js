/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MJPackageValidFromPopulate",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "MJ Package Valid From Populate",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MultiJournal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  } ]
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
    "alias" : "MJTODIGITAL",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "MJPackage_To_DigitalJournal_Reference",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "MJTOPRINT",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "MJPackage_To_PrintJournal_Reference",
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "VALIDFROM",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "ProductValidFrom",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,MANAGER,MJTODIGITAL,MJTOPRINT,VALIDFROM,genericFunctions) {
var myMJDigRefs = NODE.getReferences(MJTODIGITAL);
var myMJPrintRefs = NODE.getReferences(MJTOPRINT);

for(var i = 0;i<myMJDigRefs.size();i++){
	var myMJDigRef = myMJDigRefs.get(i);
	LOG.info("My Value " + myMJDigRef.getValue(VALIDFROM.getID()).getSimpleValue());
	if(myMJDigRef.getValue(VALIDFROM.getID()).getSimpleValue() == null || myMJDigRef.getValue(VALIDFROM.getID()).getSimpleValue() == ''){
		LOG.info("About to set Value");
		myMJDigRef.getValue(VALIDFROM.getID()).setSimpleValue(genericFunctions.getToday("yyyy-MM-dd"));
	}
}
for(var e = 0;e<myMJPrintRefs.size();e++){
	var myMJPrintRef = myMJPrintRefs.get(e);
	LOG.info("My Value " + myMJPrintRef.getValue(VALIDFROM.getID()).getSimpleValue());
	if(myMJPrintRef.getValue(VALIDFROM.getID()).getSimpleValue()== null || myMJPrintRef.getValue(VALIDFROM.getID()).getSimpleValue() == ''){
		LOG.info("About to set Value");
		myMJPrintRef.getValue(VALIDFROM.getID()).setSimpleValue(genericFunctions.getToday("yyyy-MM-dd"));
	}
}

}