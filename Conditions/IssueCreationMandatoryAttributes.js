/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueCreationMandatoryAttributes",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Issue Creation Mandatory Attributes",
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
    "contract" : "ListOfValuesBindContract",
    "alias" : "IssueTypeLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "IssueType_LOV",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,IssueTypeLOV) {
var supplementNo = NODE.getValue("IssueSupplementNo").getSimpleValue();
var issueType = NODE.getValue("IssueType").getSimpleValue();
var publicationType = NODE.getValue("IssuePublicationType").getSimpleValue();

if (issueType != "" && issueType != null && publicationType != "" && publicationType != null){
	if (issueType == IssueTypeLOV.getListOfValuesValueByID("SU").getValue() && (supplementNo == "" || supplementNo == null)){
		return "'Supplement No' can't be empty for Supplement Issues";
	} else {
		return true;
	}
} else{
	return "There are Empty Mandatory Attributes";
}
}