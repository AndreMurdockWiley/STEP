/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalHistorySend",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "Journal History Send",
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
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJH",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalHistoryProducts",
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
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalHistory",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=History_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalHistoryKafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=History_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,log,objJH,journalData,journalDataKafka,journalDataStrategic,journalHistory,journalHistoryKafka,UI) {
var selectedNodes = UI.getSelection();
for (var i = 0; i < selectedNodes.size(); i++) {
    var Obj = selectedNodes.get(i).getObjectType().getID();
    var HistoryObject =selectedNodes.get(i) 
    var nodeID = selectedNodes.get(i).getID();
    journalHistory.republish(HistoryObject);
	journalHistoryKafka.republish(HistoryObject);
}

var objType = node.getObjectType().getID();
log.info("ObjectType =" + objType);
if(objType == "JournalHistoryProducts" || "Journal") {

	journalData.republish(node);
	journalDataKafka.republish(node);
	journalDataStrategic.republish(node);
				
	var JournalHistRefs = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
	var myJournalHistoryReferences =node.getReferences(JournalHistRefs).toArray();
	//log.info("My History =" + JournalHistRefs);

	for(var j=0; j<myJournalHistoryReferences.length;j++){
		
		var refType = myJournalHistoryReferences[j].getTarget();
		//log.info("My History2 =" + myJournalHistoryReferences);

		if(JournalHistRefs == "Journal_History_Reference") {
			//journalHistory.republish(refType);
			//journalHistoryKafka.republish(refType);
			//refType.approve();
			
			}
		}
	
	//JournalHistRefs.approve();
}
}