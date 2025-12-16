/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateUserGroup",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate User Group",
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
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
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
exports.operation0 = function (node,logger,manager) {
var isReadOnly =true;
var userGroups = manager.getCurrentUser().getAllGroups();

            var users = userGroups .iterator();
			
            while (users.hasNext()) {

                var currentUserGroupInstance = users.next();

                logger.info(currentUserGroupInstance.getID());

//logger.info("userGroups "+userGroups);

if ( (currentUserGroupInstance.getID().equals("ReadOnly/ReportUsers"))||(currentUserGroupInstance.getID().equals("ReadOnly"))) {
	isReadOnly = false;
}
}
return isReadOnly;

}