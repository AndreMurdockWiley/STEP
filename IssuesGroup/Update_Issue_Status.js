/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Update_Issue_Status",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesGroup" ],
  "name" : "Update Issue Status",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalIssues", "JournalPrintIssues" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Group Issue Functions",
    "libraryAlias" : "link"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "AttributeBindContract",
    "alias" : "IssueStatus",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "IssueStatus",
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
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
    "contract" : "AttributeBindContract",
    "alias" : "IssueRunDate",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "IssueRunDate",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEPkafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (IssueStatus,manager,log,node,IssueRunDate,groupIssueOIEPkafka,groupIssueOIEP,link) {
var IssueRunDate = node.getValue("IssueRunDate").getSimpleValue();

if (IssueRunDate == null) {
return false;
	} else if (IssueRunDate != null) {
node.getValue("IssueStatus").setLOVValueByID('P');
link.setGroupIssueState(node,manager,log); 
link.createAndUpdateGroupIssues(node, manager, log, groupIssueOIEPkafka, groupIssueOIEP);
}
node.approve();
}