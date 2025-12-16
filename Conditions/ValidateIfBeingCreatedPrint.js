/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateIfBeingCreatedPrint",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If Being Created - Print",
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
    "contract" : "AttributeBindContract",
    "alias" : "MJMEDIATYPE",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "ProductMediaType",
    "description" : null
  }, {
    "contract" : "CurrentWorkflowBindContract",
    "alias" : "WORKFLOW",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,MJMEDIATYPE,WORKFLOW) {
if(NODE.getValue(MJMEDIATYPE.getID()).getSimpleValue() == null)
{
	return false;
}
if(NODE.getValue(MJMEDIATYPE.getID()).getSimpleValue() == "Print" || NODE.getValue(MJMEDIATYPE.getID()).getSimpleValue() == "Both")
	{
		return true;
	}
return false;
}