/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "SendJournal",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "ResendJournalFromSearch",
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
    "contract" : "AttributeBindContract",
    "alias" : "PRODUCTACTIVATED",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "ProductActivated",
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "JournalRepublish",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "JournalRepublishEmail",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "JournalRepublishCompact",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka_Testing",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (PRODUCTACTIVATED,UI,JournalRepublish,JournalRepublishEmail,JournalRepublishCompact) {
var selection = UI.getSelection().iterator();
var republished = "";
var notRepublished = "";
while (selection.hasNext()) {
	var NODE = selection.next();
	if(NODE.getValue(PRODUCTACTIVATED.getID()).getValue() == "Activated"){
		NODE.approve();
		JournalRepublish.republish(NODE);
		JournalRepublishEmail.republish(NODE);
		JournalRepublishCompact.republish(NODE);
		republished = republished+ NODE.getName()+"\n";
	}
	else{
		notRepublished = notRepublished+ NODE.getName()+"\n";
	}
}

UI.showAlert("ACKNOWLEDGEMENT","Resend Status","The following Journal have been SUCCESSFULLY resent to SAP : \n"+republished+"\n The following Journals HAVE NOT BEEN RESENT To SAP, because they are not active yet : \n"+notRepublished);
}