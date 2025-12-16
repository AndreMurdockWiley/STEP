/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CheckSubjectCiodeReference",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Check Subject Ciode Reference",
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
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,manager) {
var subjectLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToSubjectHierarchyLink");
var existingLinks = NODE.queryClassificationProductLinks(subjectLinkType).asList(100);
var isLink = false;
if(isLink == false){
for (var linkCount = 0; linkCount < existingLinks.size(); linkCount++) {
		 	//log.info(" in for Loop 1 existingLinks: "+existingLinks);
			//log.info(" in for Loop linkCount: "+linkCount);
			//existingLinks.get(linkCount).delete();
		  	isLink = true;
}
if(isLink == true){
	return true;
} else {
	return false;
}
}
}