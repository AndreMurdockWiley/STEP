/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ReSendIssuesToSap",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesWorkFlowGroup" ],
  "name" : "ReSend Issues To Sap",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
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
    "alias" : "IssueRepublish",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Issues_Data_Extract",
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
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "IssueRepublishKafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Issues_Data_Extract_Kafka",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (PRODUCTACTIVATED,UI,IssueRepublish,groupIssueOIEPkafka,groupIssueOIEP,mgr,IssueRepublishKafka,link) {
var selection = UI.getSelection().iterator();
var republished = "";
var notRepublished = "";
while (selection.hasNext()) {
	var NODE = selection.next();
	if(NODE.getValue(PRODUCTACTIVATED.getID()).getValue() == "Activated"){
		NODE.approve();
		IssueRepublish.republish(NODE);
		IssueRepublishKafka.republish(NODE);
		republished = republished+ NODE.getName()+"\n";
		// Populate Group Issue Classification object on all types of Issues (Standard Issues, Merge Issues and Supplement)
		link.createAndUpdateGroupIssues(NODE, mgr, logger, groupIssueOIEPkafka, groupIssueOIEP)
	}
	else{
		notRepublished = notRepublished+ NODE.getName()+"\n";
	}
}

UI.showAlert("ACKNOWLEDGEMENT","Resend Status","The following Issues have been SUCCESSFULLY resent to SAP : \n"+republished+"\n The following Issues HAVE NOT BEEN RESENT To SAP, because they are not active yet : \n"+notRepublished);
}