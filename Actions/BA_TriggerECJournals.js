/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_TriggerECJournals",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Trigger Editorial Contacts Journals",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
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
    "contract" : "WebUiContextBind",
    "alias" : "webUI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalData",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalDataKafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalDataStrategic",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka_Testing",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,webUI,journalData,journalDataKafka,journalDataStrategic) {
var selectedNodes = webUI.getSelection();
for (var i = 0; i < selectedNodes.size(); i++) {
	var journalObj=selectedNodes.get(i);   
    journalData.republish(journalObj);
	journalDataKafka.republish(journalObj);
	journalDataStrategic.republish(journalObj);
}

}