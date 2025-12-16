/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueSupplementNoVerification",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Issue Supplement No Verification",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalIssues", "JournalPrintIssues" ],
  "allObjectTypesValid" : false,
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

if (issueType == IssueTypeLOV.getListOfValuesValueByID("SU").getValue() && (supplementNo == "" || supplementNo == null)){
	return false;
}
return true;
}