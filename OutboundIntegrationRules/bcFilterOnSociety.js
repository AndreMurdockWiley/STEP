/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "bcFilterOnSociety",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "bcFilterOnSociety",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "OrganizationType", "Organizations" ],
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
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EntityBindContract",
    "alias" : "SocietyCodeRef",
    "parameterClass" : "com.stibo.core.domain.impl.entity.FrontEntityImpl$$Generated$$6",
    "value" : "Societies",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (mgr,log,node,SocietyCodeRef) {
var acronym = node.getValue("SocietyAcronym").getSimpleValue();
var name = node.getValue("OrganizationName").getSimpleValue();
//var url = node.getValue("OrganizationUrl").getSimpleValue();
var objType = node.getObjectType().getID();

var status = false;
//if ((objType == "Organizations")) {
//	logger.info("finished: the object is put in the queue" +objType);
	if (acronym == null || name == null)
	//if (((node.getValue("SocietyAcronym").getSimpleValue() == null) && (node.getValue("OrganizationName").getSimpleValue() == null && node.getValue("OrganizationUrl").getSimpleValue() == null))) 
	{
		
    //      status = true;
		return false;
	}
	//if (((node.getValue("SocietyAcronym").getSimpleValue() != null) && (node.getValue("OrganizationName").getSimpleValue() != null && node.getValue("OrganizationUrl").getSimpleValue() != null))) {
        if (acronym != null && name != null) {	
	log.info('name..' + name);
	log.info('acronym..' + acronym);
	status = true;
	return true;
//}
	}
//if (status = true) {
//	log.info('help me please' + url)
//	return true;

//}	
//}

return false;





}