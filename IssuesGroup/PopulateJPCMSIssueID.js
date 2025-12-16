/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateJPCMSIssueID",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesGroup" ],
  "name" : "PopulateJPCMSIssueID",
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
var trueProductStatus = node.getValue("JournalTrueStatus").getSimpleValue();

if (trueProductStatus == "No") {
	var journalGroupCode = node.getValue("JournalGroupCode").getSimpleValue();
	var volumeNumber = node.getValue("IssueVolumeNumber").getSimpleValue();
	var IssueNumber = node.getValue("IssueFromIssueNumber").getSimpleValue();
	node.getValue("IssueJpcmsId").setSimpleValue(journalGroupCode + "." +volumeNumber + ":"+ IssueNumber+ ".ISS" );
	var issueDOI = node.getValue("IDLIssueDOI").getSimpleValue();
	node.getValue("IssueDoi").setSimpleValue(issueDOI);

}
}