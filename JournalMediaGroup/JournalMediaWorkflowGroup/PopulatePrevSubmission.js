/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulatePrevSubmission",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "Populate Prev Submission System",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,log) {
var submission = node.getValue("JournalEditorialSubmissionSystem").getSimpleValue();
//log.info("submission" + submission);
var PrevSubSys = node.getValue("PrevSubmissionSys_PIM").getSimpleValue();
//log.info("PrevSubSys" + PrevSubSys);

node.getValue("PrevSubmissionSys_PIM").setSimpleValue(submission);
//log.info("PrevValue" + node.getValue("PrevSubmissionSys_PIM").getSimpleValue());
	
}