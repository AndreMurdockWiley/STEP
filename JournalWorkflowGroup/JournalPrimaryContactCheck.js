/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalPrimaryContactCheck",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Journal Primary Contact Check",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
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
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "webui",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,log,webui,mgr) {
const NODE_ID = node.getID();
const LOG_PREFIX = "[BA_CheckOnePrimaryEditorialContact on: " + NODE_ID + "] ";
logger.info(LOG_PREFIX + "Started");
var pushvalues = [];
//var errorMsg = "";
var errorMsg = [];
var editorialcontactprimary_ID = "EditorialContactPrimary";

//var takeReferenceID = ["AssociateManagingEditor","CompEditorialEvaluationTeamLead","CorporateProductsLead","EditorialDirector","EditorInChief","InternalAdvertisingContact","JournalOperationsAssistant","JournalPublishingManager","ManagingEditor","MarketingManager","MarketingPortfolioLead","MembershipSpecialist","MultiJournalPublishingManager","PartnerPublishingDirector","PartnerPublishingLead","PartnerPublishingManager","PartnerSolutionsDirector","PeerReviewPerformanceDirector","PeerReviewPerformanceLead","PeerReviewPerformanceManager","ProductionEditor","ProductionManager","ProductToExternalDataPartnersRefLink","ProductToSocietyGroupReferenceLink","PublishingAssistant","PublishingDevelopmentDirector","PublishingDevelopmentLead","PublishingDevelopmentManager","PublishingDirector","PublishingVP","StrategicContentAcquisitionLead","StrategicContentAcquisitionManager"];
var takeReferenceID = ["CorporateProductsLead","PartnerPublishingLead","PublishingDevelopmentLead"]
			for(var o in takeReferenceID){
				var sourceRefType = mgr.getReferenceTypeHome().getReferenceTypeByID(takeReferenceID[o]);
				var sourceRefs = node.getReferences(sourceRefType);
				for(var p=0; p<sourceRefs.size(); p++){
					var sourceRef = sourceRefs.get(p);
					var sourceRefTarget = sourceRefs.get(p).getTarget().getName();
					//logger.info(sourceRefTarget);
					var sourceRefgetMetaData = sourceRef.getValue("EditorialContactPrimary").getSimpleValue();
				    // logger.info(sourceRefgetMetaData + "sourceRefgetMetaData");
				  
				     pushvalues.push(sourceRefgetMetaData)
				     logger.info(pushvalues);
					
				if(pushvalues == "Yes,Yes,Yes"){
					//return "Only with one value yes allowed to send data";
					webui.showAlert("ERROR", "", "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.");
				}else if(pushvalues == "Yes,,Yes"){
					//return "Only with one value yes allowed to send data";
					webui.showAlert("ERROR", "", "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.");
				}else if(pushvalues == "Yes,Yes,"){
					//return "Only with one value yes allowed to send data";
					webui.showAlert("ERROR", "", "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.");
				}else if(pushvalues == ",,Yes"){
					return true;
				}else if(pushvalues == "Yes,,"){
					return true;
				}else if(pushvalues == ",Yes,"){
					return true;
				}else if(pushvalues == "Yes,Yes,"){
					//return "Only with one value yes allowed to send data";
					webui.showAlert("ERROR", "", "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.");
				}else if(pushvalues == ",,"){
					//return "Only with one value yes allowed to send data";
					webui.showAlert("ERROR", "", "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.");
				}else if(pushvalues == ",Yes,Yes"){
					//return "Only with one value yes allowed to send data";
					webui.showAlert("ERROR", "", "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.");
				}else if(pushvalues == "Yes,Yes"){
					//return "Only with one value yes allowed to send data";
					webui.showAlert("ERROR", "", "Only 1 Primary Contact allowed. Correct the Primary Contact data before sending journal.");
				}
			

		
  
} 			   
}


}