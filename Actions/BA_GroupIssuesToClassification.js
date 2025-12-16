/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_GroupIssuesToClassification",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_GroupIssuesToClassification",
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
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
exports.operation0 = function (node,mgr,logger,groupIssueOIEPkafka,groupIssueOIEP,link) {
link.setGroupIssueState(node,mgr,logger);
link.createAndUpdateGroupIssues(node, mgr, logger, groupIssueOIEPkafka, groupIssueOIEP);
}