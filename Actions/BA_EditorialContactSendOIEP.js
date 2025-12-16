/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_EditorialContactSendOIEP",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_EditorialContactSendOIEP",
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
    "contract" : "EventQueueBinding",
    "alias" : "refDataOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Reference_data_Extract",
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "refDataEmailOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Reference_data_Extract",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,refDataOIEP,web,refDataEmailOIEP) {
refDataOIEP.republish(node);
refDataEmailOIEP.republish(node);
const parentIDToCheckForSAP = ["JournalCorporateProductsLead" ,"JournalPartnerPublishingLead","JournalPublishingDevelopmentLead"]
const parentIDToCheckForJANIS = ["JournalMarketingManager","JournalEditorialMembershipSpecialist","JournalProductionEditor","JournalEditorialProductionManager"]

if(parentIDToCheckForSAP.includes(node.getParent().getID()+"")){
	log.info("PASS if")
	web.showAlert("ACKNOWLEDGEMENT", "Success Message", "This editorial contact has been successfully published to SAP");
} else if(parentIDToCheckForJANIS.includes(node.getParent().getID()+"")){
	web.showAlert("ACKNOWLEDGEMENT", "Success Message", "This editorial contact has been successfully published to JANIS");
	log.info("PASS Else")
}

}
/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBCBusinessCondition",
  "parameters" : [ {
    "id" : "ReferencedBC",
    "type" : "com.stibo.core.domain.businessrule.BusinessCondition",
    "value" : "BC_EditorialContactSendSAPCondition"
  }, {
    "id" : "ValueWhenReferencedIsNA",
    "type" : "com.stibo.util.basictypes.TrueFalseParameter",
    "value" : "false"
  } ],
  "pluginType" : "Precondition"
}
*/
